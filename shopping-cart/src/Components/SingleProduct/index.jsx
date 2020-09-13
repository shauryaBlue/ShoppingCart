import React from "react";
import { Box, Button, Typography } from "@material-ui/core";

const SingleProduct = ({ image, title, price }) => {
	return (
		<Box display="flex" flexDirection="column" alignItems="center" mb={5}>
			<img
				src={image}
				alt="Dress"
				style={{ width: "290px", height: "370px" }}
			/>
			<Box>
				<Typography>{title}</Typography>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
				>
					<Typography>{price}$</Typography>
					<Button
						style={{
							textTransform: "none",
							color: "white",
							padding: 5,
							marginLeft: 10,
							background: "#6495ED"
						}}
					>
						Add to Cart
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default SingleProduct;
