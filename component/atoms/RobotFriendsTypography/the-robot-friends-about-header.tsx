const TheRobotFriendsAboutHeader = () => {
  return (
    <>
      <header
        data-testid="robot-friends-about-header"
        className="robot-friends-header relative inline-block min-h-screen content-center justify-items-center"
      >
        <div className="relative flex flex-nowrap">
          <h3
            aria-level={2}
            data-testid="back-title"
            className="text-black 
						text-[64px]
						font-bold 
						tracking-normal
						"
          >
            About This Project
          </h3>
          <h3
            aria-level={2}
            data-testid="front-title"
            className="absolute 
						top-[12px]
						
						text-[54px]
						font-bold
						tracking-[6px]
						text-white
						"
          >
            About This Project
          </h3>
        </div>
      </header>
    </>
  );
};

export default TheRobotFriendsAboutHeader;
