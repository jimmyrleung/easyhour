export class CustomError extends Error {
    code: number;

    constructor(message, code) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message || "Internal server error";
        this.code = code || 500;
    };
}