import { NextFunction, Request, Response } from 'express';

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
	return res.json({
		success: true,
		products: 'Maciej',
	});
};
