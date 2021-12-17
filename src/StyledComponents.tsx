import React, { FC } from 'react';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #485cff;
  min-height: 180px;
  width: 100%;
`;

export const Title = styled.h1`
  font: bold 1.4em "Calibri";
  font-size: 42px;
  font-weight: bold;
  color: #fff;
`;

export const Section = styled.section`
  flex: 1 1 auto;
  width: 800px;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  color: #fff;
  font-weight: bold;
  padding: 30px 0;
  text-align: center;
  background: #485cff;
  vertical-align: middle;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0 30px;
  background: "#d5f5ff";
  border: 3px solid #0e93bf;
  line-height: 35px;
  color: #0e93bf;
  transition: border 0.2s ease-in, color 0.2s ease-in;
  text-decoration: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: red;
  cursor: pointer;
`;