import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { useEffect } from "react";

function App() {
  const loading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // const { fetchTasks } = useSelector(selectContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <SearchBox />
      {loading && <p>Loading</p>}
      {error && <p>Sorry, something went wrong</p>}
      <ContactList />
    </div>
  );
}

export default App;
