
import React from 'react';

const Experience = () => {
  
  return (
    <div>
      <div class="bg-white-200 rounded-xl rounded-lg shadow-lg divide-gray-200">
        <button
          type="button"
          style={{ width: "600px",height:"60px" }}
          class="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Experience
        </button>

        <div>
          <h4>Software Development Engineer, Google</h4>
          <h5>(January 2021 - Present)</h5>
          <p
            style={{
              marginTop: "15px",
              paddingLeft: "70px",
              paddingRight: "70px",
            }}
          >
            Created a prod level software to improve SEO performance
            also reduced cost by 50% 
          </p>
        </div>
        <div class="flex flex-wrap items-center -mx-2">
          <div
            class="w-full sm:w-1/5 px-2 mb-2 sm:mb-0"
            style={{ marginLeft: "150px" }}
          >
            <a
              class="flex px-2 py-3 items-center justify-center  hover:bg-gray-700 text-sm leading-6 font-bold text-black rounded-xl transition duration-200"
              href="#"
            >
              <svg
                class="h-8 w-8 text-green-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                <line x1="9" y1="12" x2="15" y2="12" />{" "}
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
              <span class="ml-3 text-black-500">Add</span>
            </a>
          </div>
          <div class="w-full sm:w-1/5 px-2" style={{ marginLeft: "100px" }}>
            <a
              class="flex px-2 py-3 items-center justify-center  hover:bg-gray-700 text-sm leading-6 font-bold text-black rounded-xl transition duration-200"
              href="#"
            >
              <svg
                class="h-8 w-8 text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M12 20h9" />{" "}
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              <span class="ml-3">Edit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
