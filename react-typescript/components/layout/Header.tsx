'use client';

import styled from 'styled-components';
import Link from 'next/link';

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
  background-color: lightskyblue;
`;

const Box = styled.div`
  display: flex;
  width: auto;
  height: 100px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`;

const Header = () => (
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
    </Row>
  </Layout>
);

export default Header;
