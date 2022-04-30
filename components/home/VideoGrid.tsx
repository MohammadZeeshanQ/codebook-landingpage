import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

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
	line-height: 1.5;
	letter-spacing: 0.5px;
`;

export default function VideoGrid() {
	return (
		<Container>
			<Wrapper>
				<Grid container alignItems='center' justifyContent='space-around'>
					<Grid item xs={12} sm={6} md={6}>
						<ImageWrapper>
							<ImageContent src='' alt='Codebook Video' />
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
