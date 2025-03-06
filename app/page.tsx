import Image from "next/image";
import RobotCardList from "@/component/UI/RobotCardList/robot-card-list";

export default function Home() {
  let data = [
    { email: "toto@toto.com", name: "toto" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
    { email: "toto@toto.com", name: "toto" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
    { email: "toto@toto.com", name: "toto" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
    { email: "toto@toto.com", name: "toto" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
    { email: "toto@toto.com", name: "toto" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
    { email: "toto@toto.com", name: "toto" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
    { email: "tutu@tutu.com", name: "tutu" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
    { email: "toto@toto.com", name: "toto" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "tete@tete.com", name: "tete" },
    { email: "toto@toto.com", name: "toto" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
    { email: "toto@toto.com", name: "toto" },
    { email: "tata@tata.com", name: "tata" },
    { email: "titi@titi.com", name: "titi" },
    { email: "toto@toto.com", name: "toto" },
  ];

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
			<h1 className="sega text-sky-200 text-8xl my-2">Robot Friends</h1>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<RobotCardList data={data} />
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
  );
}
