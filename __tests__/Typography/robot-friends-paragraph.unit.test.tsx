import { render, screen } from '@testing-library/react'


it("shall enhance the classical paragraph tag", () => {
    render(<RobotFriendsParagraph>
        Hello World
    </RobotFriendsParagraph>)

    let text = screen.getByRole('paragraph')
    expect(text.innerText === 'Hello World')

})