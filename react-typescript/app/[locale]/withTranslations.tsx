import React, { ComponentType } from 'react';
import TranslationsProvider from '@/context/TranslationsProvider';
import initTranslations from '../i18n';

interface WithParams {
  params: {
    locale: string;
  };
}

// NOTE i18nNamespaces는 여기서 관리
const i18nNamespaces = ['common'];

const withTranslations = <P extends WithParams>(
  WrappedComponent: ComponentType<P>,
) => {
  // NOTE WithTranslations 컴포넌트는 함수 컴포넌트
  const Component = async (props: P) => {
    const { resources } = await initTranslations(
      props.params.locale,
      i18nNamespaces,
    );

    return (
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={props.params.locale}
        resources={resources}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...props} />
      </TranslationsProvider>
    );
  };
  return Component;
};

export default withTranslations;
