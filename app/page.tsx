import About from "@/components/About";
import Cores from "@/components/Cores";
import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
	return (
		<main className="">
			<section>
				<Header />
			</section>

			<section id="about">
				<About />
			</section>

			<section id="products">
				<Products />
			</section>

			<section id="cores">
				<Cores />
			</section>
		</main>
	);
}

