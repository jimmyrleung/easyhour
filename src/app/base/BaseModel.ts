import { IModelError, ModelErrorTypes } from "../utils/index";
import { StringValidator, IStringValidatorOverrideOptions } from "../utils/validators/index";

export class BaseModel {

    protected _errors: IModelError[] = [];
    protected _stringValidator: StringValidator;

    constructor() {
        this._stringValidator = new StringValidator({
            shouldValidateTypeOf: true,
            shouldValidateMaxLength: true,
            shouldValidateMinLength: true,
            shouldValidateEmptyString: false,
            stringToValidate: "",
            maxLength: 0,
            minLength: 0
        })
    }

    get errors(): IModelError[] {
        return [...this._errors];
    };

    baseStringValidation(baseStringValidationOptions: BaseStringValidationOptions) {
        this._stringValidator.options = baseStringValidationOptions.overrideOptions;

        if (!this._stringValidator.typeOfValid) {
            this._errors.push({
                type: ModelErrorTypes.Constraint,
                field: baseStringValidationOptions.field,
                message: baseStringValidationOptions.typeOfMessage
            });

            // If the typeOf isn't valid there is no reason to validate the length
            return;
        }

        if (!this._stringValidator.lengthValid) {
            this._errors.push({
                type: ModelErrorTypes.Constraint,
                field: baseStringValidationOptions.field,
                message: baseStringValidationOptions.lengthMessage
            });
        }
    };

};

interface BaseStringValidationOptions {
    overrideOptions: IStringValidatorOverrideOptions;
    field: string;
    typeOfMessage: string;
    lengthMessage: string;
};