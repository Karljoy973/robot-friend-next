import TheRobotFriendsHeader from '@/component/atoms/RobotFriendsTypography/the-robot-friends-header';
import { render, screen } from '@testing-library/react';

it("should have the correct structure", async () => {
	render(<TheRobotFriendsHeader />);
	let headers = await screen.findAllByRole("heading", {
		level: 2,
	});
	expect(headers).toHaveLength(2);
	expect(headers[0].className).toContain("text-black");
	expect(headers[1].className).toContain("text-white");

	expect(headers[0].className).toContain("text-[128px]");
	expect(headers[1].className).toContain("text-[115px]");
});