import Image from "next/image";
import Pager from "./widgets/pager";
import logo from "@/assets/images/amakre1.jpg";

function Cores() {
	return (
		<div className="pt-32 sm:pt-16">
			<div className="mx-width">
				<Pager title="Core Business Areas" />

				<div className="py-10">
					<div className="flex items-center gap-32 tablet:pl-9 xs:pl-4">
						<div className="h-full flex items-center justify-center sm:hidden">
							<div className="flex items-center gap-6">
								<Image alt="amakre logo" src={logo} className="w-16" />

								<div className="flex items-center">
									<div className="w-10 border-t-2 border-primary"></div>

									<div className="h-20">
										<div className="h-[calc(50%-1px)] w-16 border-t-2 border-l-2 border-primary rounded-ss-lg"></div>
										<div className="border-t-2 border-primary w-10"></div>
										<div className="h-[calc(50%-1px)] w-16 border-b-2 border-l-2 border-primary rounded-es-lg"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="py-10 border-l-2 border-primary flex flex-col gap-40">
							<div className="relative pl-20 xs:pl-10 flex items-center">
								<div className="absolute -left-5 p-1 rounded-[50%] bg-white dark:bg-secondary">
									<div className="p-2 rounded-[50%] bg-primary/30">
										<div className="w-4 h-4 rounded-[50%] bg-primary"></div>
									</div>
								</div>

								<div className="rounded-lg p-[1px] bg-gradient-to-r from-primary/50">
									<div className="rounded-lg bg-white dark:bg-secondary">
										<div className="p-5 xs:px-3 max-w-lg relative rounded-lg backdrop-blur-md bg-gradient-to-r from-primary/10 text-secondary dark:text-white">
											<h3 className="mb-2 font-semibold text-sm xs:text-xs">
												Venture Capital
											</h3>

											<p className="text-xs xs:text-[0.65rem] dark:text-[lightgray]">
												AMAKRE serves as a strategic venture capitalist firm,
												investing in groundbreaking projects within the digital
												and traditional finance sectors. The company&apos;s
												comprehensive approach identifies and supports
												high-potential ventures, contributing to the evolution
												of the financial industry.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="relative pl-20 xs:pl-10 flex items-center">
								<div className="absolute -left-5 p-1 rounded-[50%] bg-white dark:bg-secondary">
									<div className="p-2 rounded-[50%] bg-primary/30">
										<div className="w-4 h-4 rounded-[50%] bg-primary"></div>
									</div>
								</div>

								<div className="rounded-lg p-[1px] bg-gradient-to-r from-primary/50">
									<div className="rounded-lg bg-white dark:bg-secondary">
										<div className="p-5 xs:px-3 max-w-lg relative rounded-lg backdrop-blur-md bg-gradient-to-r from-primary/10 text-secondary dark:text-white">
											<h3 className="mb-2 font-semibold text-sm xs:text-xs">
												Education Academy
											</h3>

											<p className="text-xs xs:text-[0.65rem] dark:text-[lightgray]">
												Recognizing the importance of financial literacy,
												AMAKRE operates an academy specializing in finance
												education. The academy covers a broad spectrum,
												including cryptocurrency and forex trading, empowering
												individuals with the knowledge and skills needed to
												navigate the complexities of the financial markets.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="relative pl-20 xs:pl-10 flex items-center">
								<div className="absolute -left-5 p-1 rounded-[50%] bg-white dark:bg-secondary">
									<div className="p-2 rounded-[50%] bg-primary/30">
										<div className="w-4 h-4 rounded-[50%] bg-primary"></div>
									</div>
								</div>

								<div className="rounded-lg p-[1px] bg-gradient-to-r from-primary/50">
									<div className="rounded-lg bg-white dark:bg-secondary">
										<div className="p-5 xs:px-3 max-w-lg relative rounded-lg backdrop-blur-md bg-gradient-to-r from-primary/10 text-secondary dark:text-white">
											<h3 className="mb-2 font-semibold text-sm xs:text-xs">
												Hedge Fund Management
											</h3>

											<p className="text-xs xs:text-[0.65rem] dark:text-[lightgray]">
												AMAKRE is a trusted name in hedge fund management,
												offering sophisticated investment strategies and
												portfolio management services. The company&apos;s hedge
												funds, a key component of its diversified financial
												services, have contributed significantly to its market
												valuation.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cores;
