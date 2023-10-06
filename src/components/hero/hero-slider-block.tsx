import Carousel from 'react-bootstrap/Carousel';
import { useRouter } from 'next/router';
import { getDirection } from '@utils/get-direction';
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
  const router = useRouter();
  const dir = getDirection(router.locale);
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              dir === 'ltr'
                ? '/assets/images/01.png'
                : '/assets/images/01-ar.png'
            }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              dir === 'ltr'
                ? '/assets/images/02.png'
                : '/assets/images/02-ar.png'
            }
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              dir === 'ltr'
                ? '/assets/images/03.png'
                : '/assets/images/03-ar.png'
            }
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSliderBlock;
