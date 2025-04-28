import { Children, ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
  "bg-color": string;
  "text-color": string;
};

const RobotFriendsParagraph = (props: Partial<ParagraphProps>) => {
  return (
    <div className="w-[80%] bg-blue-950">
      <p
        className={`robot-friends text-justify ${props["bg-color"] ?? ""} ${props["text-color"] ?? ""}`}
      >
        {" "}
        {props.children}
      </p>
    </div>
  );
};

export default RobotFriendsParagraph;
