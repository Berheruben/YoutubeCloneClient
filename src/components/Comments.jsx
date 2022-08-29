import React from 'react'
import styled from "styled-components";
import Comment from '../components/Comment';
const Container = styled.div`
display: flex;
gap: 24px;
`;
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;

`;

const Avatar = styled.img`
width:50px;
height: 50px;
border-radius: 50%;
background-color: #999;

`;
const Input = styled.input`
border : none;
border-bottom: 1px solid ${theme=>theme.Soft}; 
background-color: transparent;
outline:none;
padding: 5px;
width: 1000px;


`;
const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar/>
            <Input placeholder="add a comment..."/>
        </NewComment>
        
       
        </Container>
        
  )
}

export default Comments