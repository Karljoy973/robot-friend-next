import React, { useState } from "react";
import { searchRobot } from "@utils/utils";
import RobotSearchBar from "../RobotSearchBar/robot-search-bar";
import RobotCardList from "../RobotCardList/robot-card-list";
import { RobotCardArgs } from "_@types/types";

export const RobotCatalog: React.FC = () => {
	const [robots, setRobots] = useState<RobotCardArgs[]>([]);
	const [filteredRobots, setFilteredRobots] =
		useState<RobotCardArgs[]>(robots);

		const handleSearch = (event: InputEvent) => {
			if (event.data !== null) {
				const filtered = searchRobot(event, robots);
				setFilteredRobots(filtered);
			}
		};
	return (
		<div className="container mx-auto">
			<RobotSearchBar searchRobot={handleSearch} />
			<RobotCardList data={filteredRobots} />
		</div>
	);
};

export default RobotCatalog;
