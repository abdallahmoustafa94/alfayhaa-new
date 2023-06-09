import Layout from '@components/layout/layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ShopsPageContent from '@components/shops/shops-page-content';
import DownloadApps from '@components/common/download-apps';
import PageHeroSection from '@components/ui/page-hero-section';
import Seo from '@components/seo/seo';

export default function ShopsPage() {
  return (
    <>
      <Seo
        title="Shops"
        description="مصنع الفيحاء للبلاستك |نوفر لعملائنا منتجات وخدمات صناعية ذات جودة عالية تتواكب مع تطلُّعاتهم مقابل أسعارٍ منافِسة"
        path="shops"
      />
      <PageHeroSection
        heroTitle="text-shop-page"
        backgroundThumbnail="/assets/images/shop-page-hero-bg.jpg"
        mobileBackgroundThumbnail="/assets/images/shop-page-hero-mobile-bg.png"
        variant="white"
      />
      <ShopsPageContent />
      <DownloadApps />
    </>
  );
}

ShopsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
