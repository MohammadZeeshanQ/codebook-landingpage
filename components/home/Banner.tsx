import React from "react";
import styled from "styled-components";

// Shared Component
import GreenButton from "../GreenButton";

// style components
const Container = styled.section`
	/* position */
	position: relative;
	z-index: 0;
	/* padding */
	padding-block: 5rem;
`;

const ImageBg = styled.img`
	/* position */
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	/* size */
	width: 100%;
	height: 100%;
`;

const Wrapper = styled.div`
	color: var(--SecondColor);
	/* width */
	max-width: 85%;
	margin: auto;

	@media (max-width: 600px) {
		max-width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		max-width: 90%;
	}
`;

const TextWrapper = styled.div`
	text-align: center;
`;

const Header = styled.h2`
	/* position */
	position: relative;
	z-index: 0;
	/* font */
	font-size: 2.2rem;
	font-style: normal;
	font-weight: 400;
	text-transform: capitalize;
	line-height: 1.5;
	/* margin */
	max-width: 50%;
	margin: 0 auto 4rem auto;

	@media (max-width: 600px) {
		font-size: 2rem;
		max-width: 90%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.5rem;
		margin-bottom: 3rem;
	}
`;

const VectorImage = styled.img`
	/* position */
	position: absolute;
	top: -20%;
	left: 75%;
`;

const ButtonBox = styled.span`
	text-align: center;
	margin: auto;
`;

export default function Banner() {
	return (
		<Container>
			<ImageBg src='/Props/GroupPattern.png' alt='Group Pattern Vector' loading='lazy' />
			<Wrapper>
				<TextWrapper>
					<Header>
						Free to use for personal use and
						<br />
						optimised for learning
						<VectorImage src='/Logo/Vector.png' alt='Header Vector' loading='lazy' />
					</Header>
					<ButtonBox>
						<GreenButton>Get Started</GreenButton>
					</ButtonBox>
				</TextWrapper>
			</Wrapper>
		</Container>
	);
}
