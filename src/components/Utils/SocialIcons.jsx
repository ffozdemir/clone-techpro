import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialIcons = ({ color = "white", fontSize = "18px" }) => {
  const iconStyle = {
    color: color,
    fontSize: fontSize,
  };
  return (
    <>
      <FaWhatsapp style={iconStyle} />
      <FaTelegram style={iconStyle} />
      <FaYoutube style={iconStyle} />
      <FaInstagram style={iconStyle} />
      <FaFacebook style={iconStyle} />
      <FaXTwitter style={iconStyle} />
      <FaLinkedin style={iconStyle} />
    </>
  );
};
