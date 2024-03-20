import { useEffect, useState } from "react";

export const useObserver = ({
	target,
	callback,
}: {
	target: Element;
	callback?: CallableFunction;
}) => {
	const [inView, setInView] = useState(false);

	useEffect(() => {
		if (inView) return;

		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true);
						callback && callback();
					}
				});
			},
			{ threshold: 1 }
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, [callback, inView, target]);
};
