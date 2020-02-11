import { AxiosResponse } from "axios";

export class HttpError extends Error {
    public readonly code: number;
    
    constructor(res: AxiosResponse<any>, ...params: any[]) {
        super(...params);
        Error.captureStackTrace(this, HttpError);
        this.name = res.statusText;
        this.message = res.data;
        this.code = res.status;
    }
}