import { AppLayout } from "@/layouts";
import React from "react";

export const AccountPage: React.FC = () => {
  return (
    <AppLayout>
      <div>
        <div>
          <p>Cuenta Bancaria</p>
          <form>
            <div>
              <label>Tipo de cuenta</label>
              <select>
                <option>Seleccionar</option>
                <option>Cuenta Corriente</option>
                <option>Cuenta de Ahorro</option>
                <option>Cuenta de Ingreso</option>
              </select>
            </div>
            <div>
              <label>Alias</label>
              <input></input>
            </div>
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};
