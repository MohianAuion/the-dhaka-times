import React from "react";
import SocialLogin from "../../SocialLogin/SocialLogin";
import FindUs from "../../FindUs/FindUs";
import QZone from "../../QZone/QZone";

const Rightbar = () => {
  return (
    <aside className="w-full space-y-6">
      <SocialLogin />
      <FindUs />
      <QZone />
    </aside>
  );
};

export default Rightbar;