import React from "react";
import {v7 as uuidv7} from 'uuid'
export type RobotCardArgs = {
    email: string, name: string, robotId? : string
}

const RobotCard = ({ name, email, robotId }: RobotCardArgs) => {
    let Id = robotId ?? uuidv7();
	return (
		<>
			<div
				id={Id}
				className="flex w-3xs flex-col justify-center items-center rounded-2xl bg-teal-200">
				<img
					src={`https://robohash.org/${Id}?size=200x200`}
					className="my-4"
				/>
				<span className="grow flex flex-col justify-center items-center my-4">
					<h2 className="w-fit text-xl font-semibold font-[system-ui] text-black">
						{name}
					</h2>
					<p className="font-[system-ui] text-black font-medium">
						{email}
					</p>
				</span>
			</div>
		</>
	);
}
 
export default RobotCard;