import { IModelError, ModelErrorTypes } from '../../utils/index';
import { companyConstants } from '../../constants/companyConstants';
import { StringValidator } from '../../utils/validators/index';
import { BaseModel } from '../../base/index';

export class Company extends BaseModel {
    id: number;
    companyName: string;
    tradingName: string;
    zipcode: string;
    registerNumber: string;
    active: boolean;
    isCustomer: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor() { super(); };

    get isValid(): boolean {
        this._checkRequiredErrors();
        this._checkConstraintErrors();
        return this._errors.length === 0;
    };

    private _checkRequiredErrors() {
        // Required validation errors
        if (!this.companyName) {
            this._errors.push({
                type: ModelErrorTypes.Required,
                field: "companyName",
                message: companyConstants.messages.COMPANY_NAME_REQUIRED_MESSAGE
            });
        }

        if (!this.tradingName) {
            this._errors.push({
                type: ModelErrorTypes.Required,
                field: "tradingName",
                message: companyConstants.messages.TRADING_NAME_REQUIRED_MESSAGE
            });
        }

        if (!this.registerNumber) {
            this._errors.push({
                type: ModelErrorTypes.Required,
                field: "registerNumber",
                message: companyConstants.messages.REGISTER_NUMBER_REQUIRED_MESSAGE
            });
        }
    };

    private _checkConstraintErrors() {
        // Business rules validation errors
        this._companyNameValidation();
        this._tradingNameValidation();
        this._registerNumberValidation();
        this._zipcodeValidation();
    };

    private _companyNameValidation() {
        this.baseStringValidation({
            field: "companyName",
            overrideOptions: {
                maxLength: companyConstants.config.COMPANY_NAME_MAX_LENGTH,
                minLength: companyConstants.config.COMPANY_NAME_MIN_LENGTH,
                stringToValidate: this.companyName
            },
            lengthMessage: companyConstants.messages.COMPANY_NAME_LENGTH_MESSAGE,
            typeOfMessage: companyConstants.messages.COMPANY_NAME_TYPEOF_MESSAGE
        });
    };

    private _tradingNameValidation() {
        this.baseStringValidation({
            field: "tradingName",
            overrideOptions: {
                maxLength: companyConstants.config.TRADING_NAME_MAX_LENGTH,
                minLength: companyConstants.config.TRADING_NAME_MIN_LENGTH,
                stringToValidate: this.tradingName
            },
            lengthMessage: companyConstants.messages.TRADING_NAME_LENGTH_MESSAGE,
            typeOfMessage: companyConstants.messages.TRADING_NAME_TYPEOF_MESSAGE
        });
    };


    private _registerNumberValidation() {
        this.baseStringValidation({
            field: "registerNumber",
            overrideOptions: {
                maxLength: companyConstants.config.REGISTER_NUMBER_MAX_LENGTH,
                minLength: companyConstants.config.REGISTER_NUMBER_MIN_LENGTH,
                stringToValidate: this.registerNumber
            },
            lengthMessage: companyConstants.messages.REGISTER_NUMBER_LENGTH_MESSAGE,
            typeOfMessage: companyConstants.messages.REGISTER_NUMBER_TYPEOF_MESSAGE
        });
    };

    private _zipcodeValidation() {
        this.baseStringValidation({
            field: "zipcode",
            overrideOptions: {
                maxLength: companyConstants.config.ZIPCODE_MAX_LENGTH,
                minLength: 0,
                stringToValidate: this.zipcode
            },
            lengthMessage: companyConstants.messages.ZIPCODE_LENGTH_MESSAGE,
            typeOfMessage: companyConstants.messages.ZIPCODE_TYPEOF_MESSAGE
        });
    };

}