import React from "react";
import gentalmen from "../../imges/untitled.png";

const Authors = () => {
  return (
    <div className="w-3/4 mx-auto mt-5">
      <h1 className="text-white text-2xl">Amazing authors to follow</h1>
      <div className="">
        <div className="mt-5 flex justify-between mb-2 bg-slate-800 p-3 rounded">
          <div className="flex items-center">
            <img
              src={gentalmen}
              className="bg-slate-600 rounded-full h-12 w-12"
              alt=""
            />
            <div>
              <p className="font-semibold ml-3 text-white inline">Michael Scott </p>
              <p className="font-semibold ml-2 text-slate-400 inline">121 Stories</p>
              <p className="font-semibold ml-3 text-slate-400">
                Don't ever, for any reason, do anything to anyone.....
              </p>
            </div>
          </div>
          <div className="flex items-center mt-0">
            <p className="font-semibold mr-5 text-slate-400">1,021 Followers</p>
            <p className="font-semibold mr-3 text-sky-500">Follow</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-5 flex justify-between mb-2 bg-slate-800 p-3 rounded">
          <div className="flex items-center">
            <img
              src={gentalmen}
              className="bg-slate-600 rounded-full h-12 w-12"
              alt=""
            />
            <div>
              <p className="font-semibold ml-3 text-white inline">Michael Scott </p>
              <p className="font-semibold ml-2 text-slate-400 inline">121 Stories</p>
              <p className="font-semibold ml-3 text-slate-400">
                Don't ever, for any reason, do anything to anyone.....
              </p>
            </div>
          </div>
          <div className="flex items-center mt-0">
            <p className="font-semibold mr-5 text-slate-400">1,021 Followers</p>
            <p className="font-semibold mr-3 text-slate-600">Unfollow</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-5 flex justify-between mb-2 bg-slate-800 p-3 rounded">
          <div className="flex items-center">
            <img
              src={gentalmen}
              className="bg-slate-600 rounded-full h-12 w-12"
              alt=""
            />
            <div>
              <p className="font-semibold ml-3 text-white inline">Michael Scott </p>
              <p className="font-semibold ml-2 text-slate-400 inline">121 Stories</p>
              <p className="font-semibold ml-3 text-slate-400">
                Don't ever, for any reason, do anything to anyone.....
              </p>
            </div>
          </div>
          <div className="flex items-center mt-0">
            <p className="font-semibold mr-5 text-slate-400">1,021 Followers</p>
            <p className="font-semibold mr-3 text-sky-500">Follow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
