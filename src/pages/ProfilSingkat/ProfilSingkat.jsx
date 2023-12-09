import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import './ProfilSingkat.styles.css'
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
    
        console.log(`Name: ${name}, Value: ${value}`);
    
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
    
        console.log(`Checkbox - Name: ${name}, Value: ${value}, Checked: ${checked}`);
    
        setFormData((prevData) => ({
            ...prevData,
            keahlian: checked
                ? [...prevData.keahlian, value]
                : prevData.keahlian.filter((item) => item !== value),
        }));
    };
    
    const handleRadioChange = (event) => {
        console.log("Radio Event:", event);
        const { name, value } = event.target;
        
        console.log(`Radio - Name: ${name}, Value: ${value}`);
        
        setFormData((prevData) => ({
            ...prevData,
            jadwal: [value],
        }));
    };
  
    const handleSubmitClick = () => {
        const newErrorMessages = {
            keahlian: formData.keahlian.length === 0 ? "" : "",
            tentangAnda: !formData.tentangAnda ? "Seluruh data wajib diisi" : "",
            jadwal: formData.jadwal.length === 0 ? "" : "",
        };
    
        setErrorMessages(newErrorMessages);
    
        if (!formData.tentangAnda || formData.keahlian.length === 0 || formData.jadwal.length === 0) {
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
                                        <Checkbox 
                                            value="Pekerjaan" 
                                            text="Pekerjaan" 
                                            onChange={handleCheckboxChange} 
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox 
                                            value="Keluarga" 
                                            text="Keluarga" 
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox 
                                            value="Kecanduan" 
                                            text="Kecanduan" 
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox 
                                            value="Sosial" 
                                            text="Sosial" 
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox 
                                            value="Percintaan" 
                                            text="Percintaan" 
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox 
                                            value="Kesepian" 
                                            text="Kesepian" 
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox 
                                            value="Pendidikan" 
                                            text="Pendidikan" 
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <Checkbox 
                                            value="Kendali Emosi" 
                                            text="Kendali Emosi" 
                                            onChange={handleCheckboxChange}
                                        />
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
                                <textarea
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
                                        <RadioButton 
                                            value="Senin, Rabu, Jumat 08.00 WIB - 12.00 WIB" 
                                            text="Pilihan 1" 
                                            deskripsi="Senin, Rabu, Jumat 08.00 WIB - 12.00 WIB"
                                            onChange={handleRadioChange}
                                        />                      
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="Selasa, Kamis, Sabtu 08.00 WIB - 12.00 WIB" 
                                            text="Pilihan 4" 
                                            deskripsi="Selasa, Kamis, Sabtu 08.00 WIB - 12.00 WIB"
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="Senin, Rabu, Jumat 10.00 WIB - 14.00 WIB" 
                                            text="Pilihan 2" 
                                            deskripsi="Senin, Rabu, Jumat 10.00 WIB - 14.00 WIB"
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="Selasa, Kamis, Sabtu 10.00 WIB - 14.00 WIB" 
                                            text="Pilihan 5" 
                                            deskripsi="Selasa, Kamis, Sabtu 10.00 WIB - 14.00 WIB"
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="Senin, Rabu, Jumat 14.00 WIB - 18.00 WIB" 
                                            text="Pilihan 3" 
                                            deskripsi="Senin, Rabu, Jumat 14.00 WIB - 18.00 WIB"
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="Selasa, Kamis, Sabtu 14.00 WIB - 18.00 WIB" 
                                            text="Pilihan 6" 
                                            deskripsi="Selasa, Kamis, Sabtu 14.00 WIB - 18.00 WIB"
                                            onChange={handleRadioChange}
                                        />
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
