"use server";

// server functions

import { revalidatePath } from "next/cache";
import { createContact, deleteContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  if (!formData) {
    return {
      error: "Contact data is missing",
    };
  }

  const user = await getSession();

  const newContact: ContactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };

  try {
    await createContact(newContact);
    revalidatePath("/contact");

    return {
      success: true,
    };
  } catch (error) {
    console.log("Error in creating contact: ", error);
    return {
      error: "Failed to create the contact",
    };
  }
};

export const updateContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {};

export const deleteContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const id = formData.get("id") as string;
  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error in deleting contact: ", error);
    return {
      error: "Failed to delete the contact",
    };
  }
};
