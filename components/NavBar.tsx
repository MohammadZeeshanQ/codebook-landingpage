import React, { useState, FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { AppBar, Toolbar, Divider, SwipeableDrawer, List, ListItem, IconButton } from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Shared components
import GreenButton from "./GreenButton";

// styled components
const MainContainer = styled.section`
	position: relative;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 90%;
	margin: auto;
	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
`;

const LogoWrapper = styled.div`
	flex-grow: 2;
	display: flex;
`;

const LogoImage = styled.img`
	width: 4.5rem;
	height: 100%;
	object-fit: cover;

	@media (max-width: 600px) {
		width: 3.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 2rem;
	}
`;

const ButtonTheme = styled.button`
	font-size: 0.9rem;
	font-weight: 500;
	background: transparent;
	border: none;
	border-radius: 0.2rem;
	cursor: pointer;
	letter-spacing: 1px;
	padding: 0.6rem 0.8rem;
`;

const ButtonLink = styled.a`
	margin: 0 0.5rem;
	padding: 0.5rem 0;
	border-radius: 0.2rem;
`;

const DesktopWrapper = styled.div`
	flex-grow: 1;
	margin-left: 3rem;

	@media (max-width: 1024px) {
		display: none;
	}
`;

const CtaWrapper = styled.div`
	@media (max-width: 1024px) {
		display: none;
	}
`;

const CTAButtonThemeOutlined = styled.button`
	/* color */
	color: var(--SecondColor);
	background: transparent;
	border: 2px solid transparent;
	border-radius: 2rem;
	/* font */
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 1px;
	cursor: pointer;
	/* padding */
	padding: 0.8rem 2rem;
	margin-right: 1rem;

	&:hover {
		border: 2px solid var(--SecondColor);
		transition: all 0.3s ease-in-out;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSizeSmall);
		padding: 0.8rem 1.5rem;
	}
`;

const CTAButtonTheme = styled.button`
	/* color */
	color: var(--SecondColor);
	background: linear-gradient(94.25deg, #3dc9b0 0%, #5dd39e 100%);
	border-radius: 2rem;
	/* font */
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 1px;
	cursor: pointer;
	/* padding */
	padding: 0.8rem 2rem;

	&:hover {
		background: #6ce9b1;
		transition: transform 0.3s ease-in-out;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSizeSmall);
		padding: 0.8rem 1.5rem;
	}
`;

const DesktopButton = styled(ButtonTheme)`
	color: var(--whiteColor);
	opacity: 0.8;

	&:hover {
		color: #6ce9b1;
		transition: all 0.3s ease-in-out;
	}
`;

// Mobile Style
const MobileWrapper = styled.div`
	display: none;

	@media (max-width: 1024px) {
		display: block;
	}
`;

const MobileButtonLink = styled.a`
	width: 100%;
	border-radius: 0.2rem;
`;

const MobileButton = styled.button`
	color: var(--redColor);
	font-size: 1rem;
	font-weight: 500;
	background: transparent;
	display: flex;
	justify-content: flex-start;
	border: none;
	letter-spacing: 0.5px;
	margin: 0.5rem 0;
	padding: 0.5rem 0;
	width: 100%;
	cursor: pointer;
`;

const NavBar: FC = () => {
	const [drawer, setDrawer] = useState<boolean>(false);

	// Drawer Handler for Tablet and Mobile device
	const drawerHandlerClose = (drawer: any) => {
		setDrawer(!drawer);
	};

	return (
		<MainContainer>
			<AppBar
				position='fixed'
				elevation={4}
				sx={{
					// height: 64,
					background: "var(--ThemeColor)",
				}}
			>
				<Toolbar>
					<Wrapper>
						<Link href='' passHref>
							<LogoWrapper>
								<LogoImage src='/Logo/CodeBookLogo.png' alt='Codebook Logo' />
							</LogoWrapper>
						</Link>

						<DesktopWrapper>
							<ButtonLink href='#Home_Section'>
								<DesktopButton>Home</DesktopButton>
							</ButtonLink>

							<ButtonLink href='#Function_Section'>
								<DesktopButton>How to Import</DesktopButton>
							</ButtonLink>

							<ButtonLink href='#Services_Section'>
								<DesktopButton>Features</DesktopButton>
							</ButtonLink>
							<ButtonLink href='#Banner_Section'>
								<DesktopButton>How to Save</DesktopButton>
							</ButtonLink>
						</DesktopWrapper>

						<CtaWrapper>
							<Link href='/' passHref>
								<CTAButtonThemeOutlined>Sign In</CTAButtonThemeOutlined>
							</Link>
							<Link href='/' passHref>
								<CTAButtonTheme>Sign Up</CTAButtonTheme>
							</Link>
						</CtaWrapper>

						<MobileWrapper onClick={() => setDrawer(true)} style={{ cursor: "pointer" }}>
							<MenuIcon sx={{ fontSize: "2rem", color: "var(--MainColor)" }} />
						</MobileWrapper>
					</Wrapper>
					{/* Swipeable Drawer for Mobile and Tablet View */}
					<SwipeableDrawer
						anchor='right'
						open={drawer}
						onOpen={drawerHandlerClose}
						onClose={drawerHandlerClose}
					>
						<List sx={{ width: 280 }}>
							<ListItem sx={{ justifyContent: "flex-end" }}>
								<IconButton onClick={drawerHandlerClose}>
									<CloseIcon sx={{ color: "var(--MainColor)", fontSize: "2rem" }} />
								</IconButton>
							</ListItem>
							<Divider />
							<ListItem>
								<MobileButtonLink href='#Home_Section'>
									<MobileButton onClick={drawerHandlerClose}>Home</MobileButton>
								</MobileButtonLink>
							</ListItem>
							<Divider />
							<ListItem>
								<MobileButtonLink href='#Function_Section'>
									<MobileButton onClick={drawerHandlerClose}>How to Import</MobileButton>
								</MobileButtonLink>
							</ListItem>
							<Divider />
							<ListItem>
								<MobileButtonLink href='#Services_Section'>
									<MobileButton onClick={drawerHandlerClose}>Features</MobileButton>
								</MobileButtonLink>
							</ListItem>
							<Divider />
							<ListItem>
								<MobileButtonLink href='#Banner_Section'>
									<MobileButton onClick={drawerHandlerClose}>How to Save</MobileButton>
								</MobileButtonLink>
							</ListItem>
						</List>
					</SwipeableDrawer>
				</Toolbar>
			</AppBar>
		</MainContainer>
	);
};

export default NavBar;
