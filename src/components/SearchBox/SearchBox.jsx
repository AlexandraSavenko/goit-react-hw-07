import { useDispatch, useSelector } from "react-redux";
import { setFilteredContacts } from "../../redux/filtersSlice";
import { filteredContacts } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(filteredContacts);

  const handleFilterChange = (e) =>
    dispatch(setFilteredContacts(e.target.value));
  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}
