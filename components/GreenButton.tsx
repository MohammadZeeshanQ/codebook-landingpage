import React, { PropsWithChildren } from "react";
import styled from "styled-components";

// styled-components
const Button = styled.button`
	/* position */
	position: relative;
	z-index: 1;
	/* color */
	color: var(--SecondColor);
	background: linear-gradient(94.25deg, #3dc9b0 0%, #5dd39e 100%);
	border: none;
	border-radius: 2rem;
	/* font */
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 1px;
	cursor: pointer;
	/* padding */
	padding: 1.1rem 2.2rem;

	&:hover {
		background: linear-gradient(94.25deg, #52f4d6 0%, #5dd39e 100%);
		transition: background 0.2s ease-out;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSizeSmall);
		padding: 0.8rem 1.5rem;
	}
`;

type ButtonProps = PropsWithChildren<{}>;

export default function GreenButton({ children }: ButtonProps) {
	return <Button>{children}</Button>;
}
