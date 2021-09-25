import useStore from "../store";
import DetailsCard from "./DetailsCard";
import NoData from "./NoData";
const Details = () => {
  const userData = useStore((state) => state.userData);

  return (
    <>
      <div className="flex justify-center items-center h-screen -mt-20">
        {userData ? <DetailsCard /> : <NoData />}
      </div>
    </>
  );
};

export default Details;
