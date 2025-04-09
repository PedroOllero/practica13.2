export interface Account {
  type: string;
  name: string;
}

export const emptyAccount = ():Account => ({
  type: "",
  name: ""
})

export interface AccountFormErrors {
  type: string;
  name: string;
}

export const createEmptyAccountFormErrors = (): AccountFormErrors => ({
  type: "",
  name: ""
})