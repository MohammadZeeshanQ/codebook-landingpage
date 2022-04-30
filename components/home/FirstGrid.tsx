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
		max-width: 95%;
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
	top: -25%;
	left: -25%;
	z-index: -1;
	animation: ${rotate} 4s linear infinite;
`;

// Text Style
const TextWrapper = styled.div`
	color: var(--SecondColor);
`;

const TextBox = styled.div`
	padding-block: 1rem;
`;

const HeaderText = styled.h2`
	font-size: 2.1rem;
	font-weight: 500;
	letter-spacing: 1px;
	text-transform: capitalize;
	line-height: 1.5;
	/* margin */
	margin-bottom: 2rem;
`;

const GreenText = styled.span`
	color: var(--MainColor);
`;

const DescriptionBox = styled.div`
	/* display */
	display: flex;
	justify-content: start;
	align-items: start;
	gap: 1rem;
	/* margin */
	margin-bottom: 2em;
`;

const DescriptionIcon = styled.img`
	/* size */
	margin-top: 0.5rem;
	width: 1rem;
	object-fit: contain;
`;

const DescriptionText = styled.p`
	opacity: 0.8;
	line-height: 2;
	letter-spacing: 0.5px;
`;

const ButtonWrapper = styled.div`
	margin-top: 4rem;
`;

export default function FirstGrid() {
	return (
		<Container>
			<Wrapper>
				<Grid container alignItems='center' justifyContent='space-around' direction='row'>
					<Grid item xs={12} sm={6} md={6}>
						<ImageWrapper>
							<ImageContent src='/Props/GridImage1.png' alt='Codebook Video' />
							<ImageShadow src='/Shadow/Large.png' alt='Codebook Video' />
						</ImageWrapper>
					</Grid>
					<Grid item xs={12} sm={5} md={5}>
						<TextWrapper>
							<HeaderText>
								Add as many code or text cells to create your<GreenText> codebook </GreenText>
								to your liking
							</HeaderText>
							<TextBox>
								<DescriptionBox>
									<DescriptionIcon src='/Logo/DescriptionIcon.png' alt='Codebook Descrption Icons' />
									<DescriptionText>
										Create a codebook and use the text Block to annotate your code blocks with
										documentation
									</DescriptionText>
								</DescriptionBox>
								<DescriptionBox>
									<DescriptionIcon src='/Logo/DescriptionIcon.png' alt='Codebook Descrption Icons' />
									<DescriptionText>
										All blocks can be resized and formatted to your loking
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
