import Pager from "./widgets/pager";

function Products() {
	const products = [
		{
			name: "StartFi",
			description:
				"StartFi is a revolutionary financial app designed to empower individuals to improve their financial status. It offers a fixed deposit savings plan with a lucrative reward of 11% interest annually, providing users with a secure and profitable avenue to grow their savings. StartFi also includes a minor investment plan accessible to everyone, fostering a culture of financial responsibility and growth.",
			features: [
				"Fixed deposit savings with 11% annual interest.",
				"Minor investment plan for individuals.",
				"Focus on building financial stability and wealth accumulation.",
			],
		},
		{
			name: "iBASE",
			description:
				"iBASE is a comprehensive bill payment app that simplifies the process of paying various bills, including data subscriptions, electricity bills, airtime top-ups, and examination fees (e.g., WAEC, NECO, JAMB). With iBASE, users can conveniently manage all their bill payments in one place, saving time and effort.",
			features: [
				"Bill payment for data subscriptions, electricity bills, airtime, and examination fees.",
				"Streamlined and user-friendly interface for easy bill management.",
				"Consolidated platform for efficient bill payment processing.",
			],
		},
		{
			name: "DOCKBOTPAD",
			description:
				"DOCKBOTPAD is a cutting-edge web3 project that offers a range of decentralized financial services. It serves as a decentralized wallet with built-in bot functionality for trading on decentralized exchanges (DEX). Additionally, DOCKBOTPAD operates as a launchpad for projects, providing liquidity loans and facilitating staking pool mechanisms to support project development.",
			features: [
				"Decentralized wallet with built-in trading bot for DEX.",
				"Launchpad for project funding and liquidity provision.",
				"Staking pool mechanisms for enhanced participation and rewards.",
			],
		},
		{
			name: "DEXP2P PROTOCOL",
			description:
				"DEXP2P Protocol is a web3 project designed to facilitate decentralized peer-to-peer transactions between cryptocurrency and fiat currency. It offers a decentralized wallet app with integrated DEX functionality, enabling seamless and secure peer-to-peer exchanges. DEXP2P Protocol empowers users with greater control over their assets and transactions.",
			features: [
				"Decentralized peer-to-peer transactions between cryptocurrency and fiat currency.",
				"Integrated wallet app with DEX functionality for secure asset management.",
				"Enhanced privacy and security for peer-to-peer exchanges.",
			],
		},
		{
			name: "AMAKRE HEDGEFUND",
			description:
				"AMAKRE HedgeFund is a comprehensive product app developed to cater to the fund management needs of institutional investors and high-net-worth individuals. It offers professional fund management services, leveraging expertise in investment strategies, portfolio diversification, and risk management to optimize returns and achieve financial goals.",
			features: [
				"Professional fund management services for institutional investors.",
				"Expertise in investment strategies and risk management.",
				"Focus on optimizing returns and achieving financial objectives.",
			],
		},
	];

	return (
		<div className="pt-32 sm:pt-16">
			<div className="mx-width">
				<Pager
					title="Amakre Products"
					text="These products exemplify Amakre's commitment to innovation, financial empowerment and excellence in the blockchain, finance and technological sectors"
				/>

				<div className="py-10">
					<div className="flex flex-wrap items-stretch justify-center gap-8">
						{products.map((product, ind) => (
							<div
								key={ind}
								className="flex-1 flex flex-col justify-between max-w-sm min-w-[300px] xs:min-w-[270px] rounded-lg hover:shadow-[4px_4px_7px_rgba(0,0,0,0.3)] dark:hover:shadow-[4px_4px_7px_rgba(0,0,0,1)] transition-shadow duration-300 group p-4 bg-primary dark:bg-primary/30 backdrop-blur-md even:bg-white dark:even:bg-secondary even:border border-primary"
							>
								<div className="w-full">
									<div className="pb-4 flex items-center justify-end">
										<div className="w-4 h-4 rounded-[50%] bg-white dark:bg-secondary group-even:border border-primary group-hover:shadow-[4px_4px_7px_rgba(0,0,0,0.3)_inset] dark:group-hover:shadow-[4px_4px_7px_rgba(0,0,0,1)_inset] transition-shadow duration-300"></div>
									</div>

									<div className="text-white group-even:text-primary">
										<h4 className="uppercase font-semibold mb-2 xs:text-sm">
											{product.name}
										</h4>

										<h5 className="font-medium text-sm xs:text-xs mb-1">Description</h5>

										<p className="text-[lightgray] group-even:text-secondary dark:group-even:text-[lightgray] text-xs xs:text-[0.65rem]">
											{product.description}
										</p>

										<h5 className="font-medium text-sm xs:text-xs mb-1 mt-3">
											Key Features
										</h5>

										<ul className="text-[lightgray] group-even:text-secondary dark:group-even:text-[lightgray] text-xs xs:text-[0.65rem] list-inside list-decimal">
											{product.features.map((feature, ind1) => (
												<li key={ind1}>{feature}</li>
											))}
										</ul>
									</div>
								</div>

								<button className="mt-6 bg-white dark:bg-primary group-even:bg-primary rounded-lg w-full py-3 text-sm font-semibold text-primary dark:text-white group-even:text-white">
									Coming Soon
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;
