import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FaGear, FaBell } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
  rel="stylesheet"
></link>;
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaWrench } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMyWork, setOpenMyWork] = useState(false);
  const [isOpenIdentites, setOpenIdentities] = useState(false);
  const [isOpenApplications, setOpenApplications] = useState(false);
  const [isOpenIntelligence, setOpenIntelligence] = useState(false);
  const [isOpenSetup, setOpenSetup] = useState(false);
  const [isOpenGear, setOpenGear] = useState(false);
  const [isOpenAdmin, setOpenAdmin] = useState(false);

  const handleClickSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClickMyWork = () => {
    setOpenMyWork(!isOpenMyWork);
  };
  const handleClickIdentities = () => {
    setOpenIdentities(!isOpenIdentites);
  };
  const handleClickApplications = () => {
    setOpenApplications(!isOpenApplications);
  };
  const handleClickIntelligence = () => {
    setOpenIntelligence(!isOpenIntelligence);
  };
  const handleClickSetup = () => {
    setOpenSetup(!isOpenSetup);
  };
  const handleClickGear = () => {
    setOpenGear(!isOpenGear);
  };
  const handleClickAdmin = () => {
    setOpenAdmin(!isOpenAdmin);
  };

  const menuRef = useRef();
  const myWorkRef = useRef();
  const identitiesRef = useRef();
  const applicationsRef = useRef();
  const IntelligenceRef = useRef();
  const setupRef = useRef();
  const gearRef = useRef();
  const adminRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    let handler = (e) => {
      if (!myWorkRef.current.contains(e.target)) {
        setOpenMyWork(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    let handler = (e) => {
      if (!identitiesRef.current.contains(e.target)) {
        setOpenIdentities(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    let handler = (e) => {
      if (!applicationsRef.current.contains(e.target)) {
        setOpenApplications(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    let handler = (e) => {
      if (!IntelligenceRef.current.contains(e.target)) {
        setOpenIntelligence(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  useEffect(() => {
    let handler = (e) => {
      if (!setupRef.current.contains(e.target)) {
        setOpenSetup(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  useEffect(() => {
    let handler = (e) => {
      if (!gearRef.current.contains(e.target)) {
        setOpenGear(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  useEffect(() => {
    let handler = (e) => {
      if (!adminRef.current.contains(e.target)) {
        setOpenAdmin(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <nav>
      <div className="left">
        <div className="pt-1 hover:bg-blue-700">
          <TfiMenuAlt onClick={handleClickSidebar} />
        </div>
        <a href="/" className="flex text-sm hover:bg-blue-700">
          Home
        </a>
        <div
          className="flex text-sm cursor-pointer hover:bg-blue-700"
          onClick={handleClickMyWork}
          ref={myWorkRef}
        >
          My Work <IoMdArrowDropdown className="mt-1.5" />
        </div>
        <div
          className="flex text-sm cursor-pointer  hover:bg-blue-700"
          onClick={handleClickIdentities}
          ref={identitiesRef}
        >
          Identities <IoMdArrowDropdown className="mt-1.5 " />
        </div>
        <div
          className="flex text-sm cursor-pointer  hover:bg-blue-700"
          onClick={handleClickApplications}
          ref={applicationsRef}
        >
          Applications <IoMdArrowDropdown className="mt-1.5 " />
        </div>
        <div
          className="flex text-sm cursor-pointer  hover:bg-blue-700"
          onClick={handleClickIntelligence}
          ref={IntelligenceRef}
        >
          Intelligence <IoMdArrowDropdown className="mt-1.5 " />
        </div>
        <div
          className="flex text-sm cursor-pointer  hover:bg-blue-700"
          onClick={handleClickSetup}
          ref={setupRef}
        >
          Setup <IoMdArrowDropdown className="mt-1.5 " />
        </div>
      </div>

      <div className="right cursor-pointer pt-1.5  ">
        <div
          className="flex hover:bg-blue-700"
          onClick={handleClickGear}
          ref={gearRef}
        >
          <FaGear />
          <IoMdArrowDropdown className="mt-1.5 " />
        </div>
        <div>
          <BsFillQuestionCircleFill />
        </div>
        <div>
          <FaBell />
        </div>
        <div
          className="flex cursor-pointer text-sm hover:bg-blue-700"
          onClick={handleClickAdmin}
          ref={adminRef}
        >
          The Administrator <IoMdArrowDropdown className="mt-1.5 " />
        </div>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div
          ref={menuRef}
          className="sideBarMenu bg-[#030366] absolute top-20 h-full overflow-visible p-8 flex flex-col"
        >
          <ul className="flex flex-col gap-8">
            <li className="hover:bg-blue-700">My Tasks</li>
            <li className="hover:bg-blue-700">Access</li>
            <li className="hover:bg-blue-700">Manage Identities</li>
          </ul>
        </div>
      )}
      {/* MyWorkMenu */}
      {isOpenMyWork && (
        <div className="myWorkMenu bg-white text-black text-sm absolute top-24 left-32 h-auto overflow-visible p-4 flex flex-col">
          <ul className="flex flex-col gap-4">
            <li className="hover:bg-blue-700 cursor-pointer p-2 ">
              My Access Reviews
            </li>
            <li className="hover:bg-blue-700 cursor-pointer p-2 ">
              Access Requests
            </li>
            <li className="hover:bg-blue-700 cursor-pointer p-2 ">
              Policy Violations
            </li>
            <li className="hover:bg-blue-700 cursor-pointer p-2 ">
              Work Items
            </li>
          </ul>
        </div>
      )}
      {/* Identities */}
      {isOpenIdentites && (
        <div className="identitiesMenu bg-white text-black text-sm absolute top-24 left-56 h-auto overflow-visible p-4 flex flex-col">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Identity Warehouse
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Identity Access History
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Identity Correlation
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Identity Correlation
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Identity Risk Model
            </li>
          </ul>
        </div>
      )}
      {/* Applications */}
      {isOpenApplications && (
        <div className="ApplicationsMenu bg-white text-black text-sm absolute top-24  left-1/4 h-auto overflow-visible  flex flex-col">
          <ul className="flex flex-col gap-4 ">
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Application Definition
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Rapid Setup
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Entitlement Catalog
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Application Risk Model
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Activity Target Categories
            </li>
          </ul>
        </div>
      )}
      {/* Intelligence */}
      {isOpenIntelligence && (
        <div className="IntelligenceMenu bg-white text-black text-sm absolute top-24  left-1/3 h-auto overflow-visible  flex flex-col">
          <ul className="flex flex-col gap-4 ">
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Advanced Analytics
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">Reports</li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Identity Risk Scores
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Application Risk Scores
            </li>
          </ul>
        </div>
      )}
      {/* Setup */}
      {isOpenSetup && (
        <div className="IntelligenceMenu bg-white text-black text-sm absolute w-52  h-auto overflow-visible  flex flex-col">
          <ul className="flex flex-col gap-4 ">
            <li
              className="cursor-pointer p-2 hover:bg-blue-700"
              onClick={() => setOpenSetup(false)}
            >
              Certifications
            </li>
            <li
              className="cursor-pointer p-2 hover:bg-blue-700"
              onClick={() => setOpenSetup(false)}
            >
              Reports
            </li>
            <li
              className="cursor-pointer p-2 hover:bg-blue-700"
              onClick={() => setOpenSetup(false)}
            >
              Rules
            </li>
            <li
              className="cursor-pointer p-2 hover:bg-blue-700"
              onClick={() => setOpenSetup(false)}
            >
              Policies
            </li>
            <li
              className="cursor-pointer p-2 hover:bg-blue-700"
              onClick={() => setOpenSetup(false)}
            >
              Alerts
            </li>
          </ul>
        </div>
      )}
      {/* Gear */}
      {isOpenGear && (
        <div className="gearMenu bg-white text-black text-sm absolute left-2/3  h-auto overflow-visible  flex flex-col">
          <ul className="flex flex-col gap-2 ">
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Global Settings
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Lifecycle Manager
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Compliance Manager
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">
              Administrator Console
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700">Plugins</li>
          </ul>
        </div>
      )}
      {/* Admin */}
      {isOpenAdmin && (
        <div className="adminMenu bg-white text-black text-sm absolute   h-auto overflow-visible  flex flex-col">
          <ul className="flex flex-col gap-2 ">
            <li className="cursor-pointer p-2 hover:bg-blue-700 flex">
              <FaWrench className="mr-2 mt-1" />
              Preferences
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-700 flex">
              <IoLogOut className="mr-2 mt-1" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
