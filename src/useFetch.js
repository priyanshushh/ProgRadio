import { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.XRAPIDKEY,
    "X-RapidAPI-Host": process.env.XRAPIDHOST,
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
