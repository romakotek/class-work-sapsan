import React, { useState } from "react";
import data from "../mock-data/mockNames.json";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export interface NameListProps {
  input: string;
}

function NameList({ input }: NameListProps) {
  const filteredData = data.filter((element) => {
    if (input === "") {
      return element;
    } else {
      return element.first_name.toLowerCase().includes(input);
    }
  });

  return (
    <List>
      {filteredData.map((item: { id: number; first_name: string }) => (
        <ListItem sx={{ py: 0 }} key={item.id}>
          <ListItemText primary={item.first_name} />
        </ListItem>
      ))}
      {filteredData.length === 0 && (
        <Typography variant="body1">No names found</Typography>
      )}
    </List>
  );
}

export default NameList;
