import TheRobotFriendsHeader from '@/component/atoms/RobotFriendsTypography/the-robot-friends-header';
import { render, screen } from '@testing-library/react';

it('should work', () => {
    let component = render(<TheRobotFriendsHeader />)
    expect(screen.findAllByRole('heading', {
        level: 1
    }))
})