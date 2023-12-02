import React from "react";
import "./Transaksi.style.css"
import Layouts from "../../components/layouts/Layouts";
import TableTransaksi from "../../components/fragments/TableTransaksi/TableTransaksi";
import { transaksiUsers } from "../../components/DataComponents/dataComponents";
import Search from "../../components/elements/Search/Search";
import Filter from "../../components/elements/Filter/Filter";
import { useState } from "react";



const Transaksi = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <Layouts>
      <section className="section-transaksi">
        <div className="row header">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <h4 className="h4-title">Riwayat Transaksi</h4>
          </div>
          <div className="col-sm-0 col-md-0 col-lg-2">
            {/*  */}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <Search size={20} placeholder={"Search"} value={searchValue} onChange={handleSearchChange} />
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-4"
          >
            <Filter size={20} placeholder={"Urut Berdasarakan ID"} />
          </div>
        </div>

        <div className="row table-transaksi">
          <div className="col">
            <TableTransaksi
              data={transaksiUsers}
              searchValue={searchValue}
            />
          </div>
        </div>
      </section>

    </Layouts>
  );
};

export default Transaksi;
