import React from 'react';
import { useSessionStorage } from 'react-use';
import Image from '@components/ui/image';
import HighlightedBar from '@components/common/highlighted-bar';
import Countdown from '@components/common/countdown';
import Header from '@components/layout/header/header';
import Footer from '@components/layout/footer/footer';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import { useTranslation } from 'next-i18next';

const Layout: React.FC = ({ children }) => {
  const { t } = useTranslation('common');
  const [highlightedBar, setHighlightedBar] = useSessionStorage(
    'borobazar-highlightedBar',
    'false'
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* {highlightedBar !== 'true' && (
        <HighlightedBar onClose={() => setHighlightedBar('true')}>
          <div className="flex items-center">
            <p
              dangerouslySetInnerHTML={{
                __html: t('text-highlighted-bar'),
              }}
            />
          </div> */}
          {/* Uncomment the Countdown component if needed */}
          {/* <Countdown date={Date.now() + 4000000 * 71} /> */}
        {/* </HighlightedBar>
      )} */}
      {/* End of highlighted bar  */}
{/* 
      <Header />
      <MobileNavigation /> */}

      <main
        className="relative flex-grow"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
