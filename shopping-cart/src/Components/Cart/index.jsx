import React from "react";
import { Box, Button } from "@material-ui/core";

const Cart = ({ cartItems, removeFromCart }) => {
	return (
		<>
			<div>
				{cartItems.length === 0 ? (
					<p> Cart is Empty</p>
				) : (
					<div>
						<p>You have {cartItems.length} items</p>
						<p>
							TOTAL: {"$"}
							{cartItems.reduce(
								(total, item) =>
									total + item.count * parseFloat(item.price),
								0
							)}
						</p>
					</div>
				)}
			</div>
			<div>
				{cartItems.map(item => (
					<Box
						display="flex"
						flexDirection="column"
						style={{ border: "1px black solid", padding: 5 }}
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
								{item.price}$ X {item.count}
							</p>
							<Button
								onClick={() => removeFromCart(item)}
								style={{ textTransform: "none" }}
							>
								Remove from Cart
							</Button>
						</Box>
					</Box>
				))}
			</div>
		</>
	);
};

export default Cart;
