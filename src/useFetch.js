import { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c5a0fe9a22msh586ff674620674fp113cddjsn475073961545",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.co",
  },
};
const useFetch = (url) => {
  const [song, setSong] = useState("");

  useEffect(() => {
    axios.get(url, options).then((data) => {
      if (data) {
        setSong(data);
        // console.log(data);
      }
    });
  }, [url]);
  return { song };
};

export default useFetch;
