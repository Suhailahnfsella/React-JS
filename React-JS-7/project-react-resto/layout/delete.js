import {link} from "./link.js";

export function hapus() {
    let id = 29;

    link.delete("/pelanggan/" + id).then((res) => {
      console.log(res);

      let tampil = `<h4>${res.data.pesan}</h4>`;
      document.querySelector("#out").innerHTML = tampil;
    });
  }