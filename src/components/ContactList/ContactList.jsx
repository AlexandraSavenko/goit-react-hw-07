import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { filteredContacts } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const phoneBook = useSelector(selectContacts);
  const filterValue = useSelector(filteredContacts);

  const visibleNumbers = phoneBook.filter((contact) => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });
  return (
    <ul>
      {visibleNumbers.length > 0
        ? visibleNumbers.map((contact) => {
            return (
              <li className={css.item} key={contact.id}>
                <Contact contacts={contact} />
              </li>
            );
          })
        : phoneBook.map((contact) => {
            return (
              <li className={css.item} key={contact.id}>
                <Contact contacts={contact} />
              </li>
            );
          })}
    </ul>
  );
}
