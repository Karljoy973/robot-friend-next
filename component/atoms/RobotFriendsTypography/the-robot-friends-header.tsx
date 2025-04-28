const TheRobotFriendsHeader = () => {
  return (
    <>
      <header
        data-testid="robot-friends-header"
        className="robot-friends-header relative inline-block min-h-screen content-center justify-items-center"
      >
        <div className="relative">
          <h2
            aria-level={2}
            data-testid="back-title"
            className="text-black 
						text-[128px]
						font-bold 
						tracking-normal
						"
          >
            Robot Friends
          </h2>
          <h2
            aria-level={2}
            data-testid="front-title"
            className="absolute 
						top-[15px]
						left-[1px]
						text-[115px]
						font-bold
						tracking-[7px]
						text-white
						"
          >
            Robot Friends
          </h2>
        </div>
      </header>
    </>
  );
};

export default TheRobotFriendsHeader;
