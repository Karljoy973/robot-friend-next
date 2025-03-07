import React from "react";
import { render } from "@testing-library/react";
import RobotSearchBar from "./robot-search-bar";
import { searchRobot } from "@utils/utils";
let robotList = [
	{
		name: "robot",
		email: "robot@robot.coom",
	},
	{
		name: "kaka",
		email: "kaka@kaka.coom",
	},
	{
		name: "kake",
		email: "kake@kake.coom",
	},
];
let robotNotToFind = {
	name: "tektek",
	email: "tektek@tektek.coom",
};
let robotToFind = {
	name: "robot",
	email: "robot@robot.coom",
};
let mockEventNoOutput = new InputEvent("mockEventNoOutput", {
	data: robotNotToFind.name,
});
let mockEvent1Output = new InputEvent("mockEvent1Output", { data: "rob" });
let mockEvent2Output = new InputEvent("mockEvent2Output", { data: "ka" });

describe("which component compose my RobotSearchBar", () => {
	it("should recieve text and search across the robot list", () => {
		//input
		let component = render(<RobotSearchBar />);
		//type search
		expect(component.findByPlaceholderText("Search Robot")).toBeDefined();
		//placeholder
		expect(component.findByLabelText("Looking for a Robot ?"));
	});
});

describe("how the ui is reacting to the handled input event", () => {
	it("should not change the display", () => {
		let component = render(<RobotSearchBar />);
		expect(true).toBe(false);
		//j'ai un mock d'event, que je fournis à mon composoant
		// je veux que le composant ne change pas
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
});

describe("how the input event is handled", () => {
	it("should return the correct subset of robots when the user types a robot name that is in the list", () => {
		expect(searchRobot(mockEvent1Output, robotList)).toEqual([robotToFind]);
		expect(searchRobot(mockEvent2Output, robotList)).toEqual([
			{
				name: "kaka",
				email: "kaka@kaka.coom",
			},
			{
				name: "kake",
				email: "kake@kake.coom",
			},
		]);
	});

	it("should not find the following robot", () => {
		console.log(searchRobot(mockEventNoOutput, robotList));
		expect(searchRobot(mockEventNoOutput, robotList)).toEqual([]);
	});
});