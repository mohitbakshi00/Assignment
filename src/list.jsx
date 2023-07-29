// ListGroup.jsx
import React from 'react';

const ListGroup = () => {
  

  return (
    <>
      <div class="w-full bg-white rounded-lg shadow-lg ">
        <ul class="divide-y-2 divide-gray-200">
          <li class="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
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
            Job Invites
          </li>
          <li class="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
            <svg
              class="h-8 w-8 text-red-500"
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
              <line x1="4" y1="19" x2="20" y2="19" />{" "}
              <polyline points="4 15 8 9 12 11 16 6 20 10" />
            </svg>
            Analytics
          </li>
          <li class="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
            <svg
              class="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            My Profile
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
              <circle cx="5" cy="18" r="2" /> <circle cx="19" cy="6" r="2" />{" "}
              <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />{" "}
              <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" />
            </svg>
            Explore
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListGroup;