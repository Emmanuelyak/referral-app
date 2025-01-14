"use client";
import React, { useEffect, useState } from "react";
import { Input, InputGroup, Nav, VStack } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { Dropdown, Loader } from "rsuite";
import RecentCard from "@/components/recent-card/recent-card";
import ProjectCard from "@/components/project-card/project-card";
import { useRouter } from "next/navigation";
// import DropdownItem from 'rsuite/esm/Dropdown/DropdownItem';
export default function Home() {
  const styles = {
    width: "100%",
    outlineStyle: "none",
  };
  const [list, setList] = useState(true);
  const [active, setActive] = React.useState("home");
  const [userActive, setUserActive] = useState(false)
  const router = useRouter();
  

  
  useEffect(() => {
    let isloggedIn = localStorage.getItem("userLogin" )
    
    if(isloggedIn){
      setUserActive(true)
    }else{
      setUserActive(false)
      router.push("/login")

    }
    
  },[])


  const Navbar = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} activeKey={active} onSelect={onSelect}>
        <Nav.Item eventKey="home">Home</Nav.Item>
        <Nav.Item eventKey="news">News</Nav.Item>
        <Nav.Item eventKey="solutions">Solutions</Nav.Item>
        <Nav.Item eventKey="products">Products</Nav.Item>
        <Nav.Item eventKey="about">About</Nav.Item>
        <Nav.Item eventKey="a">About</Nav.Item>
        <Nav.Item eventKey="b">About</Nav.Item>
        <Nav.Item eventKey="c">About</Nav.Item>
        <Nav.Item eventKey="d">About</Nav.Item>
      </Nav>
    );
  };

  return (
      <div>
        {userActive ? (<div className="bg-background w-screen h-screen">
      <nav className="flex justify-between px-5 py-2 bg-white">
        <div className="text-4xl font-extrabold [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
          R
        </div>

        <div>
          <ol className="flex items-center space-x-4">
            <li>
              <button className="border border-gray-200 px-2 py-1 rounded-md">
                Feedback
              </button>
            </li>
            <li>changelog</li>
            <li>Help</li>
            <li>Help</li>
            <li>
              <i className="ri-settings-5-line text-2xl"></i>
            </li>
          </ol>
        </div>
      </nav>
      <nav className="shadow-md bg-white overflow-y-auto">
        {/* <ol className="flex items-center space-x-4">
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0 border-b-2 border-b-black">
            Overview
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Integration
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Activity
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Domain
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Integration
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Activity
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Domain
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Integration
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Activity
          </li>
          <li className=" px-2 py-1 hover:rounded-md hover:transition-colors hover:bg-gray-100 hover:translate-x-0">
            Domain
          </li>
        </ol> */}
        <VStack spacing={30}>
          <Navbar appearance="subtle" active={active} onSelect={setActive} />
          {/* <Navbar appearance="pills" active={active} onSelect={setActive} /> */}
        </VStack>
      </nav>

      <div className="w-12/12 xl:w-9/12 lg:w-11/12 m-auto mt-5 p-1 md:p-0">
        <div className="flex gap-2">
          <div className="xl:w-9/12 lg:w-7/12 md:w-8/12 w-6/12 p-1 md:p-0">
            <InputGroup style={styles}>
              <Input />
              <InputGroup.Button>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </div>
          <div className=" flex lg:gap-2 gap-4 w-3/12">
            <div className="hidden lg:flex">
              <Dropdown title="Sort by activity" className="activity">
                <Dropdown.Item> Sort by activity</Dropdown.Item>
                <Dropdown.Item> Sort by activity</Dropdown.Item>
              </Dropdown>
            </div>

            <div className="border p-1 gap-2 hidden lg:flex rounded-md">
              <button
                className={`text-lg ${
                  list ? "hover:bg-gray-100 bg-gray-100" : ""
                }  px-1`}
                onClick={() => setList(true)}
              >
                <i className="ri-gallery-view-2 px-2"></i>
              </button>
              <button
                className={`text-lg ${
                  !list ? "hover:bg-gray-100 bg-gray-100" : ""
                }`}
                onClick={() => setList(false)}
              >
                <i className="ri-list-check px-2"></i>
              </button>
            </div>
            <div className="lg:hidden flex">
              <Dropdown
                title={<i className="ri-more-line text-xl"></i>}
                noCaret
              >
                <Dropdown.Item>Sort by activity</Dropdown.Item>
              </Dropdown>
            </div>
            <Dropdown className="add-new" title="Add New...">
              <Dropdown.Item> Sort by activity</Dropdown.Item>
              <Dropdown.Item> Sort by activity</Dropdown.Item>
            </Dropdown>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:flex xl:gap-10 gap-3 items-start">
          <div className="w-full lg:w-4/12">
            <div>
              <h6 className="mt-5 mb-3 font-semibold">Recent Reviews</h6>
              <RecentCard />
            </div>
          </div>
          {list ? (
            <div className="w-12/12 lg:w-8/12">
              <h6 className="mt-5 mb-3 font-semibold">Projects</h6>
              <div className=" grid lg:grid-cols-2 grid-cols-1 gap-2 xlgap-5">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          ) : (
            <div className="w-8/12">
              <div className="mt-3 mb-0 flex justify-between items-center">
                {" "}
                <h6 className=" font-semibold">
                  project/projects-e-project-project2
                </h6>{" "}
                <div>
                  <Dropdown
                    title={<i className="ri-more-line text-xl"></i>}
                    noCaret
                  >
                    <Dropdown.Item>Sort by activity</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>

              <div className="bg-white w-full rounded-xl border">
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="flex gap-3">
                    <div className="w-12 p-2">
                      <img src="user-1.png" alt="" width={"100%"} />
                    </div>
                    <div>
                      <p className="text-black font-semibold">
                        projects-e-project-project2
                      </p>
                      <p className="text-gray-500">
                        projects-e-project-project2...
                      </p>
                    </div>
                  </div>
                  <div className="pl-2">
                    <p className="font-semibold">
                      updates on fslfksferriowfkldfd sfkjsdl
                    </p>
                    <p>
                      12/12/24 from <span></span>projects-e-project-project2
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="text-2xl border-4 border-gray-300 text-gray-500 rounded-full px-1">
                      <i className="ri-line-chart-line"></i>
                    </div>
                    <div>
                      <Dropdown
                        title={<i className="ri-more-line text-xl"></i>}
                        noCaret
                      >
                        <Dropdown.Item>Sort by activity</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="flex gap-3">
                    <div className="w-12 p-2">
                      <img src="user-1.png" alt="" width={"100%"} />
                    </div>
                    <div>
                      <p className="text-black font-semibold">
                        projects-e-project-project2
                      </p>
                      <p className="text-gray-500">
                        projects-e-project-project2...
                      </p>
                    </div>
                  </div>
                  <div className="pl-2">
                    <p className="font-semibold">
                      updates on fslfksferriowfkldfd sfkjsdl
                    </p>
                    <p>
                      12/12/24 from <span></span>projects-e-project-project2
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="text-2xl border-4 border-gray-300 text-gray-500 rounded-full px-1">
                      <i className="ri-line-chart-line"></i>
                    </div>
                    <div>
                      <Dropdown
                        title={<i className="ri-more-line text-xl"></i>}
                        noCaret
                      >
                        <Dropdown.Item>Sort by activity</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="flex gap-3">
                    <div className="w-12 p-2">
                      <img src="user-1.png" alt="" width={"100%"} />
                    </div>
                    <div>
                      <p className="text-black font-semibold">
                        projects-e-project-project2
                      </p>
                      <p className="text-gray-500">
                        projects-e-project-project2...
                      </p>
                    </div>
                  </div>
                  <div className="pl-2">
                    <p className="font-semibold">
                      updates on fslfksferriowfkldfd sfkjsdl
                    </p>
                    <p>
                      12/12/24 from <span></span>projects-e-project-project2
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="text-2xl border-4 border-gray-300 text-gray-500 rounded-full px-1">
                      <i className="ri-line-chart-line"></i>
                    </div>
                    <div>
                      <Dropdown
                        title={<i className="ri-more-line text-xl"></i>}
                        noCaret
                      >
                        <Dropdown.Item>Sort by activity</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="flex gap-3">
                    <div className="w-12 p-2">
                      <img src="user-1.png" alt="" width={"100%"} />
                    </div>
                    <div>
                      <p className="text-black font-semibold">
                        projects-e-project-project2
                      </p>
                      <p className="text-gray-500">
                        projects-e-project-project2...
                      </p>
                    </div>
                  </div>
                  <div className="pl-2">
                    <p className="font-semibold">
                      updates on fslfksferriowfkldfd sfkjsdl
                    </p>
                    <p>
                      12/12/24 from <span></span>projects-e-project-project2
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="text-2xl border-4 border-gray-300 text-gray-500 rounded-full px-1">
                      <i className="ri-line-chart-line"></i>
                    </div>
                    <div>
                      <Dropdown
                        title={<i className="ri-more-line text-xl"></i>}
                        noCaret
                      >
                        <Dropdown.Item>Sort by activity</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="flex gap-3">
                    <div className="w-12 p-2">
                      <img src="user-1.png" alt="" width={"100%"} />
                    </div>
                    <div>
                      <p className="text-black font-semibold">
                        projects-e-project-project2
                      </p>
                      <p className="text-gray-500">
                        projects-e-project-project2...
                      </p>
                    </div>
                  </div>
                  <div className="pl-2">
                    <p className="font-semibold">
                      updates on fslfksferriowfkldfd sfkjsdl
                    </p>
                    <p>
                      12/12/24 from <span></span>projects-e-project-project2
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="text-2xl border-4 border-gray-300 text-gray-500 rounded-full px-1">
                      <i className="ri-line-chart-line"></i>
                    </div>
                    <div>
                      <Dropdown
                        title={<i className="ri-more-line text-xl"></i>}
                        noCaret
                      >
                        <Dropdown.Item>Sort by activity</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="flex gap-3">
                    <div className="w-12 p-2">
                      <img src="user-1.png" alt="" width={"100%"} />
                    </div>
                    <div>
                      <p className="text-black font-semibold">
                        projects-e-project-project2
                      </p>
                      <p className="text-gray-500">
                        projects-e-project-project2...
                      </p>
                    </div>
                  </div>
                  <div className="pl-2">
                    <p className="font-semibold">
                      updates on fslfksferriowfkldfd sfkjsdl
                    </p>
                    <p>
                      12/12/24 from <span></span>projects-e-project-project2
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="text-2xl border-4 border-gray-300 text-gray-500 rounded-full px-1">
                      <i className="ri-line-chart-line"></i>
                    </div>
                    <div>
                      <Dropdown
                        title={<i className="ri-more-line text-xl"></i>}
                        noCaret
                      >
                        <Dropdown.Item>Sort by activity</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="text-center p-3">show more</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>): <Loader />}
      </div>
    
  );
}
