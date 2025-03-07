import { ChangeEvent } from "react";

export interface RobotSearchBarProps {
    searchRobot: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface RobotCardArgs {
    name: string;
    email: string;
    robotId: string;
}

export type RobotCardListArgs = {
    data: RobotCardArgs[];
}

