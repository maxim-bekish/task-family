export interface WishDetailSpec {
	label: string;
	value: string;
}

export interface WishDetail {
	id: string;
	title: string;
	price: number;
	oldPrice: number;
	discount: number;
	image: string | null;
	bgColor: string;
	description: string;
	specs: WishDetailSpec[];
	addedAt: string;
	link: string;
	note: string;
}
