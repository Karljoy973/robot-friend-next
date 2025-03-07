import React, { ChangeEvent } from "react";

interface RobotSearchBarProps {
	searchRobot: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RobotSearchBar: React.FC<RobotSearchBarProps> = ({ searchRobot }) => {
	return (
		<div className="w-full max-w-md mx-auto px-4 mt-6">
			<input
				type="search"
				onChange={searchRobot}
				maxLength={150}
				placeholder="Search Robot"
				className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
				aria-label="Search robots"
				autoComplete="off"
			/>
		</div>
	);
};

export default RobotSearchBar;
