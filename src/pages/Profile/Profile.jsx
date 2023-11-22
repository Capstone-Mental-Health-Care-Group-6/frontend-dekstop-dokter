import React from "react";
import Layouts from "../../components/layouts/Layouts";
import CardProfile from "../../components/fragments/Card/CardProfile"; 
import CardList from "../../components/fragments/Card/CardList";

const Profile = () => {
  const titleProfile = "Your Card Title";
  const textProfile = "Your card text goes here.";

  return (
    <Layouts>
      <div className="row">
        <div className="col md-6">
          <CardProfile titleProfile={titleProfile} textProfile={textProfile} />
        </div>
        <div>
          <h2>Lihat / Edit Profile</h2>
          <CardList to="/dokter-data-pribadi" iconClass="./src/assets/account circle.png" list="Data Pribadi" />
          <CardList to="/dokter-data-akademik" iconClass="./src/assets/account balance.png" list="Data Akademik" />
          <CardList to="/dokter-dokumen" iconClass="./src/assets/archive.png" list="Dokumen" />
          <CardList to="/dokter-pengalaman" iconClass="./src/assets/local library.png" list="Pengalaman" />
        </div>  
      </div>
    </Layouts>
  );
};

export default Profile;
