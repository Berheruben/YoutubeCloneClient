import React from 'react'
import styled from "styled-components";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import ReplyIcon from '@mui/icons-material/Reply';
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
flex:2;
`;
const Channel = styled.div`
display: flex;
justify-content: space-between;

`;
const ChannelInfo = styled.div`



`;
const Image = styled.img`



`;
const ChannelDetail = styled.div`



`;
const ChannelCounter = styled.span`



`;
const ChannelName = styled.span`



`;
const Description = styled.p`



`;
const Subscribe = styled.buttom`

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
      </Description>
    </ChannelDetail>
    <Subscribe>Subscribe</Subscribe>
  </ChannelInfo>
</Channel>
</Content>
<Recommendation>recommendation</Recommendation>




    </Container>
  )
}

export default Video