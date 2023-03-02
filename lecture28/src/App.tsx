import { TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { SyntheticExpression } from "typescript";
import "./App.css";
import NameList from "./components/NameList";
import Searchbar from "./components/Searchbar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCaseQuery = e.target.value.toLowerCase();
    setSearchQuery(lowerCaseQuery);
  };
  return (
    <div className="App">
      {/* <Searchbar /> //to be refactored to enable searchQuery state in NameList using custom hook */}
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={handleChange}
        />
      </div>
      <NameList input={searchQuery} />
    </div>
  );
}

export default App;
