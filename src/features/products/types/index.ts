export type Product = {
	product_id: number,
	title: string,
	image: string
}

export type ProductContent = {
	type: string,
	contents: string,
	position: string
}


export type ContentsPayload = {
	data: ProductContent[]
}

export type ProductsPayload = {
	products: Product[];
}