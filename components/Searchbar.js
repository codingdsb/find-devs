import { useState } from "react";
import useStore from "../store";
import axios from "axios";

const Searchbar = () => {
  const userData = useStore((state) => state.userData);
  const setUser = useStore((state) => state.setUser);
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${query}`)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("userData", JSON.stringify(res.data));
      })
      .catch((err) =>
        alert(
          "Something went wrong. Maybe you entered a non-existent username."
        )
      );
  }

  return (
    <div>
      <form className="flex flex-row md:justify-around items-center">
        <input
          type="text"
          placeholder="Search for a github username"
          className={"outline-none w-80 border-black border-2 p-2 rounded-full"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="submit"
            className=" bg-black h-10 w-14 flex justify-center rounded-full items-center shadow-2xl"
            onClick={(e) => handleSubmit(e)}
          >
            <p className="text-white text-xl">GO</p>
          </button>
        )}
      </form>
    </div>
  );
};

export default Searchbar;
