type Product = {
	product_id: number,
	title: string,
	image: string
}

export type ProductsPayload = {
	products: Product[];
}