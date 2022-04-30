import type { NextPage } from "next";
import Head from "next/head";

// Components
import HeroSection from "../components/home/Hero";

const Home: NextPage = () => {
	return (
		<div>
			<main>
				<HeroSection />
			</main>
		</div>
	);
};

export default Home;
