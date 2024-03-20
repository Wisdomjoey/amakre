"use client";

import Card from "./widgets/card";
import Pager from "./widgets/pager";
import { motion } from "framer-motion";

function About() {
	const vart = {
		hide: {
			scale: 1,
		},
		show: {
			scale: 1,
			transition: {
				type: "spring",
				staggerChildren: 0.5,
			},
		},
	};

	return (
		<div className="pt-32 sm:pt-16">
			<div className="mx-width">
				<Pager title="About Amakre" />

				<motion.div
					initial="hide"
					whileInView="show"
					viewport={{ once: true }}
					variants={vart}
					className="py-10"
				>
					<div className="py-5 flex sm:flex-col gap-10 flex-wrap justify-evenly">
						<Card
							className="sm:self-center"
							title="Establishment"
							text="AMAKRE Firm was founded on March 27th, 2020, with a vision to
					revolutionize the investment landscape. Under the leadership of CEO
					Isaac Caleb, also known as King Kelele, the firm has emerged as a
					prominent player in both traditional and digital business management."
						/>

						<Card
							className="sm:self-end"
							title="Expertise"
							text="CEO Isaac Caleb is renowned for his expertise in business management
						across traditional and digital systems. His strategic vision and
						leadership have propelled AMAKRE Firm to new heights in the
						competitive market."
						/>
					</div>

					<div className="py-5 flex sm:flex-col gap-10 flex-wrap justify-between">
						<Card
							title="Headquarters"
							text="AMAKRE Firm is headquartered in Osogbo, the capital city of Osun
						State, located in the western part of Nigeria. Situated at Ringroad,
						the firm enjoys a strategic location conducive to business
						operations and growth."
						/>

						<Card
							className="sm:self-end"
							title="Meaning of 'AMAKRE'"
							text="The word 'AMAKRE' holds significant meaning, signifying a royalty
						trade dealer with a distinguished reputation across the universe. It
						reflects the firm's commitment to excellence, integrity, and global
						recognition."
						/>
					</div>

					<div className="py-5 flex sm:flex-col gap-10 flex-wrap justify-around">
						<Card
							title="Mission and Vision"
							text="AMAKRE aims to achieve global prominence before its third decade of
						operation, striving to become the premier investment firm in Africa.
						With a focus on collaboration with experts, the firm is dedicated to
						delivering exceptional value to its clients and stakeholders."
						/>

						<Card
							className="sm:self-center"
							title="Regulatory Compliance"
							text="AMAKRE Firm is duly registered under the Corporate Affairs
						Commission (CAC) of Nigeria, ensuring compliance with all regulatory
						requirements. The firm adheres to strict standards and is equipped
						with the necessary documentation to combat money laundering, fraud,
						and other illicit activities."
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default About;
