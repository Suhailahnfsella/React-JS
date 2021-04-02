import {link} from "./link.js";

export function ubah() {
    let id = 11;
    let data = {
      pelanggan: "update data axios",
      alamat: "axios",
      telp: 84992139,
    };

    link.put("/pelanggan/" + id, data).then((res) => {
      console.log(res);

      let tampil = `<h4>${res.data.pesan}</h4>`;
      document.querySelector("#out").innerHTML = tampil;
    });
  }