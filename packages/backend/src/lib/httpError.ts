import type { Response } from 'express';

export type ApiErrorBody = {
    code: string; message: string;
};

export function sendApiError(res: Response, status: number, code: string, message: string) {
    const body: ApiErrorBody = {   code, message  };
    return res.status(status).json(body);
}
