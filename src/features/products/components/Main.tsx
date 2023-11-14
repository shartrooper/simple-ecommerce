import { LARGE_PAGE } from "@/config"
import { useProducts } from "../api"

export const Main: React.FC = () => {
	const productsQuery = useProducts({ page: LARGE_PAGE });

	return <>
		PLACEHOLDER
	</>
}