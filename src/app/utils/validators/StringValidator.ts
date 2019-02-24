export class StringValidator {

    constructor(private _options: IStringValidatorOptions) { }

    private _maxLengthValid(): boolean {
        const { shouldValidateMaxLength, stringToValidate, maxLength } = this._options;
        return shouldValidateMaxLength ? stringToValidate.length <= maxLength : true;
    };

    private _minLengthValid(): boolean {
        const { shouldValidateMinLength, stringToValidate, minLength } = this._options;
        return shouldValidateMinLength ? stringToValidate.length >= minLength : true;
    };

    get lengthValid() {
        const { shouldValidateMaxLength, shouldValidateMinLength } = this._options;

        if (shouldValidateMaxLength && shouldValidateMinLength) {
            return this._maxLengthValid() && this._minLengthValid();
        }
        else if (shouldValidateMaxLength) {
            return this._maxLengthValid();
        }
        else if (shouldValidateMinLength) {
            return this._maxLengthValid();
        }
        else {
            return true
        }
    };

    get typeOfValid() {
        return this._options.shouldValidateTypeOf ?
            typeof this._options.stringToValidate === 'string' : true;
    };

    set options(newOptions: IStringValidatorOverrideOptions) {
        this._options = Object.assign(this._options, newOptions)
    }

}

export interface IStringValidatorOptions {
    stringToValidate: string;
    maxLength: number;
    minLength: number;
    shouldValidateMaxLength: boolean;
    shouldValidateMinLength: boolean;
    shouldValidateEmptyString: boolean;
    shouldValidateTypeOf: boolean;
};

export interface IStringValidatorOverrideOptions {
    stringToValidate: string;
    maxLength: number;
    minLength: number;
};