import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20em;
  margin-right: 1em;
  margin-bottom: 0.5em;
  display: inline-block;
`;

const ImgStyle = styled.img`
  width: 100%;
`;

const Img = ({ src, alt }) => {
  return (
    <Container>
      <ImgStyle src={src} alt={alt} />
    </Container>
  );
};

export default Img;
