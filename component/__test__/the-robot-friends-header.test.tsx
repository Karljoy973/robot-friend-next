import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TheRobotFriendsHeader from "../atoms/RobotFriendsTypography/the-robot-friends-header";

describe("TheRobotFriendsHeader", () => {
	it("should match the (ERF-0/US-T/US-H1) issue requirements on the pc screen layout", async () => {
		//import css
		// let mainCss = path.relative(".", "../../app/globals.css");
		// let document = new jsdom.JSDOM(
		// 	`
		//     <!DOCTYPE html>
		//     <html>
		//     <meta http-equiv="content-type" content="text/html; charset=utf-8">
		//     <link rel="stylesheet" href="${mainCss}">
		//     <head>
		//     </head>
		//     <body id="abody" >
		//     </body></html>', jsdom.level(3, 'index'), {
		//     features : {
		//         FetchExternalResources : ['script', 'css'],
		//         QuerySelector : true,
		//     }
		// }`,
		// 	{ resources: "usable", pretendToBeVisual: true }
		// );
		let component = render(<TheRobotFriendsHeader />);
		let frontTitle = screen.getByTestId("front-title");
		let backTitle = screen.getByTestId("back-title");
		let elements = await screen.findAllByText("Robot Friends");
		// the text should be "Robot Friends"
		expect(elements.length).toEqual(2);
		// the text should be present twice in the element and in the h1 tag
		expect(backTitle).toHaveStyle({ color: "black" });
		// the text should be present in the h1 tag with the class "robot-friends-header"
		// the text should be aligned to the center of the screen
		// the version 1 of the text should be black (#000000)
		// expect(backTitle.className.includes("text-black"));
		// // the version 2 of the text should be white (#ffffff)
		// // expect(comp).;
		// // the version 1 of the text should have a font size of 128px
		// expect(backTitle.style.fontSize).toEqual("128");
		// // the version 2 of the text should have a font size of 115px
		// expect(frontTitle.style.fontSize).toEqual("115px");
		// // the version 1 of the text should have a font family of "audiowide"
		// expect(backTitle.style.fontFamily).toEqual("audiowide");
		// // the version 2 of the text should have a font family of "audiowide"
		// expect(frontTitle.style.fontFamily).toEqual("audiowide");
		// // the version 1 of the text should have a font weight of 400
		// expect(backTitle.style.fontWeight).toEqual("400");
		// // the version 2 of the text should have a font weight of 400
		// expect(frontTitle.style.fontWeight).toEqual("400");
		// // the version 1 of the text should have a line height of 1
		// expect(backTitle.style.lineHeight).toEqual("1");
		// // the version 2 of the text should have a line height of 1
		// expect(frontTitle.style.lineHeight).toEqual("1");
		// // the version 1 of the text should have a letter spacing of 0
		// expect(backTitle.style.letterSpacing).toEqual("1px");
		// // the version 2 and version 1 should have a different text spacing
		// //this expectation is a bit too wide but I don't really know how to express it
		// expect(frontTitle.style.letterSpacing).not.toEqual(
		// 	backTitle.style.letterSpacing
		// );
	});

	// it("should keep matching the (ERF-0/US-T/US-H1) issue requirements on the pc screen layout", () => {
	// 	//snapshot testing
	// 	expect(true).toBe(false);
	// });

	// it("should match the (ERF-0/US-T/US-H1) issue requirements on the phone screen layout", () => {
	// 	// TODO: Define this layout
	// 	expect(true).toBe(false);
	// });
	// it("should keep matching the (ERF-0/US-T/US-H1) issue requirements on the phone screen layout", () => {
	// 	//snapshot testing
	// 	expect(true).toBe(false);
	// });
});
