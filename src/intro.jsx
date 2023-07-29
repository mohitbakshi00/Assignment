import React from 'react';
import img from './assets/img.jpg'
import SkillDisplay from './progress'


const UserCard = () => {
  const scorePercentage = 75; // Set the score percentage here

  return (
    <div className="shadow-md p-4 max-w-xs mx-auto">
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden">
        {/* User Image */}
        <img
          className="h-15 w-15 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        {/* Score Wheel */}
      </div>

      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">Jen Stones</h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          Los Angeles, California
          
          <p>205 Followers. 150 Following</p>

        </div>

        <div style={{ marginTop: "10px" }}>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Share Profile
            </span>
          </label>
          <div style={{ marginTop: "5px" }}>
            <h3 style={{ marginBottom: "6px" }}>Online links</h3>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 mr-1 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ background: "blue" }}
            >
              <svg
                class="h-5 w-4"
                fill="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
              </svg>
            </button>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 mr-1 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ background: "blue" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ background: "blue" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
          </div>
          <SkillDisplay />
          <div className="mt-5 py-10 border-t border-blueGray-200 text-center">
            <label
              for="default-range"
              class="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Rating
            </label>
            <input
              id="default-range"
              type="range"
              value="50"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            congrats you are in top 50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
