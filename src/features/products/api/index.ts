import { useQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { ProductsPayload } from '../types';
import { PagePath } from '@/types';

const getProducts = ({ page }: { page: PagePath }): Promise<ProductsPayload> => {
	return axios.get('/products', {
		params: {
			page
		}
	});
};

type QueryFnType = typeof getProducts;

type UseProductsOptions = {
	page: PagePath;
	config?: QueryConfig<QueryFnType>;
};

export const useProducts = ({ page, config }: UseProductsOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		queryKey: ['products', page],
		queryFn: () => getProducts({ page }),
		...config,
	});
};