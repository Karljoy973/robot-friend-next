import React from "react";

type RobotCardArgs = {
    email: string, name: string
}

const RobotCard = ({name, email}: RobotCardArgs) => {
    let id = 5;
    return (<>
        <div>
            <img src={`https://robohash.org/${id}?size=200x200`} />
            <span>
                <h2>{name}</h2>
                <p>{ email } </p>
            </span>
    </div>
    </>);
}
 
export default RobotCard;