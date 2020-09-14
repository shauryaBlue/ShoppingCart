import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";
import { productList } from "../../Configs";
import { SingleProduct, Filter, Cart } from "../../Components";

class AllProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: productList,
			size: "",
			sort: "",
			cartItems: localStorage.getItem("cartItems")
				? JSON.parse(localStorage.getItem("cartItems"))
				: []
		};
	}

	createOrder = order => {
		console.log(order);
		alert("Create order for	" + order.name);
	};

	sortProducts = event => {
		const sort = event.target.value;
		this.setState({
			sort,
			products: this.state.products
				.slice()
				.sort((a, b) =>
					sort === "highest"
						? a.price < b.price
							? 1
							: -1
						: sort === "lowest"
						? a.price > b.price
							? 1
							: -1
						: a._id > b._id
						? 1
						: -1
				)
		});
	};

	removeFromCart = product => {
		const cartItems = this.state.cartItems.slice();
		this.setState({
			cartItems: cartItems.filter(item => item._id !== product._id)
		});
		console.log(this.state.cartItems);
		localStorage.setItem(
			"cartItems",
			JSON.stringify(cartItems.filter(item => item._id !== product._id))
		);
		console.log(JSON.parse(localStorage.getItem("cartItems")));
	};

	addToCart = product => {
		const cartItems = this.state.cartItems.slice();
		let alreadyInCart = false;
		cartItems.forEach(item => {
			if (item._id === product._id) {
				item.count++;
				alreadyInCart = true;
			}
		});
		if (!alreadyInCart) {
			cartItems.push({ ...product, count: 1 });
		}
		this.setState({ cartItems });
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};

	filterProducts = event => {
		if (event.target.value == "") {
			this.setState({
				size: "",
				products: productList
			});
		} else {
			this.setState({
				size: event.target.value,
				products: productList.filter(
					product =>
						product.availableSizes.indexOf(event.target.value) >= 0
				)
			});
		}
	};

	render() {
		return (
			<Box display="flex" flexDirection="row">
				<Box container style={{ width: "70vw", marginLeft: "2vw" }}>
					<Filter
						count={this.state.products.length}
						size={this.state.size}
						sort={this.state.sort}
						sortProducts={this.sortProducts}
						filterProducts={this.filterProducts}
					/>
					<Box>
						<Grid container>
							{this.state.products.map(product => (
								<Grid
									key={product._id}
									item
									xs={10}
									sm={6}
									md={4}
								>
									<SingleProduct
										product={product}
										addToCart={this.addToCart}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
				<Box style={{ marginLeft: "5vw" }}>
					<Cart
						cartItems={this.state.cartItems}
						removeFromCart={this.removeFromCart}
						createOrder={this.createOrder}
					/>
				</Box>
			</Box>
		);
	}
}

export default AllProducts;
