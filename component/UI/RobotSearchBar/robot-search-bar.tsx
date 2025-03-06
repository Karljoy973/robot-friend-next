import React from "react";
const RobotSearchBar = () => {
	return (
		<>
			<input
				type="search"
				onChange={(e) => {
					console.log(e);
				}}
				maxLength={150}
				placeholder="Search Robot"
				pattern="" //écrire la regex
			/>
		</>
	);
};

export default RobotSearchBar;
