import React, { useState } from "react";

const Tab = () => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <>
      <section className=" ">
        <div className="container bg-white-200 rounded-lg shadow-lg ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="w-full mb-4">
                <div class="flex flex-wrap rounded-lg border border-[#E4E4E4] py-3 px-4 space-x-2 text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <a
                    onClick={() => handleTabOpen("home")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500  transition-all delay-75 cursor-pointer ${
                      open === "home" 
                    }`}
                  >
                    About
                  </a>
                  <a
                    onClick={() => handleTabOpen("about")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500  transition-all delay-75 cursor-pointer ${
                      open === "home" 
                    }`}
                  >
                    Skills & Certifications
                  </a>
                  <a
                    onClick={() => handleTabOpen("team")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500  cursor-pointer ${
                      open === "team" 
                    }`}
                  >
                    Posts
                  </a>
                  <a
                    onClick={() => handleTabOpen("company")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500  transition-all delay-75 cursor-pointer ${
                      open === "company" 
                    }`}
                  >
                    Spaces
                  </a>
                </div>
                <TabContent
                  details=" Jen is a tech enthusiast, driven by innovation and collaboration. With a strong CS background, she seeks continuous growth and impact through her work."
                  tabCategory="home"
                  open={open}
                />
                <TabContent
                  details=" Jen possesses exceptional proficiency in Java, Python, and JavaScript, skillfully crafting elegant solutions for intricate problems. Furthermore, her certifications in cloud computing and cybersecurity elevate her value as a key asset in cutting-edge tech environments. "
                  tabCategory="about"
                  open={open}
                />
                <TabContent
                  details="Jen shares tech expertise through blogs, covering dev practices, ML, and inspiring fellow programmers. Engaging with the community is her passion."
                  tabCategory="team"
                  open={open}
                />
                <TabContent
                  details="Jen actively participates in online tech communities, forums, conferences, and meetups, networking and gaining inspiration from industry leaders."
                  tabCategory="company"
                  open={open}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tab;

const TabContent = ({ open, tabCategory, details }) => {
  return (
    <div>
      <div
        className={`p-6 text-base leading-relaxed text-body-color ${
          open === tabCategory ? "block" : "hidden"
        } `}
      >
        {details}
      </div>
    </div>
  );
};
