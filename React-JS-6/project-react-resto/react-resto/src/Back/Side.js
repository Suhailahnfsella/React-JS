import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Side = () => {
 const { url, path } = useRouteMatch();

 return (
  <div>
   <div className="card" style={{ width: "18rem" }}>
    <div>
     <div className="card-header">Menu Aplikasi</div>
     <ul className="list-group list-group-flush">
      <Link to={`${url}/kategori`}>
       <li className="list-group-item">Kategori</li>
      </Link>
      <Link to={`${url}/menu`}>
       <li className="list-group-item">Menu</li>
      </Link>
      <Link to={`${url}/pelanggan`}>
       <li className="list-group-item">Pelanggan</li>
      </Link>
      <Link to={`${url}/order`}>
       <li className="list-group-item">Order</li>
      </Link>
      <Link to={`${url}/detail`}>
       <li className="list-group-item">Order Detail</li>
      </Link>
      <Link to={`${url}/user`}>
       <li className="list-group-item">User Admin</li>
      </Link>
     </ul>
    </div>
   </div>
  </div>
 );
};

export default Side;
