import React from 'react'
import styled from "styled-components";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import ReplyIcon from '@mui/icons-material/Reply';
import Comments from '../components/Comments';
import Card from '../components/Card';
const Container = styled.div`
display: flex;
gap: 24px;
`;
const Content = styled.div`

flex:5;
`;
const VideoWrapper = styled.div`

flex:5;
`;
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color:${({theme})=>theme.text};

`;
const Details = styled.div`
display: flex;
align-items: center;
color:${({theme})=>theme.text};
justify-content: space-between;

`;
const Info = styled.span`

color:${({theme})=>theme.textSoft};

`;
const Hr = styled.hr`
margin: 15px 0px; 
border: 0.5px solid ${theme=>theme.soft};
`;
const Button = styled.div` 
display:flex;
align-items: center;
gap: 5px;
color:${({theme})=>theme.text};
cursor: pointer;

`;
const Recommendation = styled.div`
flex:1.5;
`;
const Channel = styled.div`
display: flex;
gap:20px;
justify-content: space-between;

`;
const ChannelInfo = styled.div`
display: flex;
gap: 20px;


`;
const Image = styled.img`
width:50px;
height: 50px;
border-radius: 50%;
background-color: #999;


`;
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color:${({theme})=>theme.text}; 

`;
const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 5px;
color:${theme=>theme.textSoft}; 
font-size: 12px;


`;
const ChannelName = styled.span`



`;
const Description = styled.p`
font-size:14px;


`;
const Subscribe = styled.button`
background-color: red;
font-weight:500;
color:white;
border:none; 
border-radius: 3px;
height: max-content;
padding:10px 20px;
cursor: pointer;
`;

const Video = () => {
  return (
    <Container>

<Content>
<VideoWrapper>

</VideoWrapper>
<Title>test video</Title>
<Details>
  <Info>
     197.821 views 3 august 2022
  </Info>
  <Button>
    <Button> <ThumbUpIcon/>12469  </Button>
    <Button> <ThumbDownIcon/> dislike  </Button>
    <Button><ShareIcon/>share </Button>
    <Button><ReplyIcon/> save </Button>
  </Button>
</Details>
<Hr/>
<Channel> 
  <ChannelInfo>
    <Image/>
    <ChannelDetail>
      <ChannelName>Ruben</ChannelName>
      <ChannelCounter>15.000 Subscribers</ChannelCounter>
      <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </Description>
    </ChannelDetail>
    <Subscribe>Subscribe</Subscribe>
  </ChannelInfo>
</Channel>
<Hr/>
<Comments/>
</Content>
<Recommendation>
  <Card type="small"/>
  <Card type="small"/>
  <Card type="small"/>
  <Card type="small"/>
</Recommendation>




    </Container>
  )
}

export default Video