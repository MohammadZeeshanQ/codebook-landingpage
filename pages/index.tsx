import type { NextPage } from "next";
import Head from "next/head";

// Components
import HeroSection from "../components/home/Hero";
import Banner from "../components/home/Banner";

const Home: NextPage = () => {
	return (
		<div>
			<main>
				<HeroSection />
				<Banner />
			</main>
		</div>
	);
};

export default Home;
