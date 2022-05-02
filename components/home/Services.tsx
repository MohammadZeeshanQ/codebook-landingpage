import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// styled -components
const Container = styled.section`
	padding-block: 5rem;

	@media (max-width: 600px) {
		padding-block: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding-block: 2rem;
	}
`;

const Wrapper = styled.div`
	max-width: 80%;
	margin: auto;

	@media (max-width: 600px) {
		max-width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		max-width: 90%;
	}
`;

const HeaderWrapper = styled.div`
	color: var(--SecondColor);
	max-width: 40%;
	text-align: center;
	margin: 1rem auto 4rem auto;

	@media (max-width: 600px) {
		max-width: 95%;
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const HeaderText = styled.h2`
	font-size: 2.1rem;
	font-weight: 600;
	letter-spacing: 1px;
	text-transform: capitalize;
	line-height: 1.5;
	/* margin */
	margin-bottom: 2rem;

	@media (max-width: 600px) {
		font-size: 1.6rem;
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.4rem;
	}
`;

const GreenText = styled.span`
	color: var(--MainColor);
`;

const ImageWrapper = styled.div`
	/* position */
	position: relative;
	z-index: 1;
	/* padding */
	padding: 2rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1rem;
	}
`;

const ImageContent = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 1rem;
	/* opacity */
	opacity: 0.8;

	&:hover {
		/* WebFlow Animation */
		transform: translateY(-10px);
		opacity: 1;
		/* shadow  */
		box-shadow: 0 10px 15px #474747;
		transition: all 0.3s ease-in-out;
	}
`;

export default function Services() {
	const servicesData = [
		{
			title: "Codebook Services",
			image: "/Props/Card.png",
		},
		{
			title: "Codebook Services",
			image: "/Props/Card-1.png",
		},
		{
			title: "Codebook Services",
			image: "/Props/Card-2.png",
		},
	];

	return (
		<Container id='Services_Section'>
			<Wrapper>
				<HeaderWrapper>
					<HeaderText>
						An amazing<GreenText> JavaScript </GreenText> Devlopment Experience
					</HeaderText>
				</HeaderWrapper>

				<Grid container alignItems='center' justifyContent='space-around'>
					{servicesData.map((item, id) => (
						<Grid key={id} item xs={12} sm={4} md={4}>
							<ImageWrapper>
								<ImageContent src={item.image} alt={item.title} />
							</ImageWrapper>
						</Grid>
					))}
				</Grid>
			</Wrapper>
		</Container>
	);
}
