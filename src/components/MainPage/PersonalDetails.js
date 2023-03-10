import React from "react";

function PersonalDetails() {
  return (
    <div className="w-full h-80 my-5">
      <div className="grid grid-cols-4 gap-5 gap-y-10 items-center text-white">
        <div className="col-span-4 text-2xl">Personal Details</div>
        <div className="text-right">Full Name</div>
        <div>
          <input
            type="text"
            class="block w-full p-2  border rounded-lg  sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="eg. Jane Goswami Doe"
          />
        </div>
        <div className="text-right">Age</div>
        <div>
          <input
            type="text"
            class="block w-full p-2  border rounded-lg  sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="eg. 53"
          />
        </div>

        <div className="text-right">Email Address</div>
        <div>
          <input
            type="text"
            class="block w-full p-2  border rounded-lg  sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="eg. samplemail@gmail.com"
          />
        </div>
        <div className="text-right">Phone Number</div>
        <div>
          <input
            type="text"
            class="block w-full p-2  border rounded-lg  sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="eg. +91 7884612221"
          />
        </div>

        <div className="text-right col-start-1">Home Address</div>
        <div className="col-span-3 ">
          <input
            type="text"
            class="block w-full p-2  border rounded-lg  sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your permanent / temporary address"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
