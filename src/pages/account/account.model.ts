export interface Account {
  type: string;
  name: string;
}

export const emptyAccount = ():Account => ({
  type: "",
  name: ""
})