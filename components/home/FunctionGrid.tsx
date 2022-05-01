import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";

// shared components
import GreenButton from "../GreenButton";

// styled-components
const Container = styled.section`
	padding-block: 4rem;
`;

const Wrapper = styled.div`
	max-width: 85%;
	margin: auto;

	@media (max-width: 600px) {
		max-width: 90%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		max-width: 90%;
	}
`;

// Image Style
const ImageWrapper = styled.div`
	position: relative;
	z-index: 0;
`;

const ImageContent = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
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
	top: -20%;
	left: -15%;
	z-index: -1;
	animation: ${rotate} 4s linear infinite;

	@media (max-width: 600px) {
		top: -90%;
		left: -45%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
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
	font-size: 2.2rem;
	font-weight: 500;
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
		font-size: 1.4rem;
		margin-bottom: 1rem;
	}
`;

const GreenText = styled.span`
	color: var(--MainColor);
`;

const DescriptionBox = styled.div`
	/* display */
	display: flex;

	justify-content: start;
	gap: 1rem;
`;

const DescriptionIcon = styled.img`
	width: 1rem;
	object-fit: contain;
`;

const DescriptionText = styled.p`
	opacity: 0.8;
	line-height: 1.5;
	letter-spacing: 0.5px;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSizeSmall);
	}
`;

const ButtonWrapper = styled.div`
	margin-top: 4rem;

	@media (max-width: 600px) {
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

export default function FunctionGrid() {
	return (
		<Container>
			<Wrapper>
				<Grid container alignItems='center' justifyContent='space-around' direction='row-reverse'>
					<Grid item xs={12} sm={6} md={6}>
						<ImageWrapper>
							<ImageContent src='/Props/GridImage2.png' alt='Codebook Video' />
							<ImageShadow src='/Shadow/Medium.png' alt='Codebook Video' />
						</ImageWrapper>
					</Grid>
					<Grid item xs={12} sm={5} md={5}>
						<TextWrapper>
							<HeaderText>
								Use the show ( ) function to run your
								<GreenText> code </GreenText>
							</HeaderText>
							<TextBox>
								<DescriptionBox>
									<DescriptionIcon src='/Logo/DescriptionIcon.png' alt='Codebook Descrption Icons' />
									<DescriptionText>
										Create react components and run show (App) to view output
									</DescriptionText>
								</DescriptionBox>
								<ButtonWrapper>
									<GreenButton>Explore More</GreenButton>
								</ButtonWrapper>
							</TextBox>
						</TextWrapper>
					</Grid>
				</Grid>
			</Wrapper>
		</Container>
	);
}
