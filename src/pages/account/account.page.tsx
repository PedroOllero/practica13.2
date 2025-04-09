import { AppLayout } from "@/layouts";
import React from "react";
import { Account, emptyAccount } from "./api/account.api.model";
import { saveAccount } from "./api/account.api";
import classes from "./account.page.module.css"
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountPage: React.FC = () => {
  const [newAccount, setNewAccount] = React.useState<Account>(emptyAccount()
  );
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   console.log(newAccount)
   saveAccount(newAccount)
   navigate(appRoutes.accountList);
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
            </div>
            <div>
              <label>Alias</label>
              <input name="name" className={`${classes.large}`} onChange={handleFieldChange}></input>
            </div>
            <button type="submit" className={classes.button}>Guardar</button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};
