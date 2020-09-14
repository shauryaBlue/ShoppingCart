import React from "react";
import {
	IconButton,
	Button,
	AppBar,
	Toolbar,
	Hidden,
	Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const Navbar = ({ classes, props }) => {
	return (
		<>
			<AppBar className={classes.appBarBackground}>
				<Toolbar className={classes.toolbarBackground}>
					<div style={{ flex: 1 }}>
						<IconButton>
							<Typography
								style={{
									color: "white",
									fontFamily: "Montserrat"
								}}
							>
								React Shopping Cart
							</Typography>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default withStyles(styles)(Navbar);
