import Link from "next/link";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";
import ContactList from "../_components/ContactList";

const ContactPage = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div>
        Please{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          login{" "}
        </Link>
        to view contacts
      </div>
    );
  }
  const contacts = await getContacts(user.id);

  console.log(contacts);

  if (!contacts || contacts.length === 0) {
    return (
      <div>
        Please{" "}
        <Link href="/contact/new" className="text-blue-600 hover:underline">
          Add a contact{" "}
        </Link>
        to your contact list
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1>Your Contacts</h1>
        <Link
          href="/contact/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Add Contact
        </Link>
      </div>

      <ContactList />
    </div>
  );
};

export default ContactPage;
