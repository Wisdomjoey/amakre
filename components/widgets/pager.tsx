"use client";

import { motion } from "framer-motion";

function Pager({ title, text }: { title: string; text?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}
			className="min-h-20 h-fit rounded-se-lg overflow-hidden bg-card dark:bg-card__dark"
		>
			<div className="flex h-10">
				<div className="h-full w-fit rounded-t-lg px-6 pt-4 shadow-[0px_-10px_0_0_white] dark:shadow-[0px_-10px_0_0_#010e1d]">
					<h3 className="text-white font-semibold xs:text-sm">{title}</h3>
				</div>

				<div className="flex-1 h-full rounded-es-lg bg-white dark:bg-secondary"></div>
			</div>

			{text && (
				<div className="text-xs xs:text-[0.65rem] px-6 py-3 text-secondary dark:text-white">
					<p>{text}</p>
				</div>
			)}
		</motion.div>
	);
}

export default Pager;
