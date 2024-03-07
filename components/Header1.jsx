"use client";
import Image from "next/image";
import React, { useEffect, useReducer, useState } from "react";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);

  const router = useReducer();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-28 px-10">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className="h-full flex">
        <Block title={"Become a Member"} para={"Additional 10% off on stays"} />
        <Block title={"OYO for Business"} para={"Trusted by 5000 Corporates"} />
        <Block title={"List Your Property"} para={"Start Earning in 30 min"} />
        <Block title={"0124-6201611"} para={"Call us to Book now"} />
        <div className="flex items-center px-3">
          <Image
            src={"/demo.svg"}
            alt="logo"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-5"
          />
          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              LogOut
            </h3>
          ) : (
            <Link href={"/login"}>
              <h3 className="font-bold">Login / Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
