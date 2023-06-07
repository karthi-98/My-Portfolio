import { useEffect, useState } from "react";

const useFetch = () => {
  const [fetchedData, setFetchedData] = useState({
    google_drive_link:
      "https://filebin.net/iglmleibk1h2jtjp/Karthick_P_Resume_May_30.pdf",
  });
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://myprofiledata.s3.ap-south-1.amazonaws.com/resumes3.json"
      );
      const data = await res.json();
      if (res.ok) {
        setFetchedData(data);
      }
    }
    fetchData();
  }, []);

  return { fetchedData };
};

export default useFetch;
