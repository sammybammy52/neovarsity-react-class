import React, { useState } from 'react'
import Header from '../../components/Header'
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateBlog = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [noOfWriters, setNoOfWriters] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            title: title,
            author: author,
            no_of_writers: noOfWriters,
            description: description
        }

        setLoading(true);
        const result = await axios.post("http://localhost:8000/api/blogs", obj);

        if (result.data.status === "success") {
            toast.success("Blog Created Successfully");
        }else{
            toast.error("Failed to create blog")
        }
        setLoading(false);
    }
  return (
    <>
    <Header/>

    <div className="flex min-h-screen justify-center items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-purple-500 font-bold mb-3 text-2xl">Create a blog</h1>
          <div className="mb-4">
            <input
              required
              type="text"
              value={title}
              className="py-3 px-4 rounded border-2"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              required
              type="text"
              value={author}
              className="py-3 px-4 rounded border-2"
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              required
              type="number"
              value={noOfWriters}
              className="py-3 px-4 rounded border-2"
              placeholder="Number of Writers"
              onChange={(e) => setNoOfWriters(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              required
              type="text"
              value={description}
              className="py-3 px-4 rounded border-2 w-full"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          

          <div>
            <button disabled={loading} className="bg-purple-500 text-white rounded py-3 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed">
              { loading ? 'Loading...' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateBlog