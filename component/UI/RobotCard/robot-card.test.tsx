import { render } from "@testing-library/react";
import React from "react";
import RobotCard from "./robot-card";
import { RobotCardArgs } from "types/types";

let robotData: RobotCardArgs = {
	name: "kalou",
	email: "kalou@kalou.com",
	robotId: "rkbkjkqfdqk",
};

it("shall be a RobotCard", () => {
	let component = render(<RobotCard {...robotData} />);
	//on veut qu'il y ait les bons éléments
	expect(component.getByRole("img")).toBeDefined();
	expect(component.getByRole("paragraph")).toBeDefined();
	expect(component.getByRole("heading")).toBeDefined();
});

it("shall stay like a RoboCard", () => {
	let component = render(<RobotCard {...robotData} />);
	expect(component).toMatchSnapshot();
});
