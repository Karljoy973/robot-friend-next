import React from "react";
import RobotCard, { RobotCardArgs } from "../RobotCard/robot-card";
import { v7 as uuidv7 } from "uuid";

type RobotCardListArgs = { data: RobotCardArgs[] };
const RobotCardList = ({ data }: RobotCardListArgs) => {
  let items = data.map((e) => (
		<li className="mx-4 my-2" key={uuidv7()}>
			<RobotCard {...e} />
		</li>
  ));
  return (
    <div>
      <ul className="flex flex-wrap">{items}</ul>
    </div>
  );
};

export default RobotCardList;
