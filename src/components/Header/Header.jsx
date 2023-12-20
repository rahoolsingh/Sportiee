import React from "react";

function Header() {
  return (
    <div className="w-full p-5 text-white bg-[#1b1f23] ">
      <div className="font-bold text-2xl container max-w-7xl m-auto flex justify-between">
        <div className="w-full text-left">
          Sportiee{" "}
          <span className="text-xs text-zinc-500 hidden lg:inline">
            DASHBOARD
          </span>
        </div>
        <div className="w-full text-center text-zinc-400 hidden lg:inline md:inline">
          ANC
        </div>
        <div className="w-full text-right text-base gap-3 flex justify-end pt-3">
          <span className="align-top text-xs hidden lg:inline md:inline">Connect me</span>
          <a
            className="fa-brands fa-linkedin align-bottom"
            href="https://linkedin.com/in/rahoolsingh"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className="fa-brands fa-github align-bottom"
            href="https://github.com/rahoolsingh"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className="fa-brands fa-instagram align-bottom"
            href="https://instagram.com/the_veer_rajpoot"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
