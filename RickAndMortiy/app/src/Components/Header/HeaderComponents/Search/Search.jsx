import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import { useInput } from "@mui/base";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
// Styles:
import styles from "./SearchStyles.jsx";

// ==========================================================================
const filter = createFilterOptions();

export default function Search({ fetchedData }) {
  const [value, setValue] = useState(null);
  return (
    <Box sx={styles.SearchContainer}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.name
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={fetchedData}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(props, option) => (
          <Link to={"#"} {...props}>
            {option.name}
          </Link>
        )}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField
            color="success"
            variant="filled"
            {...params}
            label="Enter name"
          />
        )}
      />
    </Box>
  );
}

Search.defaultProps = {
    fetchedData: [
    { name: "test name 1" },
    { name: "test name 2" },
    { name: "test name 3" },
  ],
};

Search.propTypes = {
    fetchedData: PropTypes.arrayOf(PropTypes.object),
};
