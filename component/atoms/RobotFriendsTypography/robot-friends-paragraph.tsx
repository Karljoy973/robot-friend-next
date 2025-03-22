import { Children, ReactNode } from "react";

type ParagraphProps = {
	children: ReactNode, 
	bgColor: string,
	textColor: string
}

const RobotFriendsParagraph = ({children, bgColor, textColor}: Partial<ParagraphProps>) => {
    return (
		<>
			<div>
				{Children.map(children, (child) => {

					if (!child) return <p className={`${bgColor} ${textColor}`}></p>
					return <p className={`${bgColor} ${textColor}`}>{child}</p>
				 })}
			</div>
		</>
	);
}
 
export default RobotFriendsParagraph;