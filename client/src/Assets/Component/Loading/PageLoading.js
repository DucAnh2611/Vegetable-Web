import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const LoadingPage= styled.div`
    width: 60px;
    height: 60px;
    border: 6px solid var(--Primary_Gray);
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${spin} 1s linear infinite;
`;


 
