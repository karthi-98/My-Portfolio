import React, { useEffect, useState } from "react";

const useScrollLock = () => {
  const bodyStyle = document.body.style;
  const [scrollLock, setscrollLock] = useState(
    bodyStyle.overflowY === "hidden"
  );

  useEffect(() => {
    bodyStyle.overflowY = scrollLock ? "hidden" : "auto";
  }, [scrollLock, bodyStyle]);

  const toggle = () => setscrollLock(!scrollLock);

  return [scrollLock, toggle];
};

export default useScrollLock;
