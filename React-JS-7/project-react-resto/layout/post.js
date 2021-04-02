import {link} from "./link.js";

export function post() {
    let data = {
      pelanggan: "kami axios export",
      alamat: "warga axios",
      telp: "0829394",
    };

    link.post("/pelanggan", data).then((res) => {
      console.log(res);

      let tampil = `<h4>${res.data.pesan}</h4>`;
      document.querySelector("#out").innerHTML = tampil;
    });
  }