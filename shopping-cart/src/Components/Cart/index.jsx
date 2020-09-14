import React, { Component } from "react";
import { Box, Button, Slide } from "@material-ui/core";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCheckout: false,
			name: "",
			address: "",
			email: ""
		};
	}
	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	createOrder = e => {
		e.preventDefault();
		const order = {
			name: this.state.name,
			address: this.state.address,
			email: this.state.email,
			cartItems: this.props.cartItems
		};
		this.props.createOrder(order);
	};
	render(props) {
		return (
			<>
				<div style={{ fontFamily: "Montserrat" }}>
					{this.props.cartItems.length === 0 ? (
						<p> Cart is Empty</p>
					) : (
						<div>
							<p>You have {this.props.cartItems.length} items</p>
							<p></p>
						</div>
					)}
				</div>
				<div>
					{this.props.cartItems.map(item => (
						<Slide direction="left" in={true} timeout={500}>
							<Box
								display="flex"
								flexDirection="column"
								style={{
									border: "0.1px #efedee solid",
									padding: 5
								}}
							>
								<Box display="flex" flexDirection="row">
									<img
										src={item.image}
										alt="Dress"
										style={{
											height: "50px",
											width: "50px",
											marginRight: 5
										}}
									/>
									<p>{item.title}</p>
								</Box>
								<Box display="flex" flexDirection="row">
									<p>
										${item.price} X {item.count}
									</p>
									<Button
										onClick={() =>
											this.props.removeFromCart(item)
										}
										style={{
											textTransform: "none",
											fontFamily: "Montserrat"
										}}
									>
										Remove from Cart
									</Button>
								</Box>
							</Box>
						</Slide>
					))}
				</div>
				{this.props.cartItems.length === 0 ? (
					<Box></Box>
				) : (
					<div>
						{!this.state.showCheckout && (
							<Button
								variant="outlined"
								onClick={() =>
									this.setState({
										showCheckout: true
									})
								}
							>
								Proceed
							</Button>
						)}
						<p>
							TOTAL: {"$"}
							{this.props.cartItems.reduce(
								(total, item) =>
									total + item.count * parseFloat(item.price),
								0
							)}
						</p>
					</div>
				)}

				{this.state.showCheckout && (
					<Slide direction="left" in={true} timeout={500}>
						<Box display="flex" flexDirection="column">
							<form
								onSubmit={this.createOrder}
								style={{
									width: "85%",
									display: "flex",
									flexDirection: "column",
									listStyleType: "none"
								}}
							>
								<ul
									style={{
										display: "flex",
										flexDirection: "column",
										listStyleType: "none",
										paddingLeft: 0
									}}
								>
									<li style={{ marginBottom: 4 }}>
										<label>Name</label>
										<input
											name="name"
											type="text"
											required
											onChange={this.handleInput}
											style={{ float: "right" }}
										></input>
									</li>
									<li style={{ marginBottom: 4 }}>
										<label>Address</label>
										<input
											name="address"
											type="text"
											required
											onChange={this.handleInput}
											style={{ float: "right" }}
										></input>
									</li>
									<li style={{ marginBottom: 4 }}>
										<label>Email</label>
										<input
											name="email"
											type="email"
											required
											onChange={this.handleInput}
											style={{ float: "right" }}
										></input>
									</li>
									<li style={{ marginBottom: 4 }}>
										<Button
											variant="outlined"
											type="submit"
										>
											Checkout
										</Button>
									</li>
								</ul>
							</form>
						</Box>
					</Slide>
				)}
			</>
		);
	}
}

export default Cart;
