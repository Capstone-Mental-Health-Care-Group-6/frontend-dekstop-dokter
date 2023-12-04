import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import BackButton from "../../components/elements/Button/BackButton";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";
import Checkbox from "../../components/elements/Checkbox/Checkbox";

const ProfilSingkat = () => {
    return (
        <Layouts>
            <div className="profil-singkat">
                <BackButton location={'/dokter-profile'} />
                <div className="container">
                    <form className="profil-singkat-form">
                        <h4 className="profil-singkat-title">Profil Singkat</h4>

                        <div className="row">
                            <div className="col-md-6">
                                <Label htmlFor="keahlian">Keahlian</Label>
                                <Checkbox text="Pekerjaan"/>
                                <Checkbox text="Kecanduan"/>
                                <Checkbox text="Percintaan"/>
                                <Checkbox text="Pendidikan"/>
                                <Checkbox text="Keluarga"/>
                                <Checkbox text="Sosial"/>
                                <Checkbox text="Kesepian"/>
                                <Checkbox text="Kendali Emosi"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Label htmlFor="tentangAnda">Tentang Anda</Label>
                                <Input
                                    type="text"
                                    // className={`form-control mb-2 ${errorMessages.asalUniversitas ? "is-invalid" : ""}`}
                                    id="tentangAnda"
                                    name="tentangAnda"
                                    // value={data.asalUniversitas}
                                    // onChange={(e) => handleInputChange(index, e)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Label htmlFor="jadwal">Pilih Jadwal</Label>
                                <Checkbox text="Pilihan 1"/>
                                <Checkbox text="Pilihan 2"/>
                                <Checkbox text="Pilihan 3"/>
                                <Checkbox text="Pilihan 4"/>
                                <Checkbox text="Pilihan 5"/>
                                <Checkbox text="Pilihan 6"/>
                            </div>
                        </div>

                        <div className="button-container d-flex justify-content-center mb-3">
                            <Button
                                type="button"
                                className="btn btn-primary"
                                text="Simpan Perubahan"
                                // onClick={handleSubmitClick}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Layouts>
    );
};

export default ProfilSingkat;
