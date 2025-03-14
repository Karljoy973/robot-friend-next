import TheRobotFriendsAboutHeader from '@/component/atoms/RobotFriendsTypography/the-robot-friends-about-header'
import { render, screen } from '@testing-library/react'

it("should contain the string 'About the Project' ", async() => {
	render(<TheRobotFriendsAboutHeader />);
	//j'ai du mal à comprendre comment findAllByText fonctionne !
	let headers = await screen.findAllByText("About This Project");

	expect(headers).toHaveLength(2);

	expect(headers[0].classList).toContain("text-black");
	expect(headers[1].classList).toContain("text-white");

})