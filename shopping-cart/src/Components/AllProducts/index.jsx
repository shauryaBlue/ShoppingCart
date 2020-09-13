import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";
import { productList } from "../../Configs";
import { SingleProduct, Filter } from "../../Components";

class AllProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: productList
		};
	}
	render() {
		return (
			<Grid container md={30}>
				<Filter />
				<Box>
					<Grid container md={9}>
						{this.state.products.map(product => (
							<Grid item xs={10} sm={6} md={4}>
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
