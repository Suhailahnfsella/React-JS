import React, { useState } from "react";
import { link } from "../Axios/link";
import { useForm } from "react-hook-form";
import useGet from "../Hook/useGet";

const Kategori = () => {
  const [pesan, setPesan] = useState("");
  const [idkategori, setIdkategori] = useState("");
  const [pilihan, setPilihan] = useState(true);

  const { register, handleSubmit, reset, errors, setValue } = useForm();

  const [isi] = useGet("/kategori");

  async function simpan(data) {
    // link.post("./kategori", data).then((res) => setPesan(res.data.pesan));
    // reset();

    if (pilihan) {
      const res = await link.post("/kategori", data);
      setPesan(res.data.pesan);
    } else {
      const res = await link.put("/kategori/" + idkategori, data);
      setPesan(res.data.pesan);

      setPilihan(true);
    }

    reset();
  }

  async function hapus(id) {
    if (window.confirm("Apakah anda yakin menghapusnya?")) {
      const res = await link.delete("/kategori/" + id);
      setPesan(res.data.pesan);
    }
  }

  async function showData(id) {
    const res = await link.get("/kategori/" + id);
    setValue("kategori", res.data[0].kategori);
    setValue("keterangan", res.data[0].keterangan);

    setIdkategori(res.data[0].idkategori);

    setPilihan(false);
  }

  let no = 1;

  return (
    <div>
      <div className="row">
        <h4>Data Kategori</h4>
      </div>

      <div className="row">
        <p>{pesan}</p>
      </div>

      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSubmit(simpan)}>
            <div className="mb-3">
              <label htmlFor="kategori" className="form-label">
                Kategori
              </label>
              <input
                type="text"
                className="form-control"
                name="kategori"
                placeholder="kategori"
                ref={register({ required: true })}
              />
              {errors.kategori && "Kategori wajib diisi*"}
            </div>

            <div className="mb-3">
              <label htmlFor="keterangan" className="form-label">
                Keterangan
              </label>
              <input
                type="text"
                className="form-control"
                name="keterangan"
                placeholder="keterangan"
                ref={register}
              />
            </div>

            <div className="mb-3">
              <input
                type="submit"
                className="btn btn-info btn-md"
                name="keterangan"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Kategori</th>
              <th>Keterangan</th>
              <th>Hapus</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {isi.map((val, index) => (
              <tr key={index}>
                <td>{no++}</td>
                <td>{val.kategori}</td>
                <td>{val.keterangan}</td>
                <td>
                  <button
                    onClick={() => hapus(val.idkategori)}
                    className="btn btn-danger btn-md"
                  >
                    Hapus
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => showData(val.idkategori)}
                    className="btn btn-warning btn-md"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kategori;
