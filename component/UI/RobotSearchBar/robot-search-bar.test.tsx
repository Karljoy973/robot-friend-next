import React from "react";
import { render } from "@testing-library/react";
import RobotSearchBar from "./robot-search-bar";

let robotList = [
	{
		name: "robot",
		email: "robot@robot.coom",
	},
	{
		name: "kaka",
		email: "kaka@kaka.coom",
	},
];

it("should recieve text and search across the robot list", () => {
	//input
	let component = render(<RobotSearchBar />);
	//type search
	expect(component.findByPlaceholderText("Search Robot")).toBeDefined();
	//placeholder
	expect(component.findByLabelText("Looking for a Robot ?"));
});

it("should return the correct subset of robots when the user types a robot name", () => {
	let robotToFind = {
		name: "robot",
		email: "robot@robot.coom",
	};
	expect(() => {}).toEqual(robotToFind);
});

it("should not find the following robot", () => {
	let robotNotToFind = {
		name: "tektek",
		email: "tektek@tektek.coom",
	};

	expect(() => {}).not.toEqual(robotNotToFind);
});
it("should not change the display", () => {
	let component = render(<RobotSearchBar />);
	expect(true).toBe(false);
	//should find the name and the email of each robot when there is no input
});

it("should find the correct robots", () => {
	let component = render(<RobotSearchBar />);
	expect(true).toBe(false);
	//should find the name and the email of each robot when there is no input
});
it("should not change the display", () => {
	let component = render(<RobotSearchBar />);
	expect(true).toBe(false);
	//should find the name and the email of each robot when there is no input
});

it("should remain a Roboat Searchbar", () => {
	let component = render(<RobotSearchBar />);
	expect(component).toMatchSnapshot();
});
