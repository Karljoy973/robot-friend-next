import React from "react";
import { render } from "@testing-library/react";
import TheRobotFriendsHeader from "../atoms/RobotFriendsTypography/the-robot-friends-header";

describe("TheRobotFriendsHeader", () => {
    it("should match the (ERF-0/US-T/US-H1) issue requirements on the pc screen layout", () => {
        let component = render(<TheRobotFriendsHeader />);
        let backTitle = component.baseElement.querySelector('h1.back-text') as HTMLElement
        let frontTitle = component.baseElement.querySelector('h1.front-text') as HTMLElement
        // the text should be "Robot Friends"
        expect(component.queryAllByText("Robot Friends")).toBeDefined();
        // the text should be present twice in the element and in the h1 tag
        expect(backTitle)
        // the text should be present in the h1 tag with the class "robot-friends-header"
        expect(component.container.querySelector(".robot-friends-header")).not.toBeNull();
        //the text should be aligned to the center of the screen
        // the version 1 of the text should be black (#000000)
        expect(backTitle.classList.contains("text-black")).toBe(true);
        // the version 2 of the text should be white (#ffffff)
        expect(frontTitle.classList.contains("text-white")).toBe(true);
        // the version 1 of the text should have a font size of 128px
        expect(backTitle.style.fontSize).toBe("128px");
        // the version 2 of the text should have a font size of 115px
        expect(frontTitle.style.fontSize).toBe("115px");
        // the version 1 of the text should have a font family of "audiowide"
        expect(backTitle.style.fontFamily).toBe("audiowide");
        // the version 2 of the text should have a font family of "audiowide"
        expect(frontTitle.style.fontFamily).toBe("audiowide");
        // the version 1 of the text should have a font weight of 400
        expect(backTitle.style.fontWeight).toBe("400");
        // the version 2 of the text should have a font weight of 400
        expect(frontTitle.style.fontWeight).toBe("400");
        // the version 1 of the text should have a line height of 1
        expect(backTitle.style.lineHeight).toBe("1");
        // the version 2 of the text should have a line height of 1
        expect(frontTitle.style.lineHeight).toBe("1");
        // the version 1 of the text should have a letter spacing of 0
        expect(backTitle.style.letterSpacing).toBe("1px");
        // the version 2 and version 1 should have a different text spacing
        //this expectation is a bit too wide but I don't really know how to express it 
        expect(frontTitle.style.letterSpacing).not.toEqual(backTitle.style.letterSpacing);
    });

    it("should keep matching the (ERF-0/US-T/US-H1) issue requirements on the pc screen layout", () => {
        //snapshot testing 
        expect(true).toBe(false)
    })
    
    it("should match the (ERF-0/US-T/US-H1) issue requirements on the phone screen layout", () => {
        // TODO: Define this layout
        expect(true).toBe(false)
	});
    it("should keep matching the (ERF-0/US-T/US-H1) issue requirements on the phone screen layout", () => {
        //snapshot testing 
        expect(true).toBe(false)
    })
})