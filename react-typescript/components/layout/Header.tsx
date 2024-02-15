'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useContext } from 'react';
import { ExampleThemeContext } from '@/context/ExampleThemeProvider';

const Layout = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
`;

const Row = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* background-color: lightskyblue; */
  background-color: ${p => p.theme.color.bg.primary};
`;

const Box = styled.div`
  display: flex;
  width: auto;
  height: 100px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  cursor: pointer;
`;

const Header = () => {
  const { toggleTheme } = useContext(ExampleThemeContext);

  const handleClickToggleTheme = () => {
    toggleTheme();
  };
  return (
    <Layout>
      <Row>
        <Link href="/">
          <Box>Home</Box>
        </Link>
        <Link href="user-profile">
          <Box>User-Profile</Box>
        </Link>
        <Link href="error-page">
          <Box>Error Page</Box>
        </Link>
        <Box>Menu4</Box>
        <Box>Menu5</Box>
        <Box onClick={handleClickToggleTheme}>
          Toggle Theme
        </Box>
      </Row>
    </Layout>
  );
};

export default Header;
