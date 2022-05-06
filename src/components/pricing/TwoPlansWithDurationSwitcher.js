import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import SupportIconImage from "../../images/support-icon.svg";

const Container = tw.div`relative bg-blue-100`;
const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4 text-white`;
const Heading = tw(SectionHeading)`w-full text-white`;
const Description = tw(SectionDescription)`w-full text-center text-white`;

// const PlanDurationSwitcher = tw.div`block w-full max-w-xs sm:inline-block sm:w-auto border-2 rounded-full px-1 py-1 mt-8`;
// const SwitchButton = styled.button`
//   ${tw`w-1/2 sm:w-32 px-4 sm:px-8 py-3 rounded-full focus:outline-none text-sm font-bold text-gray-700 transition duration-300`}
//   ${props => props.active && tw`bg-primary-500 text-gray-100`}
// `;

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const Plan = styled.div`
  ${tw`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised`}

  ${props =>
    props.featured &&
    css`
      ${tw`border-2 border-gray-200 shadow-none`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-gray-100 rounded-t-lg text-orange-100`}
  .name {
    ${tw`font-bold text-xl text-orange-100 text-orange-100`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1 text-orange-100`}
  }
  .slash {
    ${tw`text-xl text-orange-100`}
  }
  .duration {
    ${tw`lowercase text-blue-100 font-medium tracking-widest`}
  }
  .mainFeature {
    ${tw`text-blue-100 text-sm font-medium tracking-wide`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 flex-1 text-sm text-orange-100`}
  .feature {
    ${tw`mt-5 first:mt-0 font-semibold text-orange-100`}
  }
`;

// const PlanAction = tw.div`px-4 pb-8`;
// const BuyNowButton = styled(PrimaryButtonBase)`
//   ${tw`rounded-full tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
// `;

// const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
// `;
// const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
//   ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-25 transform translate-x-2/3 translate-y-1/2 fill-current text-teal-300`}
// `;

export default ({
  subheading = "",
  heading = "Membership and Packages",
  description = "Become an SPS member when you sign up for any service! Anything else you want done, we will take 15% off the original price.",
  plans = null,
  primaryButtonText = "Buy Now",
  planDurations = [
    {
      text: "Per Job",
      switcherText: "Monthly",
    },
    {
      text: "Per Job",
      switcherText: "Yearly",
    }
  ]
}) => {
  const defaultPlans = [
    {
      name: "Home Watch Membership",
      mainFeature:`No more worrying about your
      property when you are not
      there.`,
      features: ["Services Offered: ", "• Interior Property Checks",
      "• Exterior Property Checks","• Collecting Trash Cans",
      "• Mail & Package Security","• Coordinating & Overseeing Contractors",
      "• One Exterior Deep Clean"]
    },
    {
      name: "Weekend Get-Away Membership",
      mainFeature: `Make vacation what it is for
      by not lifting a finger.`,
      features: ["Services Offered: ", "• Dock Clean, Organization, & Prep",
      "• Boat Spot Clean","• Grocery Stocking",
      "• Pre-Arrival Exterior Clean","• Gas Refill for Fireplace/Grill",
      "• Post-Trip Interior Spot Clean"]
    },
    {
      name: "All-In-One Membership",
      mainFeature: `Combine the two to be taken
      care of all year!`,
      features: ["Services Offered: ", "• Home Watch Services throughout the year",
      "• Concierge Services everytime you come to the lake","• One Exterior SpringDeep Clean",
      "• All for a better value!"]
    }
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex] = useState(0);

  return (
    <Container id='packages'>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              <PlanHeader>
                {/* <span className="priceAndDuration">
                  <span className="price">{plan.durationPrices[activeDurationIndex]}</span>
                  <span className="slash"> / </span>
                  <span className="duration">{planDurations[activeDurationIndex].text}</span>
                </span> */}
                <span className="name">{plan.name}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
            </Plan>
          ))}
        </PlansContainer>
    </Container>
  );
};
