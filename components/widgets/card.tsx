function Card({ title, text }: { title: string; text: string }) {
	return (
		<div className="w-full h-fit max-w-md min-w-[270px] rounded-lg border border-primary bg-primary/10 backdrop-blur-md">
			<div className="flex items-center py-3">
				<div className="px-4">
					<div className="p-1 rounded-[50%] bg-primary/20 dark:bg-primary/40">
						<div className="w-2 h-2 rounded-[50%] bg-primary/40 dark:bg-primary"></div>
					</div>
				</div>

				<div className="px-2">
					<h4 className="text-secondary dark:text-white text-sm font-semibold">
						{title}
					</h4>
				</div>
			</div>

			<div className="px-4">
				<hr className="border-primary" />
			</div>

			<div className="px-4 py-2">
				<p className="text-xs xs:text-[0.65rem] text-secondary dark:text-[lightgray]">
					{text}
				</p>
			</div>
		</div>
	);
}

export default Card;