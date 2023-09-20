import React from "react";
import { useState } from "react";
// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import User from "layouts/User.js";
import Admin from "layouts/Admin.js";
import UserDropdown from "components/Dropdowns/UserDropdown";
export default function Settings() {
  const [editProfile, setEditProfile] = useState(false);
  function changeProfileEdit() {
    setEditProfile(!editProfile);
  }

  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full  lg:w-8/12 px-4">
          {editProfile ? <CardSettings /> : <CardProfile />}
        </div>
      </div>
    </>
  );
}

Settings.layout = User;
