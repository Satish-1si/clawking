import React, { useEffect } from "react";

const PlayZone = () => {
  useEffect(() => {
    window.location.href = "/noon.html";
  }, []);
  return null; // nothing to render because it redirects
};

export default PlayZone;
