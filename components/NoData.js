const NoData = () => {
  return (
    <div className="rounded-xl h-4/6 w-4/6 bg-white drop-shadow-lg flex flex-col justify-evenly items-center p-8 text-center">
      <p className="text-6xl font-bold">No user selected</p>
      <p className="text-4xl">
        Please enter a github username in search bar given and click go button
        that shows up.
      </p>
    </div>
  );
};

export default NoData;
