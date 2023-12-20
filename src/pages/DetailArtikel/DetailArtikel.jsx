import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import { useParams } from "react-router-dom";
import { dataArtikel } from "../Artikel/dataArtikel";
import parse from "html-react-parser";
import { getAllArticle } from "../../service/article";
import "./DetailArtikel.style.css";
import { useLogin } from "../../hooks/useLogin";

const DetailArtikel = () => {
  useLogin();
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(false);

  // buat narik param
  const params = useParams();
  const id = params.id;

  // buat filter data by params
  const selectArtikel = (id) => {
    return artikel.filter((item) => item.id == id);
  };

// buat parsing html tag to content
  const parseData = (dataParam) => {
    const data = dataParam;
    return parse(String(data));
  };

  useEffect(() => {
    setLoading(true);
    getAllArticle((res) => {
      setArtikel(res.data);
    });
    setLoading(false);
  }, []);

  const selectedArtikel = (id) => {
    return artikel.filter((d) => d.id == id);
  };

  const YoutubeEmbed = ({ embedUrl }) => {
    return (
      <div className="youtube-embed-container">
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  };


  return (
    <Layouts>
      <div
        style={{ backgroundColor: "white" }}
        className=" p-4 rounded-3 w-100"
      >
        {!loading ? (
          selectArtikel(id).length > 0 ? (
            <div className=" m-4">
              <h3 className="fw-bold">{selectedArtikel(id)[0].title}</h3>
              <div className=" details d-flex my-4  ">
                <div className="me-2 kategori-div ">
                  <div className="d-inline-block">
                    <div className="kategori-div-template-detail">
                      <p className="kategori-text-template-detail m-0">
                        {selectedArtikel(id)[0].category_name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="author-div mx-2 d-flex align-items-center">
                  <p className="subtitle-text ">
                    Ditinjau oleh {selectedArtikel(id)[0].user_name}
                  </p>
                </div>
                <div className="tanggal-div  d-flex align-items-center ">
                  <p className="subtitle-text ps-2"> {artikel.tanggal} </p>
                </div>
              </div>
              <img
                className="w-100"
                src={selectedArtikel(id)[0].thumbnail}
                alt={`gambar-${selectedArtikel(id)[0].title}`}
              />
              <div className="my-5 ">
                {parseData(selectedArtikel(id)[0].content)}
              </div>
              <div>
                <YoutubeEmbed
                  embedUrl={
                    "https://www.youtube.com/embed/DxIDKZHW3-E?si=6sy-iwJDpqIBHGLA"
                  }
                />
              </div>
            </div>
          ) : (
            <div></div>
          )
        ) : (
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </Layouts>
  );
};

export default DetailArtikel;
