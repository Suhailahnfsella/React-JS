import { useState, useEffect } from "react";
import useGet from "../Hook/useGet";
import useDelete from "../Hook/useDelete";
import { useForm } from "react-hook-form";
import { link } from "../Axios/link";

const Menu = () => {
  const [isi] = useGet("/menu");
  const { hapus, pesan, setPesan } = useDelete("/menu/");
  const [kategori, setKategori] = useState([]);
  const [gambar, setGambar] = useState([]);
  const [idkategori, setIdkategori] = useState([]);
  const [idmenu, setIdmenu] = useState("");
  const [pilihan, setPilihan] = useState(true);

  const { register, handleSubmit, reset, errors, setValue } = useForm();

  useEffect(() => {
    let ambil = true;

    async function fetchData() {
      const res = await link.get("/kategori");

      if (ambil) {
        setKategori(res.data);
      }
    }

    fetchData();

    return () => {
      ambil = false;
    };
  }, [kategori]);

  function simpan(data) {
    const formData = new FormData();
    formData.append("idkategori", data.idkategori);
    formData.append("menu", data.menu);
    formData.append("harga", data.harga);
    formData.append("gambar", data.gambar[0]);

    if (pilihan) {
      link.post("/menu", formData).then((res) => setPesan(res.data.pesan));
    } else {
      link
        .post("/menu/" + idmenu, formData)
        .then((res) => setPesan(res.data.pesan));
      setPilihan(true);
    }

    reset();
  }

  async function showData(id) {
    const res = await link.get("/menu/" + id);

    setValue("menu", res.data[0].menu);
    setValue("harga", res.data[0].harga);

    setGambar(<img src={res.data[0].gambar} height="180" alt="" />);
    setIdkategori(res.data[0].idkategori);
    setIdmenu(res.data[0].idmenu);
    setPilihan(false);
  }

  let no = 1;

  return (
    <div>
      <div className="row">
        <h4>Data Menu</h4>
      </div>

      <div className="row">
        <div>
          <p>{pesan}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSubmit(simpan)}>
            <div className="mb-3">
              <label htmlFor="kategori" className="form-label">
                Kategori
              </label>
              <select name="idkategori" ref={register} className="form-control">
                {kategori.map((val, index) =>
                  val.idkategori === idkategori ? (
                    <option key={index} selected value={val.idkategori}>
                      {val.kategori}
                    </option>
                  ) : (
                    <option key={index} value={val.idkategori}>
                      {val.kategori}
                    </option>
                  )
                )}
              </select>
              {errors.kategori && "Kategori wajib diisi*"}
            </div>

            <div className="mb-3">
              <label htmlFor="menu" className="form-label">
                Menu
              </label>
              <input
                type="text"
                className="form-control"
                name="menu"
                placeholder="menu"
                ref={register({ required: true })}
              />
              {errors.kategori && "Kategori wajib diisi*"}
            </div>

            <div className="mb-3">
              <label htmlFor="harga" className="form-label">
                Harga
              </label>
              <input
                type="text"
                className="form-control"
                name="harga"
                placeholder="harga"
                ref={register}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gambar" className="form-label">
                Gambar
              </label>
              <input
                type="file"
                className="form-control"
                name="gambar"
                ref={register}
              />
            </div>

            <div className="mb-3">
              <input
                type="submit"
                className="btn btn-info btn-md"
                name="submit"
              />
            </div>
          </form>
        </div>
        <div className="col-5 ml-4 mt-5">{gambar}</div>
      </div>

      <div className="row">
        <table className="table mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Kategori</th>
              <th>Menu</th>
              <th>Gambar</th>
              <th>Harga</th>
              <th>Hapus</th>
              <th>Ubah</th>
            </tr>
          </thead>

          <tbody>
            {isi.map((val, index) => (
              <tr key={index}>
                <td>{no++}</td>
                <td>{val.kategori}</td>
                <td>{val.menu}</td>
                <td>
                  <img src={val.gambar} height="150" alt="" />
                </td>
                <td>{val.harga}</td>
                <td>
                  <button
                    className="btn btn-danger btn-md"
                    onClick={() => hapus(val.idmenu)}
                  >
                    Hapus
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-md"
                    onClick={() => showData(val.idmenu)}
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

export default Menu;
