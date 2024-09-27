import React, { useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const getData = async () => {
    setLoading(true);
    const result = await axios.get("http://localhost:8000/api/blogs");

    if (result.data.status === 'success') {
      setData(result.data.data);
    }else{
      toast.error("Could not fetch blogs data")
    }

    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <>
      <Header />

      <h1 className="text-center text-4xl font-bold text-purple-600 mt-5">Welcome to Our Blog🫵🏻😂</h1>
      <div className="lg:px-[50px] mt-20">
      {
        data && data?.map((i) => (
          <div className="py-4 px-3 border border-gray-300 rounded mb-4">
              <h1 className="font-semibold text-gray-800 mb-2">{i?.title}</h1>
              <p className="text-sm">{i?.description}</p>
          </div>
        ))
      }
      </div>
    </>
  );
};

export default Home;
