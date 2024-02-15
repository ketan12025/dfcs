import { useEffect, useState } from "react";
import "./App.css";
import { getUsersApi } from "./adapters/user.adapter";
import debounce from "./utils/debounce.util";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

function App() {
  let [admins, setAdmins] = useState([]);
  let [members, setMembers] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [searchValue, setSearchValue] = useState("");

  async function fetchUsers() {
    let users = await getUsersApi();
    setAdmins(users.filter((e) => e.role == "admin").slice(0, 11));
    setMembers(users.filter((e) => e.role == "member"));
  }

  async function searchUsers(searchTerm) {
    let users = await getUsersApi();
    if (searchTerm?.length) {
      users = users.filter((e) =>
        e.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setAdmins(users.filter((e) => e.role == "admin").slice(0, 11));
    setMembers(users.filter((e) => e.role == "member"));
  }

  useEffect(function () {
    fetchUsers();
    setIsLoading(false);
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
    let debouncedFetchUser = debounce(searchUsers, 300);
    debouncedFetchUser(searchTerm);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header handleSearch={handleSearch} searchValue={searchValue} />
          <Hero admins={admins} members={members} />
          <div className="add-item-button"> + </div>
        </>
      )}
    </div>
  );
}

export default App;
