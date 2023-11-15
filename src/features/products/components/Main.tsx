import { LARGE_PAGE } from "@/config"
import { useContent, useProducts } from "../api"
import { useMemo } from "react";
import { Product, ProductContent } from "../types";

export const GridCard: React.FC<{ fields: Product }> = ({ fields }) => {
	return <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
		<img src={fields.image}
			alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
		<div className="px-4 py-3 w-72">
			<span className="text-gray-400 mr-3 uppercase text-xs">ID: {fields.product_id}</span>
			<p className="text-lg font-bold text-black truncate block capitalize">{fields.title}</p>
		</div>
	</div>
}

export const Grid: React.FC<{ cards: Product[], contents: ProductContent[] }> = ({ cards, contents }) => {

	return <div className="pt-2 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 
	justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5
	">
		{cards.map((card, index) => <GridCard key={`product-${index}`} fields={card} />)}
		{contents.map(content => {
			const position = content.position.split('-');
			return <div key={content.position} className={`row-start-${position[1]} row-end-${parseInt(position[1])+1} col-span-3`} dangerouslySetInnerHTML={{ __html: content.contents }} />
		}
		)}
	</div>
}

export const GridContainer: React.FC = () => {
	const { data: products, isLoading: productLoading } = useProducts({ page: LARGE_PAGE });
	const { data: content, isLoading: contentLoading } = useContent({ page: LARGE_PAGE });


	const cardItemsChunk = useMemo(() => {
		if (!products) return [];
		return products.products.slice(0, 27);
	}, [products]);

	const isDataLoading = productLoading && contentLoading;

	return <section className="mt-20">
		{isDataLoading && <>Loading!</>}
		{!isDataLoading && <Grid cards={cardItemsChunk} contents={content?.data ?? []} />}
	</section>
}