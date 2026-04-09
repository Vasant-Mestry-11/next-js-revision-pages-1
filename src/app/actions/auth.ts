"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/auth";

const API_URL = "http://localhost:3001/";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${email}&password=${password}`,
    );
    console.log(response.data);
    const user: UserType = await response.data[0];
    if (!user) throw new Error("Invalid Credentials");

    // set user in cookie
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Failed to login");
  }
  redirect(`/contact`);
};

export const logoutAction = async () => {
  redirect("/login");
};
