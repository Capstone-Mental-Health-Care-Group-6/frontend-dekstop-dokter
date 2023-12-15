import React, { useState, useContext } from "react";
import './RegisProfilSingkat.styles.css'
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import BackButton from "../../components/elements/Button/BackButton";
import RadioButton from "../../components/elements/RadioButton/RadioButton";
import InputSelect from "../../components/elements/Input/InputSelect";
import Input from "../../components/elements/Input/Input";
import { MyContext } from "../../context/ProfileDoctorContext";

const RegisProfilSingkat = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        doctor_expertise: [],
        doctor_description: "",
        workday_id: "",
        start_time: "",   
        end_time: "",  
    });
    
    const { dataDoctor, setDataDoctor } = useContext(MyContext);

    console.log(dataDoctor)

    const [errorMessages, setErrorMessages] = useState({
        doctor_expertise: "",
        doctor_description: "",
        workday_id: "",
        start_time: "",
        end_time: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        console.log(`Name: ${name}, Value: ${value}`);
    
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleRadioChange = (event) => {
        console.log("Radio Event:", event);
        const { name, value } = event.target;
        
        console.log(`Radio - Name: ${name}, Value: ${value}`);
        
        setFormData((prevData) => ({
            ...prevData,
            doctor_expertise: [value],
        }));
    };
      
      const handleCreateProfile = async (e) => {
        e.preventDefault();

        const newErrorMessages = {
            doctor_expertise: formData.doctor_expertise.length === 0 ? "Pilih satu keahlian" : "",
            doctor_description: !formData.doctor_description ? "Tentang Anda wajib diisi" : "",
            workday_id: formData.workday_id.length === 0 ? "Pilih satu jadwal" : "",
            start_time: formData.start_time.length === 0 ? "Pilih jam kerja awal" : "",
            end_time: formData.end_time.length === 0 ? "Pilih jam kerja akhir" : "",
        };
        
          setErrorMessages(newErrorMessages);
        
          if (
            Object.values(newErrorMessages).some((error) => error !== "") ||
            Object.values(formData).some((value) => value === "")
          ) {
            return;
          }

        const updatedFormData = { ...formData };
        setDataDoctor([...dataDoctor, updatedFormData]);
        setFormData({
            doctor_expertise: [],
            doctor_description: "",
            workday_id: "",
            start_time: "",   
            end_time: "", 
        });

        onSubmit();
        // window.location.href = "/dokter/dashboard";
        
      };      

    return (
        <div className="regis-profil-singkat">
            <div className="container">
                <BackButton location={'/dokter/regis/pengalaman'} />
                <div className="step-regis">
                    <h4>5 / 5</h4>
                </div> 
                <form className="profil-singkat-form">
                    <h4 className="profil-singkat-title">Profil Psikolog</h4>

                    <div className="row">
                        <div className="col-md-6">
                            <Label htmlFor="doctor_expertise">Keahlian</Label>
                              <div className="form-check-keahlian">
                                <div className="checkbox-inline">
                                    <RadioButton 
                                        value="1" 
                                        text="Pekerjaan" 
                                        onChange={handleRadioChange} 
                                    />
                                </div>
                                <div className="checkbox-inline">
                                    <RadioButton 
                                        value="5" 
                                        text="Keluarga" 
                                        onChange={handleRadioChange}
                                    />
                                </div>
                                <div className="checkbox-inline">
                                    <RadioButton 
                                        value="2" 
                                        text="Kecanduan" 
                                        onChange={handleRadioChange}
                                    />
                                </div>
                                <div className="checkbox-inline">
                                    <RadioButton 
                                        value="6" 
                                            text="Sosial" 
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="3" 
                                            text="Percintaan" 
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="7" 
                                            text="Kesepian" 
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="4" 
                                            text="Pendidikan" 
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    <div className="checkbox-inline">
                                        <RadioButton 
                                            value="8" 
                                            text="Kendali Emosi" 
                                            onChange={handleRadioChange}
                                        />
                                    </div>
                                    {errorMessages.doctor_expertise && (
                                        <div className="invalid-feedback">{errorMessages.doctor_expertise}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-10">
                                <Label htmlFor="doctor_description">Tentang Anda</Label>
                                <textarea
                                    className={`form-control ${errorMessages.doctor_description ? "is-invalid" : ""}`}
                                    id="doctor_description"
                                    name="doctor_description"
                                    value={formData.doctor_description}
                                    onChange={handleInputChange}
                                />
                                {errorMessages.doctor_description && (
                                    <div className="invalid-feedback">{errorMessages.doctor_description}</div>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Label htmlFor="workday_id">Pilih Jadwal</Label>
                                <InputSelect 
                                    className={`form-select ${errorMessages.workday_id ? "is-invalid" : ""}`}
                                    id="workday_id"
                                    name="workday_id"
                                    title="Hari"
                                    options={[
                                        { value: 1, label: "Minggu" },
                                        { value: 2, label: "Senin" },
                                        { value: 3, label: "Selasa" },
                                        { value: 4, label: "Rabu" },
                                        { value: 5, label: "Kamis" },
                                        { value: 6, label: "Jumat" },
                                        { value: 7, label: "Sabtu" },
                                      ]}                                    
                                    value={formData.workday_id}
                                    onChange={handleInputChange}
                                />
                                {errorMessages.workday_id && (
                                    <div className="invalid-feedback">{errorMessages.workday_id}</div>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Label htmlFor="start_time">Jam Kerja Awal</Label>
                                <Input
                                    type="time" 
                                    className={`form-select ${errorMessages.start_time ? "is-invalid" : ""}`}
                                    id="start_time"
                                    name="start_time"
                                    value={formData.start_time}
                                    onChange={handleInputChange}
                                />
                                {errorMessages.start_time && (
                                    <div className="invalid-feedback">{errorMessages.start_time}</div>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Label htmlFor="end_time">Jam Kerja Akhir</Label>
                                <Input
                                    type="time" 
                                    className={`form-select ${errorMessages.end_time ? "is-invalid" : ""}`}
                                    id="end_time"
                                    name="end_time"
                                    value={formData.end_time}
                                    onChange={handleInputChange}
                                />
                                {errorMessages.end_time && (
                                    <div className="invalid-feedback">{errorMessages.end_time}</div>
                                )}
                            </div>
                        </div>
                    </form>

                    <div className="button-container d-flex justify-content-center">
                    <Button
                        type="button"
                        className="btn btn-primary"
                        text="Selanjutnya"
                        onClick={(e) => handleCreateProfile(e)}
                    />
                    </div>
                </div>
            </div>
    );
};

export default RegisProfilSingkat;
