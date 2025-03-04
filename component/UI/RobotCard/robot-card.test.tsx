import { render } from '@testing-library/react'
import React from 'react';
import RobotCard from './robot-card'

it('shall be a RobotCard', () => {
    let component = render(<RobotCard name='Kalou' email='kalou@gmail.com' />); 
    //on veut qu'il y ait les bons éléments 
    expect(component.getByRole('img')).toBeDefined()
    expect(component.getByRole('paragraph')).toBeDefined()
    expect(component.getByRole('heading')).toBeDefined()
})