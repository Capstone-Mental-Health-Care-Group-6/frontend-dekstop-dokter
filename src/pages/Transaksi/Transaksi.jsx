import React from "react";
import "./Transaksi.style.css";
import Layouts from "../../components/layouts/Layouts";
import TableTransaksi from "../../components/fragments/TableTransaksi/TableTransaksi";
// import { transaksiUsers } from "../../components/DataComponents/dataComponents";
import Search from "../../components/elements/Search/Search";
import Filter from "../../components/elements/Filter/Filter";
import { useState, useEffect } from "react";
import { allDataTransaction } from "../../service/transaction";
import Skeleton from "react-loading-skeleton";

const Transaksi = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortById, setSortById] = useState(false);
  // const [filteredData, setFilteredData] = useState(transaksiUsers);
  const [transaksiData, setTransaksiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    allDataTransaction((data) => {
      setTransaksiData(data.data);
      setLoading(false);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFilterClick = () => {
    setSortById(!sortById);
  };

  useEffect(() => {
    let dataToDisplay = transaksiData.filter((item) =>
      Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchValue.toLowerCase())
      )
    );

    if (sortById) {
      dataToDisplay = dataToDisplay.sort((a, b) =>
        a.transaction_id.localeCompare(b.transaction_id, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      );
    }

    setTransaksiData(dataToDisplay);
  }, [searchValue, sortById]);

  return (
    <Layouts>
      <section className="section-transaksi">
        <div className="row header">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <h4 className="h4-title">Riwayat Transaksi</h4>
          </div>
          <div className="col-sm-0 col-md-0 col-lg-2">{/*  */}</div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <Search
              size={20}
              placeholder={"Search"}
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Filter
              size={20}
              placeholder={"Urut Berdasarakan ID"}
              onClick={handleFilterClick}
            />
          </div>
        </div>

        <div className="row table-transaksi">
          <div className="col">
            {!loading ? (
              <TableTransaksi data={transaksiData} searchValue={searchValue} />
            ) : (
              <Skeleton height={60} count={6} />
            )}
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Transaksi;
