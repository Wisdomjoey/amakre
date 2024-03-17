function Pager({ title, text }: { title: string; text?: string }) {
	return (
		<div className="min-h-20 h-fit rounded-se-lg overflow-hidden bg-card dark:bg-card__dark">
			<div className="flex h-10">
				<div className="h-full w-fit rounded-t-lg px-6 pt-4 shadow-[0px_-10px_0_0_white] dark:shadow-[0px_-10px_0_0_#010e1d]">
					<h3 className="text-white font-semibold">{title}</h3>
				</div>

				<div className="flex-1 h-full rounded-es-lg bg-white dark:bg-secondary"></div>
			</div>

			{text && (
				<div className="text-xs px-6 py-3 text-secondary">
					<p>{text}</p>
				</div>
			)}
		</div>
	);
}

export default Pager;
