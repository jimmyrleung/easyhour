const config = {
    COMPANY_NAME_MIN_LENGTH: 5,
    COMPANY_NAME_MAX_LENGTH: 80,
    TRADING_NAME_MIN_LENGTH: 5,
    TRADING_NAME_MAX_LENGTH: 80,
    ZIPCODE_MAX_LENGTH: 20,
    REGISTER_NUMBER_MIN_LENGTH: 3,
    REGISTER_NUMBER_MAX_LENGTH: 30
};

const messages = {
    COMPANY_NAME_REQUIRED_MESSAGE: "The company name must be provided.",
    TRADING_NAME_REQUIRED_MESSAGE: "The trading name must be provided.",
    REGISTER_NUMBER_REQUIRED_MESSAGE: "The register number must be provided.",

    COMPANY_NAME_TYPEOF_MESSAGE: "The company name must be a valid string.",
    TRADING_NAME_TYPEOF_MESSAGE: "The trading name must be a valid string.",
    REGISTER_NUMBER_TYPEOF_MESSAGE: "The register number must be a valid string.",
    ZIPCODE_TYPEOF_MESSAGE: "The zipcode must be a valid string.",
    
    COMPANY_NAME_LENGTH_MESSAGE: `The company name length must be between ${config.COMPANY_NAME_MIN_LENGTH} and ${config.COMPANY_NAME_MAX_LENGTH} characters.`,
    TRADING_NAME_LENGTH_MESSAGE: `The trading name must be between ${config.TRADING_NAME_MIN_LENGTH} and ${config.TRADING_NAME_MAX_LENGTH} characters.`,
    REGISTER_NUMBER_LENGTH_MESSAGE: `The register number must be between ${config.REGISTER_NUMBER_MIN_LENGTH} and ${config.REGISTER_NUMBER_MAX_LENGTH} characters.`,
    ZIPCODE_LENGTH_MESSAGE: `The zipcode must have at the very most ${config.ZIPCODE_MAX_LENGTH} characters.`
}

export const CompanyConstants = {
    config,
    messages
};