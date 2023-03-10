import React from "react";

function FinancialDetails() {
  return (
    <div className="w-full h-80 my-5">
      <div className="flex flex-col space-y-10 text-white">
        <div className="text-2xl">Financial Details</div>
        <div className="w-3/4 self-end space-y-5">
          <div>Income</div>
          <input
            type="text"
            class="block w-full p-2 border rounded-lg sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="eg. 60,000"
          />
          <div className="flex justify-between pt-5">
            <div className="space-y-5">
              <div>Home Ownership</div>
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Owner{" "}
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-5">
              <div>Employment Length</div>
              <input
                type="text"
                class="block w-full p-2 border rounded-lg sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="eg. 3yrs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialDetails;
