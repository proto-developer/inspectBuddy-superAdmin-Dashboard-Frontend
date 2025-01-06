import Image from "next/image";
import React from "react";

const AuthNavbar = () => {
  return (
    <nav className="sm:h-[100px] h-[75px] border-b-[1.5px] border-lightBlue flex items-center px-[32px] py-[16px]">
      <Image
        width={218.46}
        height={48}
        src="/logo.svg"
        alt="inspect-buddy-logo"
      />
    </nav>
  );
};

export default AuthNavbar;
