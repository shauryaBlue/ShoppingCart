import React, { Component } from "react";

export default class Filter extends Component {
	render(props) {
		return (
			<div
				className="filter"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between"
				}}
			>
				<div className="filter-result">{this.props.count} Products</div>
				<div className="filter-sort">
					Order{" "}
					<select
						onChange={this.props.sortProducts}
						value={this.props.sort}
					>
						<option>Latest</option>
						<option value="lowest">Lowest</option>
						<option value="highest">Highest</option>
					</select>
				</div>
				<div className="filter-size">
					Filter{" "}
					<select
						onChange={this.props.filterProducts}
						value={this.props.size}
					>
						<option value="">ALL</option>
						<option value="XS">XS</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
						<option value="XXL">XXL</option>
					</select>
				</div>
			</div>
		);
	}
}
