"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

export const LogInLogOutButton = () => {
 const { data: session, status } = useSession();

 if (status === "loading") {
  return (
   <button
    type="button"
    className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 hover:text-gray-800 transition-colors"
    disabled
   >
    <IoShieldOutline />
    <span>Wait...</span>
   </button>
  );
 }

 if (status === "unauthenticated") {
  return (
   <button
    onClick={() => signIn()}
    type="button"
    className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 hover:text-gray-800 transition-colors"
   >
    <CiLogin />
    <span>Login</span>
   </button>
  );
 }

 return (
  <button
   onClick={() => signOut()}
   type="button"
   className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 hover:text-gray-800 transition-colors"
  >
   <CiLogout />
   <span>Logout</span>
  </button>
 );
};
