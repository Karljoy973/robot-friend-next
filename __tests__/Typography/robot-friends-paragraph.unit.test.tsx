import { render, screen } from "@testing-library/react";
import RobotFriendsParagraph from "@/component/atoms/RobotFriendsTypography/robot-friends-paragraph";

let tailwindColorMatcher =
	/^(text|bg)-\[#([0-9A-Fa-f]{6})\]-(100|200|300|400|500|600|700|800|900)$/;

it("shall enhance the classical paragraph tag without text / bg color", () => {
	const elem = render(
		<RobotFriendsParagraph>Hello World</RobotFriendsParagraph>
	);
	expect(elem.getByRole("paragraph").className).not.toMatch(
		tailwindColorMatcher
	);

	console.log(screen.getByRole("paragraph").innerText);
	expect(screen.getByText("Hello World")).toBeDefined();
});

it("shall have a white (#ffffff) text", () => {
	//text-color should match tailwind specs
	const elem = render(
		<RobotFriendsParagraph text-color="text-white">
			Hello World
		</RobotFriendsParagraph>
	);
	expect(elem.getByRole("paragraph").className).toContain("text-white");
});

it("shall have a blue background", () => {
	//bg-color should match tailwind specs
	const elem = render(
		<RobotFriendsParagraph bg-color="bg-blue-950"></RobotFriendsParagraph>
	);
	expect(elem.getByRole("paragraph").className).toContain("bg-blue-950");
});
