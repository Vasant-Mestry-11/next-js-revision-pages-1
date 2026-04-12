"use server";

// server functions

import { revalidatePath } from "next/cache";
import { deleteContact } from "../api/contact";

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
