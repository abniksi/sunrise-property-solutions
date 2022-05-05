import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";

const Container = tw.div`relative bg-white`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-blue-100`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-orange-100`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

// const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
// const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

// const FeatureIconContainer = styled.div`
//   ${tw`mx-auto inline-block border border-orange-100 text-center rounded-full p-2 flex-shrink-0`}
//   svg {
//     ${tw`w-5 h-5 text-orange-100`}
//   }
// `;

// const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
// const FeatureHeading = tw.div`font-bold text-lg text-blue-100`;
// const FeatureDescription = tw.div`mt-1 text-sm`;

// const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0 bg-orange-100`;

export default ({
  subheading = "Our Story",
  heading = (
    <>
      We understand how <span tw="text-blue-100">overwhelming</span> taking care of a property can be.
    </>
  ),
  description = `Our family considers Lake of the Ozarks our second home. We have been coming down from Bloomington, Illinois for the past 12 years making lifelong memories. It started as summer vacations, then 6 years ago our family bought a house, and now we live here.\n 
  Like most people who own property at the lake, there is an incredible amount of upkeep required and preparation needed when entertaining guests. Every trip we make, the house needs to be cleaned, the yard needs something done, the dock, deck, driveway, sidewalks need to be washed, chairs and cushions need to be put out, groceries, coolers, and grills! Then, when you leave, you have to clean everything up! This is just during the spring and summer season.\n 
  We asked each other, “Why not provide these services and then some to everyone at the lake?” We understand having a second home comes with great responsibility. Whether it is making sure the house is in perfect condition year-round, keeping your yard clean, cleaning the driveway and dock a few times per year, you can hand these pesky tasks over to us. You’ll never have to worry if we will be busy fishing in a cove during the day because we do not fish. We will always be one call away. We cannot wait to earn your business. Call or text us today at (309) 530-6861!`,
  features = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Professionalism",
      description: "We have the best professional workers in Missouri working with you to ensure satisfaction."
    },
    {
      Icon: MoneyIcon,
      title: "Affordable",
      description: "We promise to offer you the best rate we can - at par with the industry standard."
    }
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container id='ourStory'>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={TeamIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            {/* <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>{<feature.Icon />}</FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features> */}
            {/* <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
