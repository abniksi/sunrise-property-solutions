import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12 text-blue-100`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left text-blue-100`;
const Heading = tw(SectionHeading)`lg:text-left text-orange-100`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-orange-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-orange-100 text-white p-1 rounded-full group-hover:bg-orange-100 group-hover:text-white transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  subheading = "",
  heading = "Questions",
  description = "Here are some frequently asked questions about our services and memberships from our loving customers. Should you have any other questions, feel free to reach out via the contact form below or call/text (309) 530-6861!",
  imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  imageContain = false,
  imageShadow = true,
  faqs = null
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      question: "How does a Home Watch Membership work?",
      answer:
        `We customize plans of care to each client. We understand every homeowner is different and we
        want to work around your needs. Some customers want yard maintenance done throughout the
        summer season and weekly check-ins in the offseason. Some want the house ready for
        holidays with on-call services when they are not there. Call, text, or fill out the questionnaire
        below for a free consultation on how we can provide peace of mind for your vacation home!`
    },
    {
      question: "How would a Home Watch Membership benefit me?",
      answer:
        `Having trust-worthy residents of the Lake of the Ozarks provide personalized check-ins in and
        outside your home gives you the sense of security that your property is in perfect condition all
        year-round. Becoming an SPS member gives you the opportunity to save money on pressure
        washing, boat cleaning, yard cleaning and any concierge services you want done throughout
        the year. This takes away the hassle of calling multiple different services to take care of your
        personal property.`
    },
    {
      question: "What type of pressure washing jobs do you offer?",
      answer:
        `We can pressure wash your dock, driveway, golf cart path, boat sheds, patios, pool area, and
        dock roof. We also use a soft wash system for any sensitive material like vinyl siding and
        wooden decks. We make sure to use soaps that comply with the Clean Water Act so it is safe to
        clean surfaces near the lake!`
    },
    {
      question: "How do I receive a free quote for pressure washing?",
      answer:
        "Call or text (309) 530-6861 or fill out the questionnaire below today!"
    },
    {
      question: "What are concierge services?",
      answer:
        `Concierge services can be any tasks you want done to prepare for a weekend at the lake. We
        can make sure groceries are stored in the fridge and beverages are in coolers before you even
        get there. We can set out all patio and dock furniture before arrival so you do not have to lift a
        finger as well. When the group is ready to leave, we can come in and clean the place up as well.`
    },
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container id='faqs'>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
