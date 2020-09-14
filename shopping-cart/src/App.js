import React from "react";
import { AllProducts, Navbar } from "./Components";
import { Box } from "@material-ui/core";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
	return (
		<>
			<Provider store={store}>
				<Navbar />
				<Box
					display="flex"
					flexDirection="row"
					style={{ marginTop: "80px", padding: "10px" }}
				>
					<AllProducts />
				</Box>
			</Provider>
		</>
	);
}

export default App;
