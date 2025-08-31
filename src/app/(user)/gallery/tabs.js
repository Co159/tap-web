"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid } from "@mui/material";
import PhotoCard from "./photoCard";
import { photos, videos } from "@/constant/photo_list";
import VideoCard from "./videoCard";

export default function MediaTabs() {
  const [value, setValue] = React.useState("photos");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        {/* Full-width tab list with 50% per tab */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
          <TabList
            onChange={handleChange}
            aria-label="media tabs"
            sx={{ width: "100%" }}
          >
            <Tab
              label="Photos"
              value="photos"
              sx={{ width: "50%", textAlign: "center" }}
            />
            <Tab
              label="Videos"
              value="videos"
              sx={{ width: "50%", textAlign: "center" }}
            />
          </TabList>
        </Box>

        {/* Tab panels */}
        <TabPanel value="photos">
          {/* Photos content goes here */}
          <Box>
            <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
              {photos.map((photo) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                  <PhotoCard img={photo.img} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value="videos">
          {/* Videos content goes here */}
          <Box>
            <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
              {videos.map((vid) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={vid.id}>
                  <VideoCard video={vid.video} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
