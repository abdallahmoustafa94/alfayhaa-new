import { CategoryFilter } from './category-filter';
import { BrandFilter } from './brand-filter';
import { FilteredItem } from './filtered-item';
import { useRouter } from 'next/router';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import { DietaryFilter } from '@components/search/dietary-filter';
import Heading from '@components/ui/heading';

export const ShopFilters: React.FC = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const { t } = useTranslation('common');
  return (
    <div className="space-y-10">
      {!isEmpty(query) && (
        <div className="block -mb-3">
          <div className="flex items-center justify-between mb-4 -mt-1">
            <Heading>{t('text-filters')}</Heading>
            <button
              className="flex-shrink text-13px transition duration-150 ease-in focus:outline-none hover:text-skin-base"
              aria-label={t('text-clear-all')}
              onClick={() => {
                router.push(pathname);
              }}
            >
              {t('text-clear-all')}
            </button>
          </div>
          <div className="flex flex-wrap -m-1">
            {Object.values(query)
              .join(',')
              .split(',')
              .map(
                (v, idx) =>
                  !isEmpty(v) && (
                    <FilteredItem
                      itemKey={
                        Object.keys(query).find((k) => query[k]?.includes(v))!
                      }
                      itemValue={v}
                      key={idx}
                    />
                  )
              )}
          </div>
        </div>
      )}

      <CategoryFilter />
 
    </div>
  );
};
