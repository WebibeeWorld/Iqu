"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.div
      className="fixed bottom-8 right-4 "
      style={{ zIndex: "1000" }}
      whileHover={{ scale: 1.1 }}
    >
      <a
        href="https://wa.me/6380654528?text=Hi%20iQu%20Clinic.%20I%20want%20to%20enquire%20and%20get%20counseling!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src="/whatsapp.gif"
          loading="lazy"
          alt="msg"
          className="rounded-full p-2 shadow-xl"
          style={{ boxShadow: "0 0 0 2px #9544c3" }}
          whileHover={{ boxShadow: "0 0 0 2px #ffffff" }}
        />
      </a>
    </motion.div>
  );
}
