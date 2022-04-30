// import React, { useState, FC } from "react";
// import styled from "styled-components";
// import Link from "next/link";
// import { AppBar, Toolbar, Divider, SwipeableDrawer, List, ListItem, IconButton } from "@mui/material";

// // icons
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// // styled components
// const MainContainer = styled.section`
// 	position: relative;
// `;

// const Wrapper = styled.div`
// 	position: relative;
// 	display: flex;
// 	align-items: center;
// 	width: 84%;
// 	margin: auto;
// 	@media (max-width: 600px) {
// 		width: 95%;
// 	}
// 	@media (min-width: 601px) and (max-width: 1024px) {
// 		width: 90%;
// 	}
// `;

// const LogoWrapper = styled.div`
// 	flex-grow: 1;
// 	display: flex;
// `;

// const ImageWrapper = styled.div`
// 	display: flex;
// 	align-items: center;
// `;

// const LogoText = styled.p`
// 	font-size: 1rem;
// 	font-weight: 600;
// 	letter-spacing: 1px;
// 	@media (max-width: 600px) {
// 		font-size: 0.9rem;
// 	}
// 	@media (min-width: 601px) and (max-width: 1024px) {
// 		font-size: 0.8rem;
// 	}
// `;

// const Logo = styled.a``;

// const LogoImage = styled.img`
// 	width: 2.6rem;
// 	height: 100%;
// 	object-fit: cover;
// 	margin-right: 0.5rem;
// 	@media (max-width: 600px) {
// 		width: 2.5rem;
// 	}
// 	@media (min-width: 601px) and (max-width: 1024px) {
// 		width: 2rem;
// 	}
// `;

// const ButtonTheme = styled.button`
// 	font-size: 0.9rem;
// 	font-weight: 400;
// 	background: transparent;
// 	border: none;
// 	border-radius: 0.2rem;
// 	cursor: pointer;
// 	letter-spacing: 0.5px;
// 	padding: 0.6rem 0.8rem;
// `;

// const ButtonLink = styled.a`
// 	margin: 0 0.5rem;
// 	padding: 0.5rem 0;
// 	border-radius: 0.2rem;
// `;

// const DesktopWrapper = styled.div`
// 	flex-grow: 2;
// 	margin-left: 3rem;
// 	@media (max-width: 1024px) {
// 		display: none;
// 	}
// `;

// const CtaWrapper = styled.div`
// 	@media (max-width: 1024px) {
// 		display: none;
// 	}
// `;

// const CTAButtonTheme = styled.button`
// 	color: var(--blackColor);
// 	background: var(--whiteColor);
// 	font-size: 0.95rem;
// 	font-weight: 500;
// 	border: none;
// 	border-radius: 0.3rem;
// 	cursor: pointer;
// 	letter-spacing: 0.5px;
// 	padding: 0.8rem 1.5rem;
// 	@media (max-width: 600px) {
// 		font-size: var(--MobileFontSize);
// 	}
// 	@media (min-width: 601px) and (max-width: 1024px) {
// 		font-size: 0.65rem;
// 		padding: 0.6rem 1rem;
// 	}
// `;

// const DesktopButton = styled(ButtonTheme)`
// 	color: var(--whiteColor);
// 	background: transparent;
// 	&:hover {
// 		color: var(--blackColor);
// 		background-color: var(--whiteColor);
// 		transition: all 0.2s ease-in-out;
// 	}
// `;

// // Mobile Style
// const MobileWrapper = styled.div`
// 	display: none;
// 	@media (max-width: 1024px) {
// 		display: block;
// 	}
// `;

// const MobileButtonLink = styled.a`
// 	width: 100%;
// 	border-radius: 0.2rem;
// `;

// const MobileButton = styled.button`
// 	color: var(--redColor);
// 	font-size: 1rem;
// 	font-weight: 500;
// 	background: transparent;
// 	display: flex;
// 	justify-content: flex-start;
// 	border: none;
// 	letter-spacing: 0.5px;
// 	margin: 0.5rem 0;
// 	padding: 0.5rem 0;
// 	width: 100%;
// 	cursor: pointer;
// `;

// const NavBar: FC = () => {
// 	const [drawer, setDrawer] = useState<boolean>(false);

// 	// Drawer Handler for Tablet and Mobile device
// 	const drawerHandlerClose = (drawer: boolean) => {
// 		setDrawer(!drawer);
// 	};

// 	return (
// 		<MainContainer>
// 			<AppBar
// 				position='fixed'
// 				elevation={4}
// 				sx={{
// 					// height: 64,
// 					background: "var(--redColor)",
// 				}}
// 			>
// 				<Toolbar>
// 					<Wrapper>
// 						<LogoWrapper>
// 							<Logo href='/'>
// 								<ImageWrapper>
// 									<LogoImage alt='FDIND Image' src='/FdindLogo.png' />
// 									<LogoText>FUTURE DIMENSIONS</LogoText>
// 								</ImageWrapper>
// 							</Logo>
// 						</LogoWrapper>

// 						<DesktopWrapper>
// 							<ButtonLink href='/'>
// 								<DesktopButton>Home</DesktopButton>
// 							</ButtonLink>

// 							<ButtonLink>
// 								<DesktopButton>Products</DesktopButton>
// 							</ButtonLink>

// 							<ButtonLink>
// 								<DesktopButton>Services</DesktopButton>
// 							</ButtonLink>
// 							<ButtonLink>
// 								<DesktopButton>Contact</DesktopButton>
// 							</ButtonLink>
// 							<ButtonLink>
// 								<DesktopButton>About Us</DesktopButton>
// 							</ButtonLink>
// 						</DesktopWrapper>

// 						<CtaWrapper>
// 							<Link href='/contact' passHref>
// 								<CTAButtonTheme>Get Quotation</CTAButtonTheme>
// 							</Link>
// 						</CtaWrapper>

// 						<MobileWrapper onClick={() => setDrawer(true)} style={{ cursor: "pointer" }}>
// 							<MenuIcon sx={{ fontSize: "2rem", color: "var(--whiteColor)" }} />
// 						</MobileWrapper>
// 					</Wrapper>
// 					{/* Swipeable Drawer for Mobile and Tablet View */}
// 					<SwipeableDrawer
// 						anchor='right'
// 						open={drawer}
// 						onOpen={drawerHandlerClose}
// 						onClose={drawerHandlerClose}
// 					>
// 						<List sx={{ width: 280 }}>
// 							<ListItem sx={{ justifyContent: "flex-end" }}>
// 								<IconButton onClick={drawerHandlerClose}>
// 									<CloseIcon sx={{ color: "var(--redColor)", fontSize: "2rem" }} />
// 								</IconButton>
// 							</ListItem>
// 							<Divider />
// 							<ListItem>
// 								<MobileButtonLink href='/'>
// 									<MobileButton onClick={drawerHandlerClose}>Home</MobileButton>
// 								</MobileButtonLink>
// 							</ListItem>
// 							<Divider />
// 							<ListItem>
// 								<MobileButtonLink href='/contact'>
// 									<MobileButton onClick={drawerHandlerClose}>Contact</MobileButton>
// 								</MobileButtonLink>
// 							</ListItem>
// 							<Divider />
// 							<ListItem>
// 								<MobileButtonLink href='/about'>
// 									<MobileButton onClick={drawerHandlerClose}>About Us</MobileButton>
// 								</MobileButtonLink>
// 							</ListItem>
// 							<Divider />
// 						</List>
// 					</SwipeableDrawer>
// 				</Toolbar>
// 			</AppBar>
// 		</MainContainer>
// 	);
// };

// export default NavBar;

import React from "react";

export default function NavBar() {
	return <div>NavBar</div>;
}
