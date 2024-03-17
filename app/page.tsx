import About from "@/components/About";
import Header from "@/components/Header";

export default function Home() {
	return (
		<main className="">
			<section>
				<Header />
			</section>

			<section id="about">
				<About />
			</section>
		</main>
	);
}

