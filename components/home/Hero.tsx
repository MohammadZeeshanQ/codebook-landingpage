import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";

// styled-components
const Container = styled.section`
	padding-block: 8rem;

	@media (max-width: 600px) {
		padding: 8rem 0 2rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 8rem 0 6rem 0;
	}
`;

const Wrapper = styled.div`
	max-width: 85%;
	margin: auto;

	@media (max-width: 600px) {
		max-width: 90%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;
// Image Style
const ImageWrapper = styled.div`
	position: relative;
	z-index: 0;

	@media (max-width: 600px) {
		margin-top: 4rem;
	}
`;

const ImageContent = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	/* position */
	position: relative;
	left: 19%;

	@media (max-width: 600px) {
		left: 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ImageShadow = styled.img`
	position: absolute;
	top: 0;
	left: -25%;
	z-index: -1;
	animation: ${rotate} 4s linear infinite;

	@media (max-width: 600px) {
		top: -50%;
		left: -50%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		top: -60%;
		left: -70%;
	}
`;

// Text Style
const TextWrapper = styled.div`
	color: var(--SecondColor);
`;

const TextBox = styled.div`
	padding-block: 1rem;
`;

const HeaderText = styled.h2`
	font-size: 2.5rem;
	font-weight: 600;
	letter-spacing: 1px;
	text-transform: capitalize;
	line-height: 1.5;
	/* margin */
	margin-bottom: 2rem;

	@media (max-width: 600px) {
		font-size: 2rem;
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.6rem;
	}
`;

const GreenText = styled.span`
	color: var(--MainColor);
`;

const DescriptionBox = styled.div`
	border-left: 2px solid var(--MainColor);
	padding-left: 1rem;

	@media (max-width: 600px) {
		border: none;
		text-align: center;
		padding-left: 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const DescriptionText = styled.p`
	font-size: 1.2rem;
	font-weight: 300;
	opacity: 0.8;
	line-height: 2;
	letter-spacing: 0.5px;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSize);
	}
`;

const ButtonWrapper = styled.div`
	/* display */
	display: flex;
	align-items: center;
	/* margin */
	margin-top: 5rem;

	@media (max-width: 600px) {
		flex-direction: column;
		margin-top: 4rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const ButtonBox = styled.span`
	margin-left: 0.5rem;
`;

const GreenButton = styled.button`
	/* position */
	position: relative;
	z-index: 1;
	/* color */
	color: var(--SecondColor);
	background: linear-gradient(94.25deg, #3dc9b0 0%, #5dd39e 100%);
	border: none;
	border-radius: 2rem;
	/* display */
	display: flex;
	justify-content: center;
	align-items: start;
	/* font */
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 1px;
	cursor: pointer;
	/* padding */
	padding: 1rem 2rem;

	&:hover {
		background: linear-gradient(94.25deg, #52f4d6 0%, #5dd39e 100%);
		transition: background 0.2s ease-out;
	}
	@media (max-width: 600px) {
		margin-left: 0;
		margin-top: 1.5rem;
		padding: 1.5rem 2.6rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSize);
		padding: 0.6rem 1rem;
	}
`;

const WhiteButton = styled.button`
	/* position */
	position: relative;
	z-index: 1;
	/* color */
	color: var(--SecondColor);
	background: transparent;
	border-radius: 2rem;
	/* display */
	display: flex;
	justify-content: center;
	align-items: start;
	/* font */
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 1px;
	cursor: pointer;
	/* padding & marign */
	padding: 0.9rem 2rem;
	margin-left: 1.5rem;
	/* border */
	border: 2px solid var(--SecondColor);

	@media (max-width: 600px) {
		margin-left: 0;
		margin-top: 1.5rem;
		padding: 1.5rem 2.6rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSize);
		padding: 0.6rem 1rem;
	}
`;

const ButtonIcon = styled.img`
	height: 100%;
	width: 100%;
`;

function Hero() {
	return (
		<Container id='Home_Section'>
			<Wrapper>
				<Grid container alignItems='center' justifyContent='space-between'>
					<Grid item xs={12} sm={6} md={6}>
						<TextWrapper>
							<HeaderText>
								<GreenText>Codebook.studio </GreenText>is A Web Based Interactive Programming Learning
								Tool
							</HeaderText>
							<TextBox>
								<DescriptionBox>
									<DescriptionText>
										Codebook is a web besed fully interactive learning platfrom to help learn&nbsp;
										<strong>JavaScript</strong>&nbsp;and&nbsp;<strong>React</strong>
									</DescriptionText>
								</DescriptionBox>
								<ButtonWrapper>
									<GreenButton>
										Get Started&nbsp;
										<ButtonBox>
											<ButtonIcon src='/Logo/ArrowIcon.png' alt='Arrow Icon' />
										</ButtonBox>
									</GreenButton>
									<WhiteButton>
										Watch Video
										<ButtonBox>
											<ButtonIcon src='/Logo/PlayIcon.png' alt='Play Icon' />
										</ButtonBox>
									</WhiteButton>
								</ButtonWrapper>
							</TextBox>
						</TextWrapper>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<ImageWrapper>
							<ImageContent src='/Props/HeroImage.png' alt='Codebook Video' />
							<ImageShadow src='/Shadow/Large.png' alt='Codebook Video' />
						</ImageWrapper>
					</Grid>
				</Grid>
			</Wrapper>
		</Container>
	);
}

export default Hero;
