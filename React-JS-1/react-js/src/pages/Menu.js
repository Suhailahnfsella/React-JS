import { useState } from "react";
import Tabel from "./Tabel";

function Menu() {
 const titel = "Daftar Menu Restoran";
 const [menus, setMenu] = useState([
  {
   idmenu: 1,
   idkategori: 1,
   menu: "Apel Merah",
   gambar: "apel.jpg",
   harga: 3000,
  },
  {
   idmenu: 2,
   idkategori: 1,
   menu: "Pisang Raja",
   gambar: "pisang.jpg",
   harga: 5000,
  },
  {
   idmenu: 3,
   idkategori: 2,
   menu: "Nasi Goreng",
   gambar: "nasigoreng.jpg",
   harga: 12000,
  },
  {
   idmenu: 4,
   idkategori: 2,
   menu: "Nasi Uduk",
   gambar: "nasiuduk.jpg",
   harga: 10000,
  },
  {
   idmenu: 5,
   idkategori: 3,
   menu: "Jus Mangga",
   gambar: "mangga.jpg",
   harga: 8000,
  },
  {
   idmenu: 6,
   idkategori: 3,
   menu: "Jus Melon",
   gambar: "melon.jpg",
   harga: 8000,
  },
 ]);
 return (
  <div className="App">
   <Tabel menu={menus} titel={titel} />
  </div>
 );
}

export default Menu;
