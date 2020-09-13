import React from "react";
import { AllProducts, Cart, Navbar } from "./Components";
import { Box } from "@material-ui/core";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Box
				display="flex"
				flexDirection="row"
				style={{ marginTop: "80px" }}
			>
				<AllProducts />
				<Cart />
			</Box>
		</>
	);
}

export default App;
