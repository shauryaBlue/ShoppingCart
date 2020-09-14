import React from "react";
import { AllProducts, Navbar } from "./Components";
import { Box } from "@material-ui/core";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Box
				display="flex"
				flexDirection="row"
				style={{ marginTop: "80px", padding: "10px" }}
			>
				<AllProducts />
			</Box>
		</>
	);
}

export default App;
