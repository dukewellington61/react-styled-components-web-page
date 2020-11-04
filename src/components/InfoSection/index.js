import React, { useState } from "react";
import { Button } from "../ButtonElements";
import { Subtitle } from "./InfoElements";
import { useHistory } from "react-router-dom";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Spinner,
  TextWrapper,
  TopLine,
  Heading,
  TeckStackHeader,
  TechStack,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";

import Iframe from "react-iframe";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  teckStackHeader,
  teckStack,
  buttonLabel,
  buttonTarget,
  buttonExternalTarget,
  img,
  url,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const [renderIframe, setRenderIframe] = useState(false);

  const handleOnLoad = () => () => setRenderIframe(true);

  let history = useHistory();

  const handleClick = () => {
    buttonExternalTarget
      ? window.open(buttonExternalTarget, "_blank")
      : history.push(`${buttonTarget}`);
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <TeckStackHeader darkText={darkText}>
                  {teckStackHeader}
                </TeckStackHeader>
                <TechStack darkText={darkText}>{teckStack}</TechStack>

                <BtnWrap>
                  {buttonExternalTarget ? (
                    <Button
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      onClick={() => handleClick()}
                    >
                      {" "}
                      {buttonLabel}
                    </Button>
                  ) : (
                    <NavBtn>
                      <NavBtnLink
                        to="web_shop"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                      >
                        {buttonLabel}
                      </NavBtnLink>
                    </NavBtn>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap style={{ overflow: "hidden" }}>
                {img && <Img src={img} alt={alt} />}{" "}
                {url && !renderIframe && (
                  <Spinner>
                    {" "}
                    <i
                      className="fa fa-cog fa-spin"
                      style={{ fontSize: "10rem" }}
                    />
                  </Spinner>
                )}
                {url && (
                  <Iframe
                    url={url}
                    width="100%"
                    height="450px"
                    id="iframe"
                    className="iframe_class"
                    display="initial"
                    position="relative"
                    onLoad={handleOnLoad()}
                    overflow="auto"
                  />
                )}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
