import React from "react";
import Navigation from "../Navbar/Navigation";
import { Container } from "react-bootstrap";
import { CircleFlag } from "react-circle-flags";
import { IoPersonSharp } from "react-icons/io5";

import { SocialIcons } from "../Utils/SocialIcons";

export const Header = () => {
  return (
    <div>
      <Container fluid className="bg-primary p-2 text-white">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center gap-5 flex-wrap">
            <p className="mb-0">+1 587 330 79 59</p>
            <p className="mb-0">info@techproeducation.com</p>
            <p className="mb-0 d-none d-lg-block">
              Get trained in Mobile Testing with Appium at TechPro
            </p>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              <CircleFlag countryCode="tr" height="30" />
              <CircleFlag countryCode="de" height="30" />
              <IoPersonSharp style={{ color: "white", fontSize: "22px" }} />
            </div>

            <div className="d-flex align-items-center gap-4">
              <SocialIcons color="white" fontSize="22px" />
            </div>
          </div>
        </div>
      </Container>
      <Navigation />
    </div>
  );
};
