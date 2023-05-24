import React from "react";
import { SiWakatime, SiStackoverflow, SiGithub } from "react-icons/si";
function Footer({}) {
  return (
    <footer className="footer items-center bg-secondary p-4 px-4 text-secondary-content md:px-8 opacity-70">
      <div className="grid-flow-col items-center">
        <p>Copyright © 2023</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://stackoverflow.com/users/4387975/niraj-niroula"
          target="_blank"
        >
          <SiStackoverflow size={18} />
        </a>
        <a href="https://github.com/nirajniroula" target="_blank">
          <SiGithub size={18} />
        </a>
        <a href="https://wakatime.com/@niniroula" target="_blank">
          <SiWakatime size={18} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
