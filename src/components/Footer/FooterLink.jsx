import React from "react";

export const FooterLink = ({ title, href }) => {
  return (
    <a href={href} className="text-decoration-none text-light">
      {title}
    </a>
  );
};
