'use client';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Layout = styled.div``;

const Home = () => {
  const { t } = useTranslation();

  return <Layout>{t('home-screen')}</Layout>;
};

export default Home;
