import React from "react";
import { useState } from "react";
// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";
import User from "layouts/User.js";

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

          <button onClick={changeProfileEdit}>Edit</button>
        </div>
      </div>
    </>
  );
}

Settings.layout = User;
