import React, { useEffect, useState } from "react";
import { link } from "../Axios/link";

const Kategori = () => {
  const [isi, setIsi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await link.get("/kategori");
      console.log(request);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h4>Menu Kategori</h4>
    </div>
  );
};

export default Kategori;
