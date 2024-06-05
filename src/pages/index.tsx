import BundleGrid from '@components/bundle/bundle-grid';
import AllProductFeed from '@components/product/feeds/all-products-feed';
import Layout from '@components/layout/layout';
import Container from '@components/ui/container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DownloadApps from '@components/common/download-apps';
import { homeTwoHeroBanner as heroBanner } from '@framework/static/banner';
import { homeTwoBanner as banner } from '@framework/static/banner';
import BannerCard from '@components/cards/banner-card';
import HeroSliderBlock from '@components/hero/hero-slider-block';
import { Element } from 'react-scroll';
import { GetStaticProps } from 'next';
import CategoryDropdownSidebar from '@components/category/category-dropdown-sidebar';
import { bundleDataTwo as bundle } from '@framework/static/bundle';
import Seo from '@components/seo/seo';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchProducts } from '@framework/product/get-all-products';
import { fetchCategories } from '@framework/category/get-all-categories';
import { LIMITS } from '@framework/utils/limits';

export default function Home() {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent : "center", alignItems : "center"}}>
      <h1>Internal Server Error</h1>
{/*       <Seo
        title="مصنع الفيحاء للبلاستيك"
        description="نوفر لعملائنا منتجات وخدمات صناعية ذات جودة عالية تتواكب مع تطلُّعاتهم مقابل أسعارٍ منافِسة « الخلاصة"
        path="vintage"
      />
      <HeroSliderBlock />
      <Container className="mt-4">
        {/* <BundleGrid data={bundle} /> */}
        {/* <Element name="grid" className="flex mb-16 pb-2.5"> */}
          {/* <CategoryDropdownSidebar className="flex-shrink-0 pe-8 xl:pe-16 hidden lg:block w-80 xl:w-[400px]" />
          <AllProductFeed
            className="w-full xl:-ms-8"
            // element={<BannerCard banner={banner} className="py-5" />}
          /> */}
        {/* </Element>
      </Container> */} */}
      {/* <DownloadApps /> */}
    </div>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, { limit: LIMITS.CATEGORIES_LIMITS }],
    fetchCategories
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.PRODUCTS, { limit: LIMITS.PRODUCTS_LIMITS }],
    fetchProducts
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
    revalidate: 60,
  };
};
