export type TInitialProducts = {
	loading: boolean;
	products: TProducts | [];
	error?: string | null;
	productsCount?: number;
	resPerPage?: number;
	filteredProducts?: number;
	success?: boolean;
};

export type TProducts = {
	name: string;
	seller: string;
};
export type TDispatchError = {
	error: string;
};

export type State = TInitialProducts;
