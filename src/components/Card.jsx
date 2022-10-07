import React from 'react'
import styled from'styled-components';
import { Link } from "react-router-dom";
const Container = styled.div`
width: ${props=>props.type !== "small" && "360px"};
margin-bottom: ${props=>props.type === "small" ? "15px" : "45px"};
cursor: pointer;
display: ${props=>props.type === "small" && "flex"};
gap: 10px;
`;
const Image = styled.img`
width: 100%;
height:${props=>props.type === "small" ? "120px" : "202px"};
cursor: pointer;
background-color: #999;
flex:1;
`;
const Details = styled.div`
display:flex;
margin-top:  ${props=>props.type !== "small" && "16px"};
gap: 12px;
flex: 1;
color: ${({theme})=>theme.text};
`;
const ChannelImage = styled.img`
width: 36px;
height:36px;
border-radius: 50%;
background-color: #999;
display: ${props=>props.type === "small" && "none"};
`;
const Text = styled.div`
gap: 10px;
color: ${({theme})=>theme.text};
`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
margin: 5px 0px;
`;
const Title = styled.h1`
font-size: 16px;
font-Weight: 500;
color: ${theme => theme.text};

`;

const Info = styled.div`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
margin: 1px 1px;

`;

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none", color:"inherit"}}>
    <Container type={type}>
      <Image type={type}/>
      <Details type={type}>
        <ChannelImage type={type}/>
        <Text>
          <Title>Test video</Title>
          <ChannelName>Ruben</ChannelName>
          <Info>100,000 views 3 august 2022</Info>
        </Text>
      </Details>
    </Container>
    </Link>
  )
}

export default Card