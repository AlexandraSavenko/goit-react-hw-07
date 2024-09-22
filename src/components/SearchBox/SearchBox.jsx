import { useDispatch, useSelector } from "react-redux";
import { setFilteredContacts } from "../../redux/filtersSlice";
import { filteredContacts } from "../../redux/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(filteredContacts);

  const handleFilterChange = (e) =>
    dispatch(setFilteredContacts(e.target.value));
  return (
    <div className={css.wrap}>
      <p>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
