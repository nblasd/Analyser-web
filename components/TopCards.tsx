import React from "react";

function TopCards() {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4 ">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 ">
          <p className="font-bold text-2xl">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
        <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 ">
            <p className="font-bold text-2xl">$11,756</p>
            <p className="text-gray-600">YID Revenue</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+11%</span>
          </p>
        </div>
      </div>
      <div className=" bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 ">
            <p className="font-bold text-2xl">$78,846</p>
            <p className="text-gray-600">Customers</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+17%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopCards;
