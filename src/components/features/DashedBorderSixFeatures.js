import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";

const Container = tw.div`relative bg-white`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-blue-200`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-transparent rounded-lg mt-12 bg-blue-200`}
  .imageContainer {
    ${tw`border-2 border-orange-100 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl text-orange-100`}
  }

  .description {
    ${tw`mt-3 font-semibold text-white text-sm leading-loose`}
  }
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    { imageSrc: SupportIconImage, title: "Concierge Services", description: `Need the house to be ready for guests? We got you covered.
    \n - Dock Clean, Prep, and Organization \n - Boat Prep \n - Grocery Stocking \n - Food Organization \n - Grill/Fireplace Gas Fillup \n - Post-Trip Cleanup` },
    {
      imageSrc: ShieldIconImage,
      title: "Home Watch",
      description: `Perfect for seasonal homeowners who want guaranteed peace of mind with their vacation home. \n - Water Shut Off \n - Inspecting Utilities \n - Checking Electronic Systems \n - Collecting Trash Cans \n - Drive/Dock Cleaning \n - Collecting Mail \n - Off-Season Drive/Dock Check \n - Coordinating Services \n - Anything else? Just ask!`,
    },
    { imageSrc: CustomizeIconImage, title: "Individual Services", description: `If you need your yard cleaned up or anything else washed.
      \n - Power Washing \n - Yard Clean-Up \n - Boat Cleaning`},
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-orange-100">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
