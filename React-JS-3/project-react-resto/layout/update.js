import { link } from "./link.js";

export function ubah() {
 let id = 113;
 let data = {
  pelanggan: "update pelanggan sudah axios export",
  alamat: "update alamat sudah axios export",
  telp: "0997745",
 };
 link.put("/pelanggan/" + id, data).then((res) => {
  console.log(res);
  let tampil = `<h1>${res.data.pesan}</h1>`;
  document.querySelector("#out").innerHTML = tampil;
 });
}
