"use client";

import React, { useEffect } from "react";

const AutoDownloadCV = () => {
  useEffect(() => {
    const hasDownloded = localStorage.getItem("cv");

    if (!hasDownloded) {
      localStorage.setItem("cv", "true");

      const a = document.createElement("a");
      a.href = "/CV/CV.pdf";
      a.download = "CV.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }, []);
  return null;
};

export default AutoDownloadCV;
