import { useEffect, useState } from "react";

const useFetch = () => {
  const [fetchedData, setFetchedData] = useState({
    google_drive_link:
      "https://drive.google.com/file/d/1UulqpNT9TGkM9BMSWW0_GIYpm011VD4u/view?usp=drive_link",
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
