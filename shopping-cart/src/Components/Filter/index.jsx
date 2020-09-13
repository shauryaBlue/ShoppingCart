import React from "react";
import { Box, Typography, Divider } from "@material-ui/core";

const Filter = () => {
	return (
		<>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				style={{ width: "60%" }}
			>
				<Typography>Products</Typography>
				<Typography>Order</Typography>
				<Typography>Filter</Typography>
			</Box>
			<Divider style={{ marginBottom: "20px" }} />
		</>
	);
};

export default Filter;
