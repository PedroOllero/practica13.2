import { AppLayout } from "@/layouts";
import React from "react";
import { Account, emptyAccount } from "./api/account.api.model";

export const AccountPage: React.FC = () => {
  const [newAccount, setNewAccount] = React.useState<Account>(emptyAccount()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   console.log(newAccount)
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
        <div>
          <p>Cuenta Bancaria</p>
          <form onSubmit={handleSubmit}>
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
              <input name="name" onChange={handleFieldChange}></input>
            </div>
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};
