import TheRobotFriendsHeader from "component/atoms/RobotFriendsTypography/the-robot-friends-header";

export default function Home() {
	return (
		<div
			className="
    grid grid-rows-[20px_1fr_20px]
    items-center justify-items-center
    p-8 pb-20 gap-16 sm:p-20
    font-[family-name:var(--font-geist-sans)]
    overflow-y-auto
    h-[50wh]
    ">
			<TheRobotFriendsHeader />
			<h1 className="sega text-sky-200 text-8xl my-2"></h1>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
}
