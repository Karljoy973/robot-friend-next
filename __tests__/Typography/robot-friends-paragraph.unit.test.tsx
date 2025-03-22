import { render, screen } from "@testing-library/react";
import RobotFriendsParagraph from "@/component/atoms/RobotFriendsTypography/robot-friends-paragraph";

let tailwindColorMatcher =
	/^(text|bg)-\[#([0-9A-Fa-f]{6})\]-(100|200|300|400|500|600|700|800|900)$/;

it("shall enhance the classical paragraph tag without text / bg color", () => {
	render(
		<RobotFriendsParagraph>
			<p>Hello World</p>
		</RobotFriendsParagraph>
	);

	let text = screen.getAllByText("paragraph");
	expect(text.innerText === "Hello World");
	expect(text.classList).not.toMatch(tailwindColorMatcher);
});

it("shall have a white (#ffffff) text", () => {
	//text-color should match tailwind specs
	render(
		<RobotFriendsParagraph text-color="white">
			<p>Hello World</p>
		</RobotFriendsParagraph>
	);
	expect(screen.getAllByText("paragraph").classList).toContain("text-white");
});

it("shall have a blue background", () => {
	//bg-color should match tailwind specs
	render(<RobotFriendsParagraph bg-color="blue"></RobotFriendsParagraph>);
	expect(screen.getAllByText("generic").classList).toContain("bg-blue");
});
