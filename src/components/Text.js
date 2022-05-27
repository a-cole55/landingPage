// import { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounceInRight } from "react-animations";
const BounceInRightAnimation = keyframes`${bounceInRight}`;
const BounceInRightDiv = styled.div`
  animation: 5s ${BounceInRightAnimation};
`;



export default function Text(){
    return(
        <div className="Text">
            <div className="mainText">
                <h2>Fenty Apparel</h2>
                <BounceInRightDiv><h1>Coming Soon</h1></BounceInRightDiv>
                <p>If you would like to be notified when our site launches</p>
                <button>Click Here</button>
            </div>
        </div>
)}