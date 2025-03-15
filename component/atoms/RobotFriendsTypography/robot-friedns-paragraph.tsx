import { Children } from "react";

const RobotFriendsParagraph = ({children}: any) => {
    return (
        <>
                {Children.map(children, child => <p>{ child }</p>)}
    </>);
}
 
export default RobotFriendsParagraph;