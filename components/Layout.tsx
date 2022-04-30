import React, { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type LayoutProps = PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<NavBar />
			{children}

			<Footer />
		</div>
	);
}
