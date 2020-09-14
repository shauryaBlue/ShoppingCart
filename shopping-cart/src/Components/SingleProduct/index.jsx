import React from "react";
import { Box, Button, Typography, Slide } from "@material-ui/core";

const SingleProduct = ({ product, addToCart }) => {
	return (
		<Slide in={true} direction="up" timeout={1000}>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				mb={5}
				style={{ fontFamily: "Montserrat" }}
			>
				<img
					src={product.image}
					alt="Dress"
					style={{ width: "290px", height: "370px" }}
				/>
				<Box>
					<Typography style={{ fontFamily: "Montserrat" }}>
						{product.title}
					</Typography>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
					>
						<Typography style={{ fontFamily: "Montserrat" }}>
							{product.price}$
						</Typography>
						<Button
							style={{
								textTransform: "none",
								color: "white",
								padding: 5,
								marginLeft: 10,
								background: "#6495ED",
								fontFamily: "Montserrat"
							}}
							onClick={() => addToCart(product)}
						>
							Add to Cart
						</Button>
					</Box>
				</Box>
			</Box>
		</Slide>
	);
};

export default SingleProduct;
