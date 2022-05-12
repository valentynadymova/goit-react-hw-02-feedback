import styled from "@emotion/styled";

export const StatList=styled.ul`
list-style: none;
margin-top: 0;
margin-bottom: 0;
margin-right: auto;
margin-left: auto;
padding-left: 0;
display: flex;
flex-direction: column;
align-items: baseline;`;

export const StatItem=styled.li`
padding: 0 100px;
:not(:last-child) {
  margin-bottom: 15px;
}`;

export const StatValues=styled.p`  
margin-top: 0;
margin-bottom: 0;
font-weight: 500;
font-size: 20px;`;


