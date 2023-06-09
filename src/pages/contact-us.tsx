import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import Map from '@components/ui/map';
import PageContactHeroSection from '@components/ui/page-contact-hero-section';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DownloadApps from '@components/common/download-apps';
import ContactForm from '@components/common/form/contact-form';
import ContactSupport from '@components/contact/contact-support';
import ContactInformation from '@components/contact/contact-information';
import Seo from '@components/seo/seo';

export default function ContactUsPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="contact-us"
      />
      {/* <PageContactHeroSection /> */}
      <Container>
        <div className="max-w-[1420px] mx-auto mb-12 lg:mb-14 xl:mb-16">
          <div className="flex flex-wrap bg-skin-fill w-full p-5 md:p-7 lg:p-10 xl:p-16 3xl:px-[70px] xl:py-12 shadow-contact rounded-md -mt-8 relative z-10">
            <div className="w-full md:w-[53%] xl:w-[60%] md:pe-8 lg:pe-0 2xl:pe-24 lg:mb-0 mb-8">
              <ContactSupport />
            </div>
            <div className="w-full md:w-[47%] xl:w-[40%] pb-0.5 lg:ps-12 pt-1.5">
              <ContactForm />
            </div>
          </div>
        </div>
        <ContactInformation />
      </Container>
      <div className="mt-12 md:mt-16 xl:mt-20 2xl:mt-24 bg-skin-three relative h-[420px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6848.68860031211!2d29.603184!3d30.877028!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUyJzM3LjMiTiAyOcKwMzYnMTkuMyJF!5e0!3m2!1sen!2seg!4v1686321649831!5m2!1sen!2seg" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}

ContactUsPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
