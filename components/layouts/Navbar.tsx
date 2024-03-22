"use client";

import Image from "next/image";
import Link from "next/link";
import logo2 from "@/assets/images/logo2.png";
import { useRef, useState } from "react";

function Navbar() {
	const menuRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false)

	const toggleDark = () => {
		document.documentElement.classList.toggle("dark");
	};

	const openMenu = () => {
		if (menuRef.current?.classList.contains("translate-x-1/2")) return;
		console.log('first')
		
		menuRef.current?.classList.replace("translate-x-[160%]", "translate-x-1/2");
		menuRef.current?.classList.replace("opacity-0", "opacity-100");
		setOpen(true)
	};

	const closeMenu = () => {
		if (menuRef.current?.classList.contains("translate-x-[160%]")) return;
		
		menuRef.current?.classList.replace("translate-x-1/2", "translate-x-[160%]");
		menuRef.current?.classList.replace("opacity-100", "opacity-0");
		setOpen(false)
	};

	return (
		<header className="py-8 fixed top-0 z-50 w-full">
			<div className="relative mx-width !overflow-visible h-16 xs:h-12 rounded-[4rem] xs:rounded-[3rem] bg-primary/40 backdrop-blur-md">
				<nav className="h-full py-1 px-7 xs:px-5 flex items-center justify-between">
					<div className="flex-1">
						<Link href={"/"}>
							<Image alt="Logo" src={logo2} className="w-24 xs:w-20" />
						</Link>
					</div>

					<ul className="flex-1 flex items-center justify-center gap-5 text-xs text-white sm:hidden">
						<li>
							<Link href="#about">About</Link>
						</li>

						<li>
							<Link href="#products">Products</Link>
						</li>

						<li>
							<Link href="#services">Services</Link>
						</li>
					</ul>

					<div className="flex-1 flex justify-end sm:hidden">
						<button
							onClick={toggleDark}
							className="relative w-10 h-10 rounded-[50%] border border-white p-2 flex items-center justify-center"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="stroke-white w-7 h-7 absolute opacity-0 dark:opacity-100 transition-none dark:transition-opacity duration-200"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<path
										d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>{" "}
								</g>
							</svg>

							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="absolute fill-white w-6 h-6 dark:opacity-0 dark:transition-none transition-opacity duration-200"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.39703 11.6315C3.39703 16.602 7.42647 20.6315 12.397 20.6315C15.6858 20.6315 18.5656 18.8664 20.1358 16.23C16.7285 17.3289 12.6922 16.7548 9.98282 14.0455C7.25201 11.3146 6.72603 7.28415 7.86703 3.89293C5.20697 5.47927 3.39703 8.38932 3.39703 11.6315ZM21.187 13.5851C22.0125 13.1021 23.255 13.6488 23 14.5706C21.7144 19.2187 17.4543 22.6315 12.397 22.6315C6.3219 22.6315 1.39703 17.7066 1.39703 11.6315C1.39703 6.58874 4.93533 2.25845 9.61528 0.999986C10.5393 0.751502 11.0645 1.99378 10.5641 2.80935C8.70026 5.84656 8.83194 10.0661 11.397 12.6312C13.9319 15.1662 18.1365 15.3702 21.187 13.5851Z"
									></path>{" "}
								</g>
							</svg>
						</button>
					</div>

					{/* Menu for mobile screen */}
					<div
						ref={menuRef}
						className="w-full absolute right-1/2 translate-x-[160%] transition-all duration-700 ease-in-out opacity-0 top-[calc(100%+1rem)] flex gap-10 justify-between p-5 rounded-lg bg-primary/40 backdrop-blur-md md:hidden"
					>
						<ul className="flex flex-col gap-3 text-[0.65rem] text-white">
							<li>
								<Link
									href="#about"
									onClick={() => closeMenu()}
									onKeyUp={() => closeMenu()}
								>
									About
								</Link>
							</li>

							<li>
								<Link
									href="#products"
									onClick={() => closeMenu()}
									onKeyUp={() => closeMenu()}
								>
									Products
								</Link>
							</li>

							<li>
								<Link
									href="#services"
									onClick={() => closeMenu()}
									onKeyUp={() => closeMenu()}
								>
									Services
								</Link>
							</li>
						</ul>

						<div className="">
							<button
								onClick={toggleDark}
								className="relative w-8 h-8 rounded-[50%] border border-white p-2 flex items-center justify-center"
							>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-white w-5 h-5 absolute opacity-0 dark:opacity-100 transition-none dark:transition-opacity duration-200"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>{" "}
									</g>
								</svg>

								<svg
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="absolute fill-white w-5 h-5 dark:opacity-0 dark:transition-none transition-opacity duration-200"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M3.39703 11.6315C3.39703 16.602 7.42647 20.6315 12.397 20.6315C15.6858 20.6315 18.5656 18.8664 20.1358 16.23C16.7285 17.3289 12.6922 16.7548 9.98282 14.0455C7.25201 11.3146 6.72603 7.28415 7.86703 3.89293C5.20697 5.47927 3.39703 8.38932 3.39703 11.6315ZM21.187 13.5851C22.0125 13.1021 23.255 13.6488 23 14.5706C21.7144 19.2187 17.4543 22.6315 12.397 22.6315C6.3219 22.6315 1.39703 17.7066 1.39703 11.6315C1.39703 6.58874 4.93533 2.25845 9.61528 0.999986C10.5393 0.751502 11.0645 1.99378 10.5641 2.80935C8.70026 5.84656 8.83194 10.0661 11.397 12.6312C13.9319 15.1662 18.1365 15.3702 21.187 13.5851Z"
										></path>{" "}
									</g>
								</svg>
							</button>
						</div>
					</div>

					<button
						onClick={() => (open ? closeMenu() : openMenu())}
						onKeyUp={() => (open ? closeMenu() : openMenu())}
						className="md:hidden"
					>
						<svg
							viewBox="0 -0.5 21 21"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="fill-white w-6 h-6"
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								<g
									id="Page-1"
									stroke="none"
									strokeWidth="1"
									fill="none"
									fillRule="evenodd"
								>
									{" "}
									<g
										id="Dribbble-Light-Preview"
										transform="translate(-139.000000, -200.000000)"
										className="fill-white"
									>
										{" "}
										<g id="icons" transform="translate(56.000000, 160.000000)">
											{" "}
											<path
												d="M101.9,57.009 C101.9,57.56 101.38235,58 100.80275,58 L97.65275,58 C97.0742,58 96.65,57.56 96.65,57.009 L96.65,54.009 C96.65,53.458 97.0742,53 97.65275,53 L100.80275,53 C101.38235,53 101.9,53.458 101.9,54.009 L101.9,57.009 Z M100.80275,51 L97.65275,51 C95.9129,51 94.55,52.352 94.55,54.009 L94.55,57.009 C94.55,58.666 95.9129,60 97.65275,60 L100.80275,60 C102.5426,60 104,58.666 104,57.009 L104,54.009 C104,52.352 102.5426,51 100.80275,51 L100.80275,51 Z M90.35,57.009 C90.35,57.56 89.83235,58 89.25275,58 L86.10275,58 C85.5242,58 85.1,57.56 85.1,57.009 L85.1,54.009 C85.1,53.458 85.5242,53 86.10275,53 L89.25275,53 C89.83235,53 90.35,53.458 90.35,54.009 L90.35,57.009 Z M89.25275,51 L86.10275,51 C84.3629,51 83,52.352 83,54.009 L83,57.009 C83,58.666 84.3629,60 86.10275,60 L89.25275,60 C90.9926,60 92.45,58.666 92.45,57.009 L92.45,54.009 C92.45,52.352 90.9926,51 89.25275,51 L89.25275,51 Z M101.9,46.009 C101.9,46.56 101.38235,47 100.80275,47 L97.65275,47 C97.0742,47 96.65,46.56 96.65,46.009 L96.65,43.009 C96.65,42.458 97.0742,42 97.65275,42 L100.80275,42 C101.38235,42 101.9,42.458 101.9,43.009 L101.9,46.009 Z M100.80275,40 L97.65275,40 C95.9129,40 94.55,41.352 94.55,43.009 L94.55,46.009 C94.55,47.666 95.9129,49 97.65275,49 L100.80275,49 C102.5426,49 104,47.666 104,46.009 L104,43.009 C104,41.352 102.5426,40 100.80275,40 L100.80275,40 Z M90.35,46.009 C90.35,46.56 89.83235,47 89.25275,47 L86.10275,47 C85.5242,47 85.1,46.56 85.1,46.009 L85.1,43.009 C85.1,42.458 85.5242,42 86.10275,42 L89.25275,42 C89.83235,42 90.35,42.458 90.35,43.009 L90.35,46.009 Z M89.25275,40 L86.10275,40 C84.3629,40 83,41.352 83,43.009 L83,46.009 C83,47.666 84.3629,49 86.10275,49 L89.25275,49 C90.9926,49 92.45,47.666 92.45,46.009 L92.45,43.009 C92.45,41.352 90.9926,40 89.25275,40 L89.25275,40 Z"
												id="menu_navigation_grid-[#1528]"
											>
												{" "}
											</path>{" "}
										</g>{" "}
									</g>{" "}
								</g>{" "}
							</g>
						</svg>
					</button>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
