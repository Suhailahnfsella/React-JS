import {link} from "./link.js";

export function show() {
    let id = 100;

    link.get("/pelanggan/" + id).then((res) => {
      let tampil = `<table class="table">
          <tr>
            <th>Id</th>  
            <th>Pelanggan</th>  
            <th>Alamat</th>  
            <th>Telp</th>  
          </tr>
        `;

      res.data.forEach((el) => {
        tampil += `<tr>
          <td>${el.idpelanggan}</td>  
          <td>${el.pelanggan}</td>  
          <td>${el.alamat}</td>  
          <td>${el.telp}</td>  
        </tr>`;
      });

      tampil += `</table>`;

      document.querySelector("#out").innerHTML = tampil;
    });
  }
