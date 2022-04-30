import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// shared components
import GreenButton from "../GreenButton";

// styled-components
const Container = styled.section``;

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
const ImageWrapper = styled.div``;

const ImageContent = styled.img``;

const ImageShadow = styled.img``;

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
`;

const GreenText = styled.span`
	color: var(--MainColor);
`;

const DescriptionBox = styled.div`
	/* display */
	display: flex;
	justify-content: center;
	align-content: center;
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
`;

const ButtonWrapper = styled.div`
	margin-top: 4rem;
`;

export default function FunctionGrid() {
	return (
		<Container>
			<Wrapper>
				<Grid container alignItems='center' justifyContent='space-around' direction='row-reverse'>
					<Grid item xs={12} sm={6} md={6}>
						<ImageWrapper>
							<ImageContent src='' alt='Codebook Video' />
						</ImageWrapper>
					</Grid>
					<Grid item xs={12} sm={5} md={5}>
						<TextWrapper>
							<HeaderText>
								Use the show ( ) function to run your
								<GreenText>&nbsp;code&nbsp;</GreenText>
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
