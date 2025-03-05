import React from "react";
import RobotCardList from "./robot-card-list";
import { render, screen } from "@testing-library/react";

let db = [
	{ email: "toto@toto.com", name: "toto" },
	{ email: "tata@tata.com", name: "tata" },
	{ email: "titi@titi.com", name: "titi" },
	{ email: "toto@toto.com", name: "toto" },
	
];

it("shall display a list of Robot Cards", () => {
    // je dois avoir n RobotCards dans le body ou dans un de ses enfants
    let list = render(<RobotCardList data={db} />)
    expect(screen.getAllByRole('generic').length).toEqual(db.length)
    
});
