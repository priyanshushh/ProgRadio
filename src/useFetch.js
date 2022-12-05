import { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.xrapidkey,
    "X-RapidAPI-Host": process.env.xrapidhost,
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
