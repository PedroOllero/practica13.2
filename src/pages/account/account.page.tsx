import React from "react";

export const AccountPage: React.FC = () => {
  return (
    <div>
      <div>
        <p>Cuenta Bancaria</p>
        <form>
          <div>
            <label>Tipo de cuenta</label>
            <select>
              <option>Ahorro</option>
              <option>Ingreso</option>
              <option>Seleccionar un tipo de cuenta</option>
            </select>
          </div>
          <div>
            <label>Alias</label>
            <input></input>
          </div>
        </form>
      </div>
    </div>
  );
};
