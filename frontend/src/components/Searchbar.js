import React from "react";

const Searchbar = ({ setCountry }) => {
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter country name"
        className="input input-bordered input-info w-full max-w-xs"
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
