import { CustomError } from "./CustomError";
import { IModelError } from "./IModelError";

const handle = (error, res) => {
    if (error instanceof CustomError) {
        res.status(error.code).json({ message: error.message });
    }
    else {
        res.status(500).json({ message: "Internal server error." });
    }
};

const handleModelError = (errors: IModelError[], res) => {
    const messages = errors.map((e) => e.message);
    res.status(400).json({ messages });
};

export const customErrorHandler = {
    handle,
    handleModelError
}