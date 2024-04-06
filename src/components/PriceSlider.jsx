import React, { useState } from "react";
import { Slider, Button, Typography } from "@mui/material";

function valuetext(value) {
  return `${value}`;
}

function PriceSlider() {
  const [value, setValue] = useState([20, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Slider
        getAriaLabel={() => "Price range"}
        sx={{
          width: 210,
          color: "#46A358",
          "& .MuiSlider-thumb": {
            backgroundColor: "#46A358",
            borderColor: "#FFF",
            borderWidth: "3px",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#46A358",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#46A358",
            borderColor: "#46A358",
          },
        }}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={1500}
      />
      <Typography id="non-linear-slider" gutterBottom>
        <p className="mb-4 flex items-center gap-2 text-[15px]">
          Price:{" "}
          <span className="text-check text-[15px] font-bold">
            ${value[0]} - ${value[1]}
          </span>
        </p>
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#46A358",
          color: "white",
          fontWeight: "700",
          fontFamily: "Cera Pro",
          paddingX: "16px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#46A358",
          },
        }}
      >
        <span className="text-[16px] font-bold text-[#fff] md:text-[14px]">
          Filter
        </span>
      </Button>
    </>
  );
}

export default PriceSlider;
