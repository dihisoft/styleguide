'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useContext } from 'react';
import { ExampleThemeContext } from '@/context/ExampleThemeProvider';
import { ThemeType, themes } from '@/styles/theme';

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
  background-color: #b0e2ff;
`;

const ThemeRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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

const ThemeBox = styled.div<{ themeName: ThemeType }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;

  background-color: ${({ themeName }) =>
    themes[themeName].color.bg.primary};
`;

const Header = () => {
  const { changeTheme } = useContext(ExampleThemeContext);

  const handleChangeTheme = (newTheme: ThemeType) => {
    changeTheme(newTheme);
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
        <ThemeRow>
          {Object.keys(themes).map(theme => (
            <ThemeBox
              themeName={theme as ThemeType}
              onClick={() =>
                handleChangeTheme(theme as ThemeType)
              }
            />
          ))}
        </ThemeRow>
      </Row>
    </Layout>
  );
};

export default Header;
