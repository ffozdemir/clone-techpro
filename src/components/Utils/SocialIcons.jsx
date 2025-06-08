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
  return (
    <>
      <FaWhatsapp style={{ color: { color }, fontSize: { fontSize } }} />
      <FaTelegram style={{ color: { color }, fontSize: { fontSize } }} />
      <FaYoutube style={{ color: { color }, fontSize: { fontSize } }} />
      <FaInstagram style={{ color: { color }, fontSize: { fontSize } }} />
      <FaFacebook style={{ color: { color }, fontSize: { fontSize } }} />
      <FaXTwitter style={{ color: { color }, fontSize: { fontSize } }} />
      <FaLinkedin style={{ color: { color }, fontSize: { fontSize } }} />
    </>
  );
};
