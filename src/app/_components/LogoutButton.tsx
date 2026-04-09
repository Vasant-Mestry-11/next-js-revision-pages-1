"use client";

import { redirect, useRouter } from "next/navigation";
import { logoutAction } from "../actions/auth";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutAction();

      // redirect
      // client side fallback

      // redirect('/login')
      router.push("/login");
      router.refresh()
    } catch (error) {
      console.log("Log out failed", error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer"
    >
      Log out
    </button>
  );
};

export default LogoutButton;
