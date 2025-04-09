
import { FormValidationResult } from "@/common/validations";
import { validateAccountIdField, validateNameField } from "./account-field.validation";
import { AccountFormErrors, Account } from "./api/account.api.model";

export const validateForm = (
  newAccount: Account
): FormValidationResult<AccountFormErrors> => {
  const fieldValidationResults = [
    validateNameField(newAccount.name),
    validateAccountIdField(newAccount.type),
  ];

  const formValidationResult: FormValidationResult<AccountFormErrors> = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      name: fieldValidationResults[0].errorMessage ?? "",
      type: fieldValidationResults[1].errorMessage ?? "",
    },
  };

  return formValidationResult;
};
