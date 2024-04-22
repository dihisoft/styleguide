'use client';

import {
  createRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Layout = styled.div``;

const ButtonGap = 10;
const CountButtonWidth = 40; // "+3" 버튼의 너비 (50px) + 간격 (10px)

const ButtonContainer = styled.div`
  height: 60px;
  display: flex;
  column-gap: ${ButtonGap}px;
  background-color: aliceblue;
  overflow: hidden;
  white-space: nowrap;
`;

const MyButton = styled.div<{ isVisible: boolean }>`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;

  visibility: ${p => (p.isVisible ? 'visible' : 'hidden')};
`;

const CountButton = styled.div`
  width: ${CountButtonWidth}px;
  background-color: red;
  border-radius: 5px;
  border: 1px solid black;
  display: 30px;
  padding: 10px;
`;

const names = [
  '기존',
  '커스텀',
  '긴급',
  '커스텀필드1',
  '커스텀필드2',
  '커스텀필드3',
  '커스텀필드4',
];

const Home = () => {
  const { t } = useTranslation(['user', 'common']);

  const [isRendered, setIsRendered] = useState(false);

  const [visibleCountButton, setVisibleCountButton] =
    useState(names.length);

  const containerRef = useRef();
  const buttonRefs = useRef([]);
  buttonRefs.current = names.map(
    (_, i) => buttonRefs.current[i] ?? createRef(),
  );

  const checkWidth = () => {
    let totalWidth = 0;
    let count = 0;

    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (let ref of buttonRefs.current) {
      if (ref.current) {
        const buttonWidth =
          ref.current.offsetWidth + ButtonGap;
        if (
          totalWidth + buttonWidth >
          containerRef.current.offsetWidth -
            (CountButtonWidth + ButtonGap)
        ) {
          break;
        }
        totalWidth += buttonWidth;
        count += 1;
      }
    }
    setVisibleCountButton(count);
    setIsRendered(true);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  useLayoutEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  return (
    <Layout>
      {t('user:user-label')}
      <br />
      {t('common:home-screen')}

      <ButtonContainer ref={containerRef}>
        {names
          .slice(0, visibleCountButton)
          .map((name, index) => (
            <MyButton
              key={name}
              isVisible={isRendered}
              ref={buttonRefs.current[index]}
            >
              {name}
            </MyButton>
          ))}
        {visibleCountButton < names.length && (
          <CountButton>
            +{names.length - visibleCountButton}
          </CountButton>
        )}
      </ButtonContainer>
    </Layout>
  );
};

export default Home;
