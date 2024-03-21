import Image from "next/image";
import Pager from "./widgets/pager";
import service from "@/assets/images/header 2.png";

function Services() {
	const services = [
		{
			title: "Professional Business Branding",
			description:
				"Elevate your brand identity with our professional business branding services. From logo design to brand strategy, we help you make a lasting impression in the market.",
		},
		{
			title: "Website Creation",
			description:
				"Our expert team specializes in website creation using a wide range of programming languages, including but not limited to:",
			// sub: [
			// 	"HTML/CSS",
			// 	"JavaScript (Node.js, React)",
			// 	"Python (Django, Flask)",
			// 	"PHP (Laravel)",
			// 	"Ruby on Rails",
			//   ''
			// ],
		},
		{
			title: "App Creation & UI/UX Design",
			description:
				"Transform your ideas into intuitive and visually appealing mobile applications with our app creation and UI/UX design services. We prioritize user experience to ensure seamless navigation and engagement.",
		},
		{
			title: "Venture Capitalist",
			description:
				"Access strategic investment opportunities and funding support through our venture capitalist services. We invest in innovative projects across various industries to drive growth and success.",
		},
		{
			title: "Marketing/Influencing",
			description:
				"Amplify your brand presence and reach your target audience effectively with our marketing and influencing services. We leverage data-driven strategies and industry insights to maximize your marketing ROI.",
		},
		{
			title: "DEX and DApps Creation",
			description:
				"Harness the power of decentralized finance (DeFi) with our DEX and DApps creation services. From decentralized exchanges to blockchain-based applications, we help you navigate the rapidly evolving world of Web3.",
		},
		{
			title: "Web3 Project Management",
			description:
				"Seamlessly manage your Web3 projects from conception to execution with our expert project management services. We prioritize transparency, efficiency, and collaboration to deliver exceptional results.",
		},
		{
			title: "Academy on Digital Skill Courses",
			description:
				"Equip yourself and your team with essential digital skills through our comprehensive academy courses. From programming languages to digital marketing strategies, we offer tailored courses to meet your learning needs.",
		},
		{
			title: "Live Session Full Trading Course",
			description:
				"Dive into the world of cryptocurrency and forex trading with our live session full trading courses. Led by industry experts, our courses provide practical insights and strategies for success in the dynamic financial markets.",
		},
	];

	return (
		<div className="pt-32 sm:pt-16">
			<div className="mx-width">
				<Pager
					title="Amakre Services"
					text="At AMAKRE, we offer a comprehensive suite of professional services tailored to meet the diverse needs of our clients. With a commitment to excellence and innovation, we empower businesses and individuals to thrive in the digital landscape. Our range of services includes:"
				/>

				<div className="py-10">
					<div className="grid md:grid-cols-3 tablet:grid-cols-2 gap-8">
						<div className="row-span-2 xs:row-span-1">
							<Image alt={"Image showcasing services rendered"} src={service} />
						</div>

						{services.map((service, ind) => (
							<div key={ind} className="p-5 rounded-lg border border-primary">
								<h4 className="font-semibold text-primary text-3xl xs:text-2xl mb-5">
									{(ind + 1).toString().padStart(2, "0")}
								</h4>

								<h5 className="font-semibold text-secondary dark:text-white text-sm xs:text-xs mb-3">
									{service.title}
								</h5>

								<p className="text-xs xs:text-[0.65rem] text-secondary dark:text-[lightgray]">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
