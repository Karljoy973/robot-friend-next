import React from "react";
import { RobotCardArgs } from "types/types";
import { v7 as uuidv7 } from "uuid";
// export type RobotCardArgs = {
//   email: string;
//   name: string;
//   robotId?: string;
// };

const RobotCard = (props: RobotCardArgs) => {
	let Id = props.robotId ?? uuidv7();
	return (
		<>
			<div
				id={Id}
				className="
				flex
				flex-col
				justify-center
				items-center
				 w-3xs
				 rounded-2xl
				 bg-teal-200
				 transition
				duration-150 
				ease-in-out 
				hover:-translate-y-1
				hover:scale-110
				hover:bg-teal-400
        focusfocus:animate-bounce
        
				 ">
				<img
					src={`https://robohash.org/${Id}?size=200x200`}
					className="my-4"
				/>
				<span className="grow flex flex-col justify-center items-center my-4">
					<h2 className="w-fit text-xl font-semibold font-[system-ui] text-black">
						{props.name}
					</h2>
					<p className="font-[system-ui] text-black font-medium">
						{props.email}
					</p>
				</span>
			</div>
		</>
	);
};

export default RobotCard;
