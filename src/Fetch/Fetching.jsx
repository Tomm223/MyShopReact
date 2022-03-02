import React from "react";
import axios from "axios"
export const GetAxios = async (url) => {
   const response = await axios.get(`http://localhost:3000/${url}`)
   return response.data
}

export const PostAxios = async (url, body) => {
   const response = await axios.post(`http://localhost:3000/${url}`, body)
   return response.data
}