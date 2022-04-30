import type { NextPage } from "next";
import Head from "next/head";

// Components
import HeroSection from "../components/home/Hero";
import ServiceSection from "../components/home/Services";
import FirstGrid from "../components/home/FirstGrid";
import FunctionSection from "../components/home/FunctionGrid";
import VideoSection from "../components/home/VideoGrid";
import Banner from "../components/home/Banner";

const Home: NextPage = () => {
	return (
		<div>
			<main>
				<HeroSection />
				<ServiceSection />
				<FirstGrid />
				<FunctionSection />
				<VideoSection />
				<Banner />
			</main>
		</div>
	);
};

export default Home;
