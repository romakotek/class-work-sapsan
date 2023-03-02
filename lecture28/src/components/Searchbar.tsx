import { TextField } from "@mui/material";
import { useState } from "react";

const names = [
  "Yerzhan",
  "Saule",
  "Saya",
  "Tayan",
  "Botagoz",
  "Azimzhan",
  "Nurbolat",
  "Vivienne",
  "Abigail",
];
const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCaseQuery = e.target.value.toLowerCase();
    setSearchQuery(lowerCaseQuery);
  };

  return (
    <>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </>
  );
};

export default Searchbar;
