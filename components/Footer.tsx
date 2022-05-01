import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

// styled Component
const Container = styled.section`
	padding-block: 3rem;
`;

const Wrapper = styled.div`
	color: var(--SecondColor);
	/* width */
	max-width: 85%;
	margin: auto;
`;

// Logo, Bottom and Social Media Icon
const NavigationMainContainer = styled.div`
	/* display */
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 4rem;

	@media (max-width: 600px) {
		display: block;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const LogoWrapper = styled.div`
	@media (max-width: 600px) {
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const LogoImage = styled.img``;

const BottomNavigationWrapper = styled.div`
	/* display */
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3rem;

	@media (max-width: 600px) {
		display: block;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 0;
	}
`;

const BottomNavigationBox = styled.div`
	margin-block: 1rem;
	padding: 1rem;
`;

const BottomNavigationText = styled.p`
	cursor: pointer;

	&:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in-out;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSizeSmall);
	}
`;

const SocialIconWrapper = styled.div`
	/* display */
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	@media (max-width: 600px) {
		max-width: 70%;
		margin: auto;
		padding-block: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 1rem;
	}
`;

const SocialIconBox = styled.div``;

const SocialIconImage = styled.img`
	cursor: pointer;

	&:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in-out;
	}
	@media (max-width: 600px) {
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

// Copyright with Year and Policies
const CopyRightMainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	@media (max-width: 600px) {
		flex-direction: column;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const CopyRightWrapper = styled.div``;

const CopyRightText = styled.p`
	opacity: 0.7;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSizeSmall);
	}
`;

const LinksWrapper = styled.div`
	/* display */
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;

const LinksBox = styled.div``;

const LinksText = styled.p`
	opacity: 0.7;
	cursor: pointer;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSizeSmall);
	}
`;

const Footer = () => {
	const [dateYear, setDateYear] = useState<number>();

	const bottomNavigationData = [
		{
			title: "About",
			link: "#Home_Section",
		},
		{
			title: "How To Import",
			link: "#Function_Section",
		},
		{
			title: "Features",
			link: "#Services_Section",
		},
		{
			title: "How To Save",
			link: "#Banner_Section",
		},
		{
			title: "Support",
			link: "/",
		},
	];

	const bottomSocialMediaData = [
		{
			title: "Codebook Twitter",
			link: "/",
			image: "/SocialMedia/Twitter.png",
		},
		{
			title: "Codebook Facebook",
			link: "/",
			image: "/SocialMedia/Facebook.png",
		},
		{
			title: "Codebook Instagram",
			link: "/",
			image: "/SocialMedia/Instagram.png",
		},
		{
			title: "Codebook Github",
			link: "/",
			image: "/SocialMedia/Github.png",
		},
	];

	useEffect(() => {
		const yearValue = new Date().getFullYear();
		setDateYear(yearValue);
	}, []);

	return (
		<Container>
			<Wrapper>
				{/* Logo, Bottom and Social Media Icon */}
				<NavigationMainContainer>
					<LogoWrapper>
						<LogoImage src='/Logo/CodeBookLogo.png' alt='Codebook Logo' />
					</LogoWrapper>
					{/* Bottom Nav */}
					<BottomNavigationWrapper>
						{bottomNavigationData.map((item, id) => (
							<BottomNavigationBox key={id}>
								<Link href={item.link} passHref>
									<BottomNavigationText>{item.title}</BottomNavigationText>
								</Link>
							</BottomNavigationBox>
						))}
					</BottomNavigationWrapper>
					{/* Social Media Icon */}
					<SocialIconWrapper>
						{bottomSocialMediaData.map((item, id) => (
							<SocialIconBox key={id}>
								<Link href={item.link} passHref>
									<SocialIconImage src={item.image} alt={item.title} />
								</Link>
							</SocialIconBox>
						))}
					</SocialIconWrapper>
				</NavigationMainContainer>

				{/* Copyright with Year and Policies */}
				<CopyRightMainContainer>
					<CopyRightWrapper>
						<CopyRightText>&copy; Copyright {dateYear}, All Rights Reserved</CopyRightText>
					</CopyRightWrapper>
					<LinksWrapper>
						<LinksBox>
							<Link href='/' passHref>
								<LinksText>Privacy Policy</LinksText>
							</Link>
						</LinksBox>
						<LinksBox>
							<Link href='/' passHref>
								<LinksText>Terms & Conditions</LinksText>
							</Link>
						</LinksBox>
					</LinksWrapper>
				</CopyRightMainContainer>
			</Wrapper>
		</Container>
	);
};

export default Footer;
