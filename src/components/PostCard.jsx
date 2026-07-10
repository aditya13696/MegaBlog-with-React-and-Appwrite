import React from "react";
import appWriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {featuredImage ? (
            <img
              className="rounded-xl"
              src={appWriteService.getFileView(featuredImage)}
              alt={title}
            />
          ) : (
            <div className="w-full h-48 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
              No image
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
