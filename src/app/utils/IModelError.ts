export enum ModelErrorTypes {
    Required = 1,
    Constraint
}

export interface IModelError {
    type: ModelErrorTypes;
    field: string;
    message: string;
};