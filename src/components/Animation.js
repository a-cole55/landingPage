import { Component } from "react";
import styled, { keyframes } from "styled-components";
import { BounceInRight } from "react-animations";
const BounceInRightAnimation = keyframes`${BounceInRight}`;
const BounceInRightDiv = styled.div`
  animation: infinite 2s ${BounceInRightAnimation};
`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <BounceInRightDiv><h1>Coming Soon</h1></BounceInRightDiv>
        )
    }
}