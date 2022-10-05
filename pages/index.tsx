import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const StyledH1 = styled.h1.attrs({ className: "text-green-900" })``;
const Home: NextPage = () => {
	return (
		<div>
			<StyledH1>hello world</StyledH1>
		</div>
	);
};

export default Home;
