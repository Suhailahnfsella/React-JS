import React from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";
import Kategori from "./Kategori";
import Menu from "./Menu";
import Order from "./Order";
import Pelanggan from "./Pelanggan";
import User from "./User";

const Content = () => {
  const { isi } = useParams();

  let tampil;

  if (isi === "kategori") {
    tampil = <Kategori></Kategori>;
  }
  if (isi === "menu") {
    tampil = <Menu></Menu>;
  }
  if (isi === "pelanggan") {
    tampil = <Pelanggan></Pelanggan>;
  }
  if (isi === "order") {
    tampil = <Order></Order>;
  }
  if (isi === "detail") {
    tampil = <Detail></Detail>;
  }
  if (isi === "user") {
    tampil = <User></User>;
  }

  return <>{tampil}</>;
};

export default Content;
