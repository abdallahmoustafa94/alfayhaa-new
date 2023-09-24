import { CategoriesQueryOptionsType, Category } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

const useCategoriesEndpoint = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const language = i18n.languages[0];
  if (isRtl || language === 'ar') {
    return API_ENDPOINTS.CATEGORIES.replace('.json', '-ar.json');
  }
  return API_ENDPOINTS.CATEGORIES;
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  const categoriesEndpoint = useCategoriesEndpoint();

  return useQuery<{ categories: { data: Category[] } }, Error>(
    [categoriesEndpoint, options],
    (queryKey) => fetchCategories(queryKey, categoriesEndpoint)
  );
};

export const fetchCategories = async (
  { queryKey }: any,
  categoriesEndpoint: string
) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(categoriesEndpoint);
  return { categories: { data: data as Category[] } };
};

// Your React component code can use the useCategoriesQuery hook as needed.
