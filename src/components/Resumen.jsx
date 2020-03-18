import React from "react";
import styled from "@emotion/styled";
import { primeraMayuscula } from "../helper";

const Contenedor = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  // Extraer datsos
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") return null;

  return (
    <Contenedor>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)} </li>
        <li>Plan: {primeraMayuscula(plan)} </li>
        <li>Año del Auto: {year} </li>
      </ul>
    </Contenedor>
  );
};

export default Resumen;
