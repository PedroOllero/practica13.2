import Axios from "axios";
import { Account } from "./account.api.model";

export const saveAccount = (account: Account): Promise<Account> =>
  Axios.post<Account>(url, account).then(({ data }) => data);