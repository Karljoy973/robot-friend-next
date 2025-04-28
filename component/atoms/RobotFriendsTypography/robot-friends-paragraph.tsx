import { Children, ReactNode } from "react";

type ParagraphProps = {
	children: ReactNode;
	"bg-color": string;
	"text-color": string;
};

const RobotFriendsParagraph = (props: Partial<ParagraphProps>) => {
	return (
		<div
			className={`robot-friends ${props["bg-color"] ?? ""} ${props["text-color"] ?? ""}`}></div>
	);
};
 
export default RobotFriendsParagraph;