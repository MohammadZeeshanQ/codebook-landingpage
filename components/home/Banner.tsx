import React from "react";
import styled from "styled-components";

// Shared Component
import GreenButton from "../GreenButton";

// style components
const Container = styled.section`
	padding-block: 5rem;
`;

const Wrapper = styled.div`
	color: var(--SecondColor);
	/* width */
	max-width: 85%;
	margin: auto;
`;

const TextWrapper = styled.div`
	text-align: center;
`;

const Header = styled.h2`
	font-size: 2.2rem;
	font-style: normal;
	font-weight: 400;
	text-transform: capitalize;
	line-height: 1.3;
	/* margin */
	margin-bottom: 4rem;
`;

export default function Banner() {
	return (
		<Container>
			<Wrapper>
				<TextWrapper>
					<Header>
						Free to use for personal use and
						<br />
						optimised for learning
					</Header>
					<GreenButton>Get Started</GreenButton>
				</TextWrapper>
			</Wrapper>
		</Container>
	);
}
