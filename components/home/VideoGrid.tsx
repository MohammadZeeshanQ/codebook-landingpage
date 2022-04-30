import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

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
	height: 100%;
	background: linear-gradient(94.25deg, #3dc9b0 0%, #5dd39e 100%);
	/* padding */
	padding: 2rem;
	/* border radius */
	border-radius: 2rem;
`;

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

const DescriptionHeaderText = styled.h3`
	font-size: 1.2rem;
	font-weight: 600;
	text-transform: capitalize;
	line-height: 1.3;
	letter-spacing: 1px;
	/* margin */
	margin-bottom: 0.5rem;
`;

const DescriptionText = styled.p`
	opacity: 0.8;
	line-height: 2;
	letter-spacing: 0.5px;
`;

const ButtonWrapper = styled.div`
	text-align: center;
	margin-top: 3rem;
`;

const BlackButton = styled.button`
	/* color */
	color: var(--blackColor);
	background: 2px solid var(--blackColor);
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
	padding: 0.8rem 1.5rem;
	margin: auto;
	/* border */
	border: 2px solid var(--blackColor);
`;

const ButtonBox = styled.span`
	margin-left: 0.5rem;
`;

const ButtonIcon = styled.img``;

export default function VideoGrid() {
	return (
		<Container>
			<Wrapper>
				<Grid container alignItems='center' justifyContent='space-around'>
					<Grid item xs={12} sm={5} md={5}>
						<ImageWrapper>
							<ImageContent src='/Props/BlackPlayButton.png' alt='Codebook Video' />
							<ButtonWrapper>
								<BlackButton>
									Watch Video
									<ButtonBox>
										<ButtonIcon src='/Logo/BlackPlayButton.png' alt='Arrow Icon' />
									</ButtonBox>
								</BlackButton>
							</ButtonWrapper>
						</ImageWrapper>
					</Grid>
					<Grid item xs={12} sm={5} md={5}>
						<TextWrapper>
							<HeaderText>
								Sign up to save a your
								<GreenText>&nbsp;code&nbsp;</GreenText>books
							</HeaderText>
							<TextBox>
								<DescriptionHeaderText>Create an account in two minutes</DescriptionHeaderText>
								<DescriptionText>
									Directly sign ui using your email or google account. No need to confirmation needed
								</DescriptionText>
							</TextBox>
							<TextBox>
								<DescriptionHeaderText>Finally you can save your worksheets</DescriptionHeaderText>
								<DescriptionText>Save and access your code books from anywhere</DescriptionText>
							</TextBox>
						</TextWrapper>
					</Grid>
				</Grid>
			</Wrapper>
		</Container>
	);
}
