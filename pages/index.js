import { useEffect } from "react";
import Header from "../components/Header";
import Details from "../components/Details";
import useStore from "../store";
import { isMobile } from "react-device-detect";

const App = () => {
  if (isMobile) {
    return (
      <div className="h-screen w-screen flex justify-center items-center text-center">
        <p className="font-bold text-5xl">
          This site isn't available mobile devices. A tablet or a device bigger
          than that is required.
        </p>
      </div>
    );
  }

  const setUser = useStore((store) => store.setUser);
  useEffect(() => {
    let userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  });
  return (
    <div className="bg-gray-200">
      <Header />
      <Details />
    </div>
  );
};

export default App;
