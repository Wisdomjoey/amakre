"use client";

import bg from "@/assets/images/bg.jpg";
import header from "@/assets/images/header.png";
import header2 from "@/assets/images/header 2.png";
import Image from "next/image";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Header() {
	const [scope, animate] = useAnimate();
	const [init, setInit] = useState(false);
	const isInView = useInView(scope);
	const [init1, setInit1] = useState(false);
	const [scope1, animate1] = useAnimate();
	const isInView1 = useInView(scope1);

	useEffect(() => {
		if (isInView) {
			setInit(true);

			scope.current.classList.replace("-translate-x-[100%]", "translate-x-0");
			scope.current.classList.replace("opacity-0", "opacity-100");
		}
	}, [animate, isInView, scope]);

	useEffect(() => {
		if (isInView1) {
			setInit1(true);

			scope1.current.classList.replace("-translate-x-[100%]", "translate-x-0");
			scope1.current.classList.replace("opacity-0", "opacity-100");
		}
	}, [animate1, isInView1, scope1]);

	return (
		<div className="relative flex justify-center bg-secondary">
			<Image
				alt="investment background image"
				src={bg}
				className="absolute top-0 w-full h-full object-cover opacity-40"
			/>

			<div className="absolute top-0 w-full h-full bg-gradient-to-b from-[transparent] via-[transparent] to-white dark:to-secondary"></div>

			<div className="mx-width pt-32 sm:pt-16">
				<div className="pt-32 flex justify-around sm:flex-col-reverse sm:gap-10">
					<div
						ref={scope}
						className={`w-full h-fit max-w-lg py-8 px-5 rounded-xl bg-[black]/20 dark:bg-white/20 backdrop-blur-md opacity-0 transition-all duration-[2s] -translate-x-[100%]`}
					>
						<h1 className="text-[transparent] bg-gradient-to-br from-white to-secondary dark:to-primary bg-clip-text font-extrabold text-2xl xs:text-lg mb-4">
							{init && (
								<Typewriter
									onInit={(typer) => {
										typer
											.changeDelay(16)
											.typeString(
												"An Investment Firm Dynamic in Blockchain, Finance & Technology"
											)
											.start();
									}}
								/>
							)}
						</h1>

						<p
							className={`text-xs xs:text-[0.65rem] text-white ${
								init ? "opacity-100" : "opacity-0"
							} delay-[3s] transition-all duration-1000`}
						>
							At AMAKRE, we are dedicated to empowering our clients to achieve
							their goals and thrive in the digital age. Contact us today to
							learn more on how we can support your business growth and success.
						</p>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 2 }}
						viewport={{ once: true }}
						className="relative max-w-xl"
					>
						<Image alt="investment image" src={header} />
					</motion.div>
				</div>

				<div className="pt-32 flex justify-around sm:flex-col sm:gap-10">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 2 }}
						viewport={{ once: true }}
						className="relative max-w-xl"
					>
						<Image alt="investment image" src={header2} />
					</motion.div>

					<div
						ref={scope1}
						className="self-end w-full h-fit max-w-lg py-8 px-5 rounded-xl bg-primary/70 dark:bg-white/20 backdrop-blur-md opacity-0 transition-all duration-[2s] -translate-x-[100%]"
					>
						<span className="uppercase text-xs xs:text-[0.65rem] text-white border-b border-white pb-1">
							introduction
						</span>

						<h2 className="text-[transparent] bg-gradient-to-br from-white to-secondary dark:to-primary bg-clip-text font-extrabold text-2xl xs:text-lg my-4">
							{init1 && (
								<Typewriter
									onInit={(typer) => {
										typer
											.changeDelay(31)
											.typeString("Blockchain, Finance & Technology")
											.start();
									}}
								/>
							)}
						</h2>

						<hr className="border-[lightgray] dark:border-[gray] mb-4" />

						<p
							className={`text-xs xs:text-[0.65rem] text-white ${
								init1 ? "opacity-100" : "opacity-0"
							} delay-[3s] transition-all duration-1000`}
						>
							AMAKRE is a dynamic blockchain, finance, and technology company
							dedicated to pioneering innovation in the digital and traditional
							finance sectors. As a prominent venture capitalist firm, AMAKRE
							identifies and invests in cutting-edge projects while also
							offering comprehensive education through its finance academy. With
							a diverse portfolio of products and a vision for growth, AMAKRE is
							poised to lead the way in shaping the future of finance.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
