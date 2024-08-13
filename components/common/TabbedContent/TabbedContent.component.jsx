"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Button } from "@mui/material";
import TabItem from "./TabItem.component";
import Link from "next/link";

const TabbedContent = (props) => {
  const { tabData } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", border: "none" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="content-tabs"
            centered
            sx={{
              "& .MuiTabs-flexContainer": {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              },
              "& .MuiTab-root": {
                borderRadius: "50px",
                margin: "0 5px",
                minWidth: "120px",
                fontSize: "1rem",
              },
              "& .Mui-selected": {
                backgroundColor: "#232323",
                color: "white !important",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {tabData?.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                sx={{
                  textTransform: "capitalize",
                }}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>

        {tabData?.map((tab, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mt-4">
              {tab?.items?.map((item, index) => (
                <TabItem key={index} {...item} />
              ))}
            </div>

            {tab?.moreLink && (
              <div className="flex justify-center mt-12 lg:mt-16">
                <Link
                  className="font-medium text-gray-700 border border-dark rounded-md py-3 px-6 hover:bg-gray-700 hover:text-white ease-in duration-200"
                  href={tab?.moreLink?.href}
                >
                  {tab?.moreLink?.label}
                </Link>
              </div>
            )}
          </CustomTabPanel>
        ))}
      </Box>
    </>
  );
};

export default TabbedContent;

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

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
