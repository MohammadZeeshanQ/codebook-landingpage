import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// styled -components
const Container = styled.section`
	padding-block: 3rem;
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
	padding: 1rem;
`;

const ImageContent = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;

	&:hover {
		box-shadow: 5px 9px 29px -2px rgba(130, 129, 129, 0.61);
		-webkit-box-shadow: 5px 9px 29px -2px rgba(130, 129, 129, 0.61);
		-moz-box-shadow: 5px 9px 29px -2px rgba(130, 129, 129, 0.61);
		transform: scale(1.05);
		transition: transform 0.4s ease-in-out;
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
			image: "/Props/Card.png",
		},
		{
			title: "Codebook Services",
			image: "/Props/Card.png",
		},
	];

	return (
		<Container>
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
