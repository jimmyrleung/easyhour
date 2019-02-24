import { CustomError } from "./CustomError";
import { IModelError } from "./IModelError";

export class CustomErrorHandler {
    static handle(error, res) {
        console.log(error);
        if (error instanceof CustomError) {
            res.status(error.code).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Internal server error." });
        }
    };

    static handleModelError(errors: IModelError[], res) {
        const messages = errors.map((e) => e.message);
        res.status(400).json({ messages });
    };
}