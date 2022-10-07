import styled from "styled-components";
import React from 'react'
import { Link } from "react-router-dom";
import YoutubeLogo from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonIcon from '@mui/icons-material/Person';
const Container = styled.div`
flex:1;
background-color: ${({theme})=>theme.bglighter};
height: 900vh;
color:${({theme})=>theme.text};

`;
const Wrapper = styled.div`
padding: 18px 26px;

`;
const Item = styled.div`
padding: 7.5px 0px;
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;

&:hover{
  background-color: ${({theme})=>theme.soft};
}

`;
const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bold;
margin-botton: 25px;

`;
const Img = styled.img`
height: 20px;

`;
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${theme=>theme.soft};
`;
const Login = styled.div`

`
const Button = styled.button`
cursor: pointer;
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top; 10px;
display: flex;
align-items:center;

`;
const menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <Logo>
         <Img src={YoutubeLogo}/>
         Youtube
          </Logo>
          </Link>
          <Item>
            <HomeIcon/>
            home
          </Item>
          <Item>
            <ExploreIcon/>
            Explore
          </Item>
          <Item>
            <SubscriptionsIcon/>
            Subscription
          </Item>
          <Hr/>
          <Item>
            <VideoLibraryIcon/>
            Library
          </Item>
          <Item>
            <HistoryIcon/>
            History
          </Item>
          <Hr/>
          <Login>
            Sign in to like videos, comment, and subscribe
          </Login>
          <Button><PersonIcon/>
            SIGN IN
          </Button>
          <Hr/>
          Entertainment
          <Item>
           
            <LibraryMusicIcon />
            Music
          </Item>
          <Item>
            <SportsBasketballIcon/>
            Sports
          </Item>
          <Item>
            <SportsEsportsIcon/>
            Gaming
          </Item>
          <Item>
            <MovieIcon/>
          Movies
          </Item>
          <Item>
            <NewspaperIcon/>
            News
          </Item>
          <Item>
            <LiveTvIcon/>
            Live
          </Item>
          <Hr/>
          <Item>
          
            <SettingsIcon/>
            Settings
          </Item>
          <Item>
            <ReportGmailerrorredIcon/>
            Report
          </Item>
          <Item>
            <HelpIcon/>
            Help
          </Item>
          <Item onClick={()=>setDarkMode(!darkMode )}>
            <LightModeIcon/>
            {darkMode ? "Light": "Dark" } Mode
          </Item>
      </Wrapper>
      </Container>
  )
}

export default menu