import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";

const label = {
  inputProps: { "aria-label": "Checkbox demo", backgroundColor: "orange" },
};

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorderOutlined />}
        checkedIcon={<FavoriteOutlined />}
      />
    </div>
  );
}
