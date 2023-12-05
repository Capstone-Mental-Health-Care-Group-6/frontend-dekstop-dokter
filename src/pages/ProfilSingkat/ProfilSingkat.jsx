import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import './ProfilSingkat.styles.css'
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import BackButton from "../../components/elements/Button/BackButton";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";
import Checkbox from "../../components/elements/Checkbox/Checkbox";
import RadioButton from "../../components/elements/RadioButton/RadioButton";

const ProfilSingkat = () => {
    
    const [formData, setFormData] = useState({
        keahlian: [],
        tentangAnda: "",
        jadwal: [],
    })
  
    const [showProfileModal, setShowProfileModal] = useState(false); 
  
    const [errorMessages, setErrorMessages] = useState({
        keahlian: "",
        tentangAnda: "",
        jadwal: "",
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
            keahlian: formData.keahlian.length === 0 ? "Keahlian wajib dipilih" : "",
            tentangAnda: !formData.tentangAnda ? "Tentang anda wajib diisi" : "",
            jadwal: formData.jadwal.length === 0 ? "Jadwal wajib dipilih" : "",
        };
      
        setErrorMessages(newErrorMessages);
      
        if (!formData.tentangAnda ) {
          return;
        }
      
        setShowProfileModal(true);
      };
  
      const handleSubmitConfirm = () => {
        console.log("Data yang akan dikirim:", formData);
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
                                        <Checkbox value="Pekerjaan" text="Pekerjaan" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox value="Keluarga" text="Keluarga" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox value="Kecanduan" text="Kecanduan" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox value="Sosial" text="Sosial" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox value="Percintaan" text="Percintaan" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox value="Kesepian" text="Kesepian" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox value="Pendidikan" text="Pendidikan" />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox value="Kendali Emosi" text="Kendali Emosi" />
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
                                        <RadioButton text="Pilihan 1" deskripsi="Senin, Rabu, Jumat 08.00 WIB - 12.00 WIB"/>                      
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton text="Pilihan 4" deskripsi="Selasa, Kamis, Sabtu 08.00 WIB - 12.00 WIB"/>
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton text="Pilihan 2" deskripsi="Senin, Rabu, Jumat 10.00 WIB - 14.00 WIB"/>
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton text="Pilihan 5" deskripsi="Selasa, Kamis, Sabtu 10.00 WIB - 14.00 WIB"/>
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton text="Pilihan 3" deskripsi="Senin, Rabu, Jumat 14.00 WIB - 18.00 WIB"/>
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton text="Pilihan 6" deskripsi="Selasa, Kamis, Sabtu 14.00 WIB - 18.00 WIB"/>
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
