import HeroBannerCard from '@components/hero/hero-banner-card';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import ReactPlayer from 'react-player';

interface Props {
  heroBanner?: any;
  className?: string;
  contentClassName?: string;
}

const HeroSliderBlock: React.FC<Props> = ({
  heroBanner,
  className = 'mb-7',
  contentClassName = 'py-24',
}) => {
  return (
    <div className={`${className}`} style={{height:'60vh'}}>
     <ReactPlayer
            url="https://www.youtube.com/watch?v=kzhLVPx1z-k"
            width="100%"
            height="100%"
						muted
						playing={true}
						loop
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0,
									disabledkb: 1,
									loop: 1
                },
              },
              file: {
                attributes: {
                  disablepictureinpicture: 'true', // disable full screen on double click
                },
              },
            }}
						style={{ pointerEvents: 'none' }}
          />
    </div>
  );
};

export default HeroSliderBlock;
