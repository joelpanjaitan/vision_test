"use server";
import axios from "axios";

const axiosClient = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { axiosClient };
