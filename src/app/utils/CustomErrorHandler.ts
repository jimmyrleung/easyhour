import { CustomError } from "./CustomError";

export class CustomErrorHandler {
    static handle(error, res) {
        if (error instanceof CustomError) {
            res.status(error.code).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Internal server error." });
        }
    }
}