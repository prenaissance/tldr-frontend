import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import client from "../../common/utilities/requests";

type Props = {};

function SelectFlow({}: Props) {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const { data: flowNames } = useQuery<string[]>(
    ["flowNames", inputValue],
    async () => {
      const response = await client.get("dialogFlow/names", {
        params: {
          search: inputValue,
        },
      });

      return response.data;
    },
    {
      initialData: [],
    }
  );

  return (
    <Box
      sx={{
        bgcolor: "white",
      }}
    >
      <Autocomplete
        options={flowNames}
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue!);
        }}
        inputValue={inputValue}
        onInputChange={(e, newValue) => {
          setInputValue(newValue);
        }}
        renderInput={(...args) => <TextField {...args} label="autocomplete" />}
      />

      <Button sx={{ bgcolor: "secondary.main" }}>
        <Link to="flows/:flowName">Start flow</Link>
      </Button>
    </Box>
  );
}

export default SelectFlow;
