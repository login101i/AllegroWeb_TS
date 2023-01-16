import { NextFunction, Request, Response } from 'express';

export const getUser = (req: Request, res: Response, next: NextFunction) => {
	return res.json({
		success: true,
		login: 'Maciej',
	});
};
