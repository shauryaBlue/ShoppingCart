import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";
import { productList } from "../../Configs";
import { SingleProduct, Filter } from "../../Components";

class AllProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: productList,
			size: "",
			sort: ""
		};
	}

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
			<Grid container>
				<Filter
					count={this.state.products.length}
					size={this.state.size}
					sort={this.state.sort}
					sortProducts={this.sortProducts}
					filterProducts={this.filterProducts}
				/>
				<Box>
					<Grid container item md={9}>
						{this.state.products.map(product => (
							<Grid key={product._id} item xs={10} sm={6} md={4}>
								<SingleProduct
									image={product.image}
									title={product.title}
									price={product.price}
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			</Grid>
		);
	}
}

export default AllProducts;
