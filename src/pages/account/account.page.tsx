import { AppLayout } from "@/layouts";
import React from "react";
import { Account, emptyAccount } from "./account.model";
import { saveAccount } from "./api/account.api";
import classes from "./account.page.module.css"
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { validateForm } from "./validation/account.validation";
import { AccountFormErrors, createEmptyAccountFormErrors } from "./validation/account.validation.model";

export const AccountPage: React.FC = () => {
  const [newAccount, setNewAccount] = React.useState<Account>(emptyAccount()
  );
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState<AccountFormErrors>(
    createEmptyAccountFormErrors()
  );


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = validateForm(newAccount);
    setErrors(validationResult.errors);
    const result = await saveAccount(newAccount);
    if (result) {
      navigate(appRoutes.accountList);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  return (
    <AppLayout>
      <div>
        <div className={classes.container}>
          <p className={classes.title}>Cuenta Bancaria</p>
          <form onSubmit={handleSubmit} className={classes.formContainer}>
            <div>
              <label>Tipo de cuenta</label>
              <select name="type" onChange={handleFieldChange}>
                <option>Seleccionar</option>
                <option id="1">Cuenta Corriente</option>
                <option id="2">Cuenta de Ahorro</option>
                <option id="3">Cuenta de Ingreso</option>
              </select>
              <p className={classes.error}>{errors.type}</p>
            </div>
            <div>
              <label>Alias</label>
              <input name="name" className={`${classes.large}`} onChange={handleFieldChange}></input>
              <p className={classes.error}>{errors.name}</p>
            </div>
            <button type="submit" className={classes.button}>Guardar</button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};
