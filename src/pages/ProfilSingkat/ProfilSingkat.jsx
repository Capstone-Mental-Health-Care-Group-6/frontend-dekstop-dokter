import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import './ProfilSingkat.styles.css'
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import BackButton from "../../components/elements/Button/BackButton";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";
import Checkbox from "../../components/elements/Checkbox/Checkbox";

const ProfilSingkat = () => {
    const [formData, setFormData] = useState({
        // keahlian: "",
        tentangAnda: "",
        // jadwal: "",
    })
  
    const [showProfileModal, setShowProfileModal] = useState(false); 
  
    const [errorMessages, setErrorMessages] = useState({
        // keahlian: "",
        tentangAnda: "",
        // jadwal: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
  
    const handleSubmitClick = () => {
        const newErrorMessages = {
        //   keahlian: !formData.keahlian ? "Keahlian wajib dipilih" : "",
          tentangAnda: !formData.tentangAnda ? "Tentang anda wajib diisi" : "",
        //   jadwal: !formData.jadwal ? "Jadwal wajib dipilih" : "",
        };
      
        setErrorMessages(newErrorMessages);
      
        if (!formData.tentangAnda) {
          return;
        }
      
        setShowProfileModal(true);
      };
  
    const handleSubmitConfirm = () => {
      setShowProfileModal(false);
    };
  
    const handleSubmitCancel = () => {
      setShowProfileModal(false);
    };

    return (
        <Layouts>
            <div className="profil-singkat">
                <BackButton location={'/dokter/profile'} />
                <div className="container">
                    <form className="profil-singkat-form">
                        <h4 className="profil-singkat-title">Profil Psikolog</h4>

                        <div className="row">
                            <div className="col-md-6">
                                <Label htmlFor="keahlian">Keahlian</Label>
                                <div className="form-check-keahlian">
                                    <div className="checkbox-inline">
                                        <Checkbox text="Pekerjaan" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Keluarga" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Kecanduan" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Sosial" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Percintaan" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Kesepian" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Pendidikan" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Kendali Emosi" />
                                    </div>
                                    {errorMessages.keahlian && (
                                        <div className="invalid-feedback">{errorMessages.keahlian}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-10">
                                <Label htmlFor="tentangAnda">Tentang Anda</Label>
                                <Input
                                    type="text"
                                    className={`form-control ${errorMessages.tentangAnda ? "is-invalid" : ""}`}
                                    id="tentangAnda"
                                    name="tentangAnda"
                                    value={formData.tentangAnda}
                                    onChange={handleInputChange}
                                />
                                {errorMessages.tentangAnda && (
                                    <div className="invalid-feedback">{errorMessages.tentangAnda}</div>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Label htmlFor="jadwal">Pilih Jadwal</Label>
                                <div className="form-check-jadwal">
                                    <div className="checkbox-inline">
                                        <Checkbox text="Pilihan 1"/>                      
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Pilihan 2"/>
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Pilihan 3"/>
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Pilihan 4"/>
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Pilihan 5"/>
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox text="Pilihan 6"/>
                                    </div>
                                    {errorMessages.jadwal && (
                                        <div className="invalid-feedback">{errorMessages.jadwal}</div>
                                     )}
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="button-container d-flex justify-content-center mb-3">
                        <Button
                            type="button"
                            className="btn btn-primary"
                            text="Simpan Perubahan"
                            onClick={handleSubmitClick}
                        />
                    </div>
                    <ModalProfile
                        show={showProfileModal}
                        title="Profile"
                        onClose={handleSubmitCancel}
                        onSubmit={handleSubmitConfirm}
                    />
                </div>
            </div>
        </Layouts>
    );
};

export default ProfilSingkat;
