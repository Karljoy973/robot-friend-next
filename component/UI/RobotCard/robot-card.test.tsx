import { render } from '@testing-library/react'
import React from 'react';
import RobotCard, { RobotCardArgs } from "./robot-card";

//j'aurais aimé mocker ça
let robotData: RobotCardArgs = {
	name: "kalou",
	email: "kalou@kalou.com",
	robotId: "rkbkjkqfdqk",
};

it("shall be a RobotCard", () => {
	let component = render(
		<RobotCard
			name={robotData.name}
			email={robotData.email}
			robotId={robotData.robotId}
		/>
	);
	//on veut qu'il y ait les bons éléments
	expect(component.getByRole("img")).toBeDefined();
	expect(component.getByRole("paragraph")).toBeDefined();
	expect(component.getByRole("heading")).toBeDefined();
});

it('shall stay like a RoboCard', () => {
    let component = render(
		<RobotCard
			name={robotData.name}
			email={robotData.email}
			robotId={robotData.robotId}
		/>
	);
    expect(component).toMatchSnapshot()
})