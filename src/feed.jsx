// ListGroup.jsx
import React from 'react';

const ListGroup = () => {
  

  return (
    <>
      <div class="w-full bg-white rounded-lg shadow-lg ">
        <ul class="divide-y-2 divide-gray-200">
        <button
        type="button"
        style={{ width: "100%", height: "50px" }}
        class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
      Communities feed
      </button>
        
          <li class="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
         
            <svg
              class="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />{" "}
              <polyline points="7.5 4.21 12 6.81 16.5 4.21" />{" "}
              <polyline points="7.5 19.79 7.5 14.6 3 12" />{" "}
              <polyline points="21 12 16.5 14.6 16.5 19.79" />{" "}
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />{" "}
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            Web UI Designers
          </li>
          <li class="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
            <svg
              class="h-8 w-8 text-blue-500"
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
              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
              <line x1="12" y1="11" x2="12" y2="11.01" />{" "}
              <line x1="8" y1="11" x2="8" y2="11.01" />{" "}
              <line x1="16" y1="11" x2="16" y2="11.01" />
            </svg>
            Calfiornia UI Researcher
          </li>
          <li class="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
            <svg
              class="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />{" "}
              <rect x="9" y="9" width="6" height="6" />{" "}
              <line x1="9" y1="1" x2="9" y2="4" />{" "}
              <line x1="15" y1="1" x2="15" y2="4" />{" "}
              <line x1="9" y1="20" x2="9" y2="23" />{" "}
              <line x1="15" y1="20" x2="15" y2="23" />{" "}
              <line x1="20" y1="9" x2="23" y2="9" />{" "}
              <line x1="20" y1="14" x2="23" y2="14" />{" "}
              <line x1="1" y1="9" x2="4" y2="9" />{" "}
              <line x1="1" y1="14" x2="4" y2="14" />
            </svg>
            Prototyping Club
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListGroup;