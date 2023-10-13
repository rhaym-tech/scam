import React from "react";
import theme from "theme";
import { Theme, Link, Image, Span, Text, Box, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Never deal with fucking indians, cause scamming flows in their veins"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="40px 0 40px 0"
			background="linear-gradient(0deg,rgba(0, 0, 0, 0.87) 35.2%,#000000 100%)"
			min-height="100vh"
			lg-padding="80px 0 80px 0"
			md-padding="96px 0 96px 0"
			sm-padding="72px 0 96px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/6528d535e2dd3a0022209b3e/images/f0e1c18bea5d7564f4b4397c87e67b25.png?v=2023-10-13T05:35:14.063Z"
					display="block"
					border-radius="50%"
					max-width="200px"
					srcSet="https://smartuploads.quarkly.io/6528d535e2dd3a0022209b3e/images/f0e1c18bea5d7564f4b4397c87e67b25.png?v=2023-10-13T05%3A35%3A14.063Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6528d535e2dd3a0022209b3e/images/f0e1c18bea5d7564f4b4397c87e67b25.png?v=2023-10-13T05%3A35%3A14.063Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6528d535e2dd3a0022209b3e/images/f0e1c18bea5d7564f4b4397c87e67b25.png?v=2023-10-13T05%3A35%3A14.063Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6528d535e2dd3a0022209b3e/images/f0e1c18bea5d7564f4b4397c87e67b25.png?v=2023-10-13T05%3A35%3A14.063Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6528d535e2dd3a0022209b3e/images/f0e1c18bea5d7564f4b4397c87e67b25.png?v=2023-10-13T05%3A35%3A14.063Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6528d535e2dd3a0022209b3e/images/f0e1c18bea5d7564f4b4397c87e67b25.png?v=2023-10-13T05%3A35%3A14.063Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6528d535e2dd3a0022209b3e/images/f0e1c18bea5d7564f4b4397c87e67b25.png?v=2023-10-13T05%3A35%3A14.063Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="normal 900 60px/1.2 --fontFamily-sans"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					width="60%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100%"
				>
					This Guy is a f***ing{" "}
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						color="#ff0000"
					>
						SCAMMER
					</Span>
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					text-align="center"
				>
					Never deal with this motherfucker, cause "scamming" flows in his veins
				</Text>
				<Link
					href="#details"
					padding="12px 24px 12px 24px"
					color="--lightD2"
					background="--color-red"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 0px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-orange"
					sm-margin="0px 0px 0px 0px"
					sm-text-align="center"
					hover-transition="background-color 0.2s ease-in-out 0s"
				>
					Learn More
				</Link>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			background="linear-gradient(180deg,rgba(0, 0, 0, 0.87) 35.2%,rgba(0, 0, 0, 0.81) 100%)"
			sm-padding="60px 0 60px 0"
			quarkly-title="Schedule-8"
			color="#ffffff"
			id="details"
		>
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="48px 30px"
				lg-grid-template-columns="1fr"
				lg-grid-gap="30px"
				md-grid-gap="32px"
			/>
			<Box
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				align-items="center"
				display="flex"
				grid-column="1 / span 3"
				lg-grid-column="auto / auto"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--lightD2"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					border-color="#ffffff"
				>
					Details{"\n\n"}
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--lightD2"
					md-text-align="center"
					text-align="center"
					max-width="800px"
					sm-font="normal 400 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				>
					Full detailed story about why "58TechBoy" is a damn{" "}
					<Span color="#ff0000">
						SCAMMER
					</Span>
				</Text>
			</Box>
			<Box
				padding="40px 40px 40px 40px"
				lg-padding="45px 30px"
				md-padding="45px 45px"
				background="linear-gradient(180deg,rgba(255, 255, 255, 0.47) 35.2%,rgba(67, 67, 67, 0.38) 100%)"
				border-radius="24px"
				justify-content="flex-start"
				flex-direction="column"
				display="flex"
			>
				<Text margin="0px 0px 16px 0px" color="--lightD2" font="--lead" lg-text-align="left">
					July 3rd, 2023
				</Text>
				<Text margin="0px 0px 14px 0px" color="--lightD2" font="--headline3" lg-text-align="left">
					The beginning of our story
				</Text>
				<Text
					margin="0px 0px 0 0px"
					color="--greyD3"
					font="--base"
					lg-text-align="left"
					flex="1 0 auto"
				>
					In July 3rd, 2023. This guy called "58TechBoy" came to me and asked to make him a landing page for his hosting service, and we agreed about details.
					<br />
					I done making it and shared him the code{"\n\n"}
				</Text>
			</Box>
			<Box
				padding="40px 40px 40px 40px"
				lg-padding="45px 30px"
				md-padding="45px 45px"
				background="linear-gradient(180deg,rgba(255, 255, 255, 0.47) 35.2%,rgba(67, 67, 67, 0.38) 100%)"
				border-radius="24px"
				justify-content="flex-start"
				flex-direction="column"
				display="flex"
			>
				<Text margin="0px 0px 16px 0px" color="--lightD2" font="--lead" lg-text-align="left">
					July 7th, 2023
				</Text>
				<Text margin="0px 0px 14px 0px" color="--lightD2" font="--headline3" lg-text-align="left">
					Finished job and agreeing about price
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					color="--greyD3"
					font="--base"
					lg-text-align="left"
					flex="1 0 auto"
				>
					In July 3rd, 2023. I finished the landing page and shared him preview screenshots and he was so satisfied, I give him the code and did setup him the custom domain and we agreed to pay me $40 for iit
				</Text>
			</Box>
			<Box
				padding="40px 40px 40px 40px"
				lg-padding="45px 30px"
				md-padding="45px 45px"
				background="linear-gradient(180deg,rgba(255, 255, 255, 0.47) 35.2%,rgba(67, 67, 67, 0.38) 100%)"
				border-radius="24px"
				justify-content="flex-start"
				flex-direction="column"
				display="flex"
			>
				<Text margin="0px 0px 16px 0px" color="--lightD2" font="--lead" lg-text-align="left">
					July 2023 - Now
				</Text>
				<Text margin="0px 0px 14px 0px" color="--lightD2" font="--headline3" lg-text-align="left">
					Waiting till today to get paid
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					color="--greyD3"
					font="--base"
					lg-text-align="left"
					flex="1 0 auto"
				>
					Since that
day and he's avoiding me and everytime I remind him about the payment he make a
dumb excuse, I give him a chance many times but he still avoiding paying me
					<br />
					{"\n"}Imagine throwing money on bullshit with thousands and can’t even pay someone
owes you a $40
					<Strong />
					{"\n\n\n\n\n\n"}
				</Text>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6528d535e2dd3a0022209b3c"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});