import cn from 'classnames';
import Image from '@components/ui/image';
import usePrice from '@framework/product/use-price';
import { Product } from '@framework/types';
import { useModalAction } from '@components/common/modal/modal.context';
import useWindowSize from '@utils/use-window-size';
import PlusIcon from '@components/icons/plus-icon';
import { useCart } from '@contexts/cart/cart.context';
import { AddToCart } from '@components/product/add-to-cart';
import { useTranslation } from 'next-i18next';
import { productPlaceholder } from '@assets/placeholders';
import { useEffect, useState } from 'react';

interface ProductProps {
  product: Product;
  className?: string;
}
function RenderPopupOrAddToCart({ data }: { data: Product }) {
  const { t, i18n } = useTranslation('common');
  const { id, quantity, product_type } = data ?? {};
  const { width } = useWindowSize();
  const { openModal } = useModalAction();
  const { isInCart, isInStock } = useCart();
  const iconSize = width! > 1024 ? '19' : '17';
  const outOfStock = isInCart(id) && !isInStock(id);
  const isRtl = i18n.language === 'ar';

  function handlePopupView() {
    openModal('PRODUCT_VIEW', data);
  }
  if (Number(quantity) < 1 || outOfStock) {
    return (
      <span className="text-[11px] md:text-xs font-bold text-skin-inverted uppercase inline-block bg-skin-red rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
        {t('text-out-stock')}
      </span>
    );
  }
  if (product_type === 'variable') {
    return (
      <button
        className="inline-flex bg-skin-primary rounded-full w-8 lg:w-10 h-8 lg:h-10 text-skin-inverted text-4xl items-center justify-center focus:outline-none focus-visible:outline-none"
        aria-label="Count Button"
        onClick={handlePopupView}
      >
        <PlusIcon width={iconSize} height={iconSize} opacity="1" />
      </button>
    );
  }
  return <AddToCart data={data} />;
}
const ProductCard: React.FC<ProductProps> = ({ product, className }) => {
  const {
    name,
    image,
    unit,
    product_type,
    description,
    size,
    quantity,
    madeFrom,
  } = product ?? {};
  const { openModal } = useModalAction();
  const [productDescription, setProductDescription] = useState('');
  const { t } = useTranslation('common');
  const { i18n } = useTranslation();
  const { price, basePrice, discount } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price,
    baseAmount: product?.price,
    currencyCode: 'USD',
  });
  const { price: minPrice } = usePrice({
    amount: product?.min_price ?? 0,
    currencyCode: 'USD',
  });
  const { price: maxPrice } = usePrice({
    amount: product?.max_price ?? 0,
    currencyCode: 'USD',
  });

  const isRtl = i18n.language === 'ar';

  function handlePopupView() {
    openModal('PRODUCT_VIEW', product);
  }

  useEffect(() => {
    const updatedDescription = description || '';
    switch (isRtl) {
      case true:
        // When isRtl is true, set the Arabic descriptions
        switch (updatedDescription) {
          case 'Hot & Cold':
            setProductDescription('بارد وساخن');
            break;
          case 'Weldable Product':
            setProductDescription('منتج قابل للحام');
            break;
          case 'Hot':
            setProductDescription('ساخن');
            break;
          default:
            setProductDescription(updatedDescription);
        }
        break;
      case false:
        // When isRtl is false, set the English descriptions
        switch (updatedDescription) {
          case 'Hot & Cold':
            setProductDescription('Hot & Cold');
            break;
          case 'Weldable Product':
            setProductDescription('Weldable Product');
            break;
          case 'Hot':
            setProductDescription('Hot');
            break;
          default:
            setProductDescription(updatedDescription);
        }
        break;
      default:
        setProductDescription(updatedDescription);
    }
  }, [description, isRtl]);

  return (
    <article
      className={cn(
        'flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full',
        className
      )}
      onClick={handlePopupView}
      title={name}
    >
      <div className="relative flex-shrink-0">
        <div className="flex overflow-hidden max-w-[230px] mx-auto transition duration-200 ease-in-out transform group-hover:scale-105 relative">
          <Image
            src={image?.thumbnail ?? productPlaceholder}
            alt={name || 'Product Image'}
            width={230}
            height={200}
            quality={100}
            className="object-cover bg-skin-thumbnail"
          />
        </div>
        <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
          <div className="inline-block product-count-button-position"></div>
        </div>
      </div>

      <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
        <div className="space-s-2 mb-1 lg:mb-1.5"></div>
        <h2 className="text-skin-base text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
          {name}
        </h2>
        <div className="text-13px sm:text-sm mt-auto">{productDescription}</div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-13px sm:text-sm">
            <Image src="/assets/images/size.png" width={30} height={30} />
          </div>
          <div className="text-13px sm:text-sm text-left">{size}</div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-13px sm:text-sm">
            <Image src="/assets/images/quantity.png" width={30} height={30} />
          </div>
          <div className="text-13px sm:text-sm text-left">{quantity}</div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-13px sm:text-sm">
            <div className="text-13px sm:text-sm text-left">
              {isRtl ? 'مصنوع من' : 'Made From'}
            </div>
          </div>
          <div className="text-13px sm:text-sm text-left">{madeFrom}</div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
