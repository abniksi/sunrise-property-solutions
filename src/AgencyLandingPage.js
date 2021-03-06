import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import TopOfPage from "components/hero/BackgroundAsImage.js";
import Services from "components/features/DashedBorderSixFeatures";
import WhatWeDo from "components/features/TwoColSingleFeatureWithStats2.js";
import OurStory from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <TopOfPage />
    <WhatWeDo />
    <Services />
    <OurStory />
    <Pricing />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-blue-100">Questions ?</span>
        </>
      }
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
