import React from "react";
import { SiMedium, SiStackoverflow, SiGithub } from "react-icons/si";
function Footer({}) {
  return (
    <footer className="footer items-center p-4 px-4 bg-base-200 md:px-8">
      <div className="order-2 grid-flow-col items-center justify-self-center md:order-1 md:justify-self-start">
        <p>Copyright © 2023</p>
      </div>
      <div className="order-1 grid-flow-col gap-8 justify-self-center md:order-2 md:place-self-center md:justify-self-end">
        <a
          href="https://stackoverflow.com/users/4387975/niraj-niroula"
          target="_blank"
        >
          <SiStackoverflow size={18} />
        </a>
        <a href="https://github.com/nirajniroula" target="_blank">
          <SiGithub size={18} />
        </a>
        <a href="https://medium.com/@niniroula" target="_blank">
          <SiMedium size={18} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
