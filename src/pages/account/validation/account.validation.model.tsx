export interface AccountFormErrors {
    type: string;
    name: string;
  }
  
  export const createEmptyAccountFormErrors = (): AccountFormErrors => ({
    type: "",
    name: ""
  })