import { IModelError } from '../../utils/index';
import { CompanyConstants } from '../../constants/CompanyConstants';

export class Company {
    id: number;
    companyName: string;
    tradingName: string;
    zipcode: string;
    registerNumber: string;
    active: boolean;
    isCustomer: boolean;
    createdAt: Date;
    updatedAt: Date;

    private _errors: IModelError[] = [];

    get errors(): IModelError[] {
        return [...this._errors];
    };

    get isValid(): boolean {
        this.checkRequiredErrors();
        // TODO: check constraint errors
        return this._errors.length === 0;
    };

    private checkRequiredErrors() {
        // Required validation errors
        if (!this.companyName) {
            this._errors.push({ field: "companyName", message: CompanyConstants.messages.COMPANY_NAME_REQUIRED_MESSAGE });
        }

        if (!this.tradingName) {
            this._errors.push({ field: "tradingName", message: CompanyConstants.messages.TRADING_NAME_REQUIRED_MESSAGE });
        }

        if (!this.registerNumber) {
            this._errors.push({ field: "registerNumber", message: CompanyConstants.messages.REGISTER_NUMBER_REQUIRED_MESSAGE });
        }
    };

    private checkConstraintErrors() {
        // Business rules validation errors

        //TODO: Create type validators (string validator, number validator, boolean validator, etc)

    };
}