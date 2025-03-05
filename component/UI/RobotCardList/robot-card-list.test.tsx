import React from "react";
import RobotCardList from "./robot-card-list";
import { render, screen } from "@testing-library/react";

let db = [
	{
		email: "toto@toto.com",
		name: "toto",
		robotId: `${Date.now()}`,
	},
	{
		email: "tata@tata.com",
		name: "tata",
		robotId: `${Date.now()}`,
	},
	{
		email: "titi@titi.com",
		name: "titi",
		robotId: `${Date.now()}`,
	},
	{
		email: "tutu@tutu.com",
		name: "tutu",
		robotId: `${Date.now()}`,
	},
];
beforeEach(() => {
	render(<RobotCardList data={db} />);
});

it("shall display a list of Robot Cards", async () => {
	// je dois avoir n RobotCards dans le body ou dans un de ses enfants
	let list = await screen.findByRole("list");
	expect(list.childElementCount).toEqual(db.length);
});

it("shall display a grid of robot cards correctly", () => {
	expect(screen.getByRole("list", {})).toMatchSnapshot();
});