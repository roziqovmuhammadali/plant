import React, { useState } from "react";
import sale from "../../public/Super Sale Banner.svg";

import image10 from "../../public/image 10.svg";
import PriceSlider from "./PriceSlider";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomIcons from "./Pagination";
import PlantCard from "./PlantCard";
import PlantCard2 from "./PlandCard2";
import PlantCard3 from "./PlandCrad3";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Section = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex w-full items-start justify-between px-[80px] ">
      <div className="h-[800px]] flex w-[29%] justify-start">
        <div className="flex flex-col items-center justify-start">
          <div className="w-[276px] bg-[#FBFBFB] p-4">
            <h2 className=" h-[16px] w-[93px] text-[18px] font-bold leading-4 text-[#3D3D3D]">
              Categories
            </h2>
            <div className="p-4 pb-[30px] text-[15px] font-normal leading-10 text-[#3D3D3D]">
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3>House Plants</h3>
                <p>(33)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3> Potter Plants</h3>
                <p>(12)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3>Seeds</h3>
                <p>(65)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3 className=" ">Small Plants</h3>
                <p>(39)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3 className=" "> Big Plants</h3>
                <p>(23)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3 className=" ">Succulents</h3>
                <p>(17)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3 className=" ">Trerrariums</h3>
                <p>(19)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3 className=" ">Gardening</h3>
                <p>(13)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3 className=" ">Accessories</h3>
                <p>(18)</p>
              </span>
            </div>
            <h2 className=" h-[16px] w-[193px] text-[18px] font-bold leading-4 text-[#3D3D3D]">
              Price Range
            </h2>
            <div className="p-4 pb-[30px] text-[15px]  font-normal leading-10 text-[#3D3D3D]">
              <PriceSlider />
            </div>
            <h2 className=" h-[16px] w-[93px] text-[18px] font-bold leading-4 text-[#3D3D3D]">
              Size
            </h2>
            <div className="p-4 text-[15px] font-normal leading-10 text-[#3D3D3D]">
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3>Small</h3>
                <p>(119)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3>Medium</h3>
                <p>(86)</p>
              </span>
              <span className="flex items-center justify-between hover:font-bold hover:text-[#46A358] ">
                <h3>Large</h3>
                <p>(78)</p>
              </span>
            </div>
          </div>
          <div className="flex w-[357px] items-center justify-center text-[15px] font-normal text-[#3D3D3D]">
            <img src={sale} alt="sale" className="h-[400px] w-[357px]" />
          </div>
        </div>
      </div>
      <div className="w-[80%]">
        <div>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All Plants" {...a11yProps(0)} />
                <Tab label="New Arrivals" {...a11yProps(1)} />
                <Tab label="Sale" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="grid grid-cols-3 gap-7 pt-8">
                <PlantCard />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className="grid grid-cols-3 gap-7 pt-8">
                <PlantCard2 />
              </div>{" "}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="grid grid-cols-3 gap-7 pt-8">
                <PlantCard3 />
              </div>{" "}
            </CustomTabPanel>
          </Box>
          <span className="flex w-full items-center justify-end px-[80px]">
            <CustomIcons />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section;
