"use client";
import React, { useState } from "react";
import { Box, Button, Typography, Stack, Paper } from "@mui/material";
import CustomInput from "@/components/custom/customInput";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // send to API or handle validation
  };

  return (
    <Paper
      elevation={0}
      sx={{ p: 3, maxWidth: 400, mx: "auto", textAlign: "center" }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Inquiry
      </Typography>

      {/* Stylish HR line */}
      <Box
        component="hr"
        sx={{
          width: 80,
          border: "none",
          height: 4,
          backgroundColor: "primary.main",
          borderRadius: 2,
          margin: "0 auto 24px auto",
        }}
      />

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <CustomInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <CustomInput
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <CustomInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
          />
        </Stack>

        <Typography
          variant="caption"
          sx={{
            mt: 2,
            display: "block",
            color: "text.secondary",
            fontSize: 12,
          }}
        >
          By using this form, you agree to the processing of your data to
          conduct consultations and present an offers.
        </Typography>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
          }}
        >
          Submit Now
        </Button>
      </Box>
    </Paper>
  );
}
