import Container from '@components/ui/container';
import WidgetLink from './widget-link';
import WidgetAbout from './widget-about-us';
import WidgetSubscription from './widget-subscription';
import { footer } from '../data';

interface WidgetsProps {
  widgets: {
    id: number;
    widgetTitle: string;
    lists: any;
  }[];
}

const Widgets: React.FC<WidgetsProps> = ({ widgets }) => {
  const { social } = footer;
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-12 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px]">
        <WidgetAbout
          social={social}
          className="col-span-full sm:col-span-1 md:col-span-4 border-b sm:border-b-0 border-skin-three mb-4 sm:mb-0"
        />
        {widgets?.map((widget) => (
          <WidgetLink
            key={`footer-widget--key${widget.id}`}
            data={widget}
            className="pb-3.5 sm:pb-0 col-span-4 md:col-span-4 text-center m-auto"
          />
        ))}
        <div className="col-span-4 text-center">
          <h3 className="text-skin-base text-base text-center lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
            Contact us
          </h3>
          <div>
            <a href="tel:01093942104">01093942104</a>-{' '}
            <a href="tel:01016257613">01016257613</a>
            <br />
            <a href="tel:01114545799">01114545799</a> -{' '}
            <a href="tel:01112073657">01112073657</a> -{' '}
            <a href="tel:01026060560">01026060560</a>
          </div>
        </div>
        {/* <WidgetSubscription className="col-span-full sm:col-span-1 md:col-start-4 xl:col-start-auto md:col-span-4 xl:col-span-3 2xl:ps-7 3xl:ps-16 pt-8 sm:pt-0 border-t sm:border-t-0 border-skin-three " /> */}
      </div>
    </Container>
  );
};

export default Widgets;
