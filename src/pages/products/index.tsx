import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import { ShopFilters } from '@components/search/filters';
import { ProductGrid } from '@components/product/product-grid';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DownloadApps from '@components/common/download-apps';
import { GetStaticProps } from 'next';
import PageHeroSection from '@components/ui/page-hero-section';
import { useTranslation } from 'next-i18next';
import SearchTopBar from '@components/search/search-top-bar';
import { Element } from 'react-scroll';
import Seo from '@components/seo/seo';
import CategoryDropdownSidebar from '@components/category/category-dropdown-sidebar';
import AllProductFeed from '@components/product/feeds/all-products-feed';

export default function Products() {
  const { t } = useTranslation('common');
  return (
    <>
      <Seo
        title="مصنع الفيحاء للبلاستيك"
        description="نوفر لعملائنا منتجات وخدمات صناعية ذات جودة عالية تتواكب مع تطلُّعاتهم مقابل أسعارٍ منافِسة « الخلاصة"
        path="vintage"
      />

      <Container>
        {/* <BundleGrid data={bundle} /> */}
        <Element name="grid" className="flex mb-16 pb-2.5">
          <CategoryDropdownSidebar className="flex-shrink-0 pe-8 xl:pe-16 hidden lg:block w-80 xl:w-[400px]" />
          <AllProductFeed
            className="w-full xl:-ms-8"
            // element={<BannerCard banner={banner} className="py-5" />}
          />
        </Element>
      </Container>
      {/* <DownloadApps /> */}
    </>
  );
}

Products.Layout = Layout;

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
