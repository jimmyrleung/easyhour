import { IModelError, ModelErrorTypes } from '../../utils/index';
import { CompanyConstants } from '../../constants/CompanyConstants';
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
                message: CompanyConstants.messages.COMPANY_NAME_REQUIRED_MESSAGE
            });
        }

        if (!this.tradingName) {
            this._errors.push({
                type: ModelErrorTypes.Required,
                field: "tradingName",
                message: CompanyConstants.messages.TRADING_NAME_REQUIRED_MESSAGE
            });
        }

        if (!this.registerNumber) {
            this._errors.push({
                type: ModelErrorTypes.Required,
                field: "registerNumber",
                message: CompanyConstants.messages.REGISTER_NUMBER_REQUIRED_MESSAGE
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
                maxLength: CompanyConstants.config.COMPANY_NAME_MAX_LENGTH,
                minLength: CompanyConstants.config.COMPANY_NAME_MIN_LENGTH,
                stringToValidate: this.companyName
            },
            lengthMessage: CompanyConstants.messages.COMPANY_NAME_LENGTH_MESSAGE,
            typeOfMessage: CompanyConstants.messages.COMPANY_NAME_TYPEOF_MESSAGE
        });
    };

    private _tradingNameValidation() {
        this.baseStringValidation({
            field: "tradingName",
            overrideOptions: {
                maxLength: CompanyConstants.config.TRADING_NAME_MAX_LENGTH,
                minLength: CompanyConstants.config.TRADING_NAME_MIN_LENGTH,
                stringToValidate: this.tradingName
            },
            lengthMessage: CompanyConstants.messages.TRADING_NAME_LENGTH_MESSAGE,
            typeOfMessage: CompanyConstants.messages.TRADING_NAME_TYPEOF_MESSAGE
        });
    };


    private _registerNumberValidation() {
        this.baseStringValidation({
            field: "registerNumber",
            overrideOptions: {
                maxLength: CompanyConstants.config.REGISTER_NUMBER_MAX_LENGTH,
                minLength: CompanyConstants.config.REGISTER_NUMBER_MIN_LENGTH,
                stringToValidate: this.registerNumber
            },
            lengthMessage: CompanyConstants.messages.REGISTER_NUMBER_LENGTH_MESSAGE,
            typeOfMessage: CompanyConstants.messages.REGISTER_NUMBER_TYPEOF_MESSAGE
        });
    };

    private _zipcodeValidation() {
        this.baseStringValidation({
            field: "zipcode",
            overrideOptions: {
                maxLength: CompanyConstants.config.ZIPCODE_MAX_LENGTH,
                minLength: 0,
                stringToValidate: this.zipcode
            },
            lengthMessage: CompanyConstants.messages.ZIPCODE_LENGTH_MESSAGE,
            typeOfMessage: CompanyConstants.messages.ZIPCODE_TYPEOF_MESSAGE
        });
    };

}