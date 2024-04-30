import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DirectReports from "../../public/DirectReports.json";
import AccessReview from "../../public/AccessReview.json";
import { GrKey } from "react-icons/gr";
import { IoLockOpenSharp } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";

const Cards = () => {
  return (
    <div>
      <div className="flex justify-around bg-gray-100 ">
        <div className="1 bg-white border-solid border border-gray-300 px-8 py-2 text-center h-20 rounded cursor-pointer hover:bg-sky-200">
          <div className="text-sky-500 flex items-center">
            Policy Violations <IoIosArrowForward />
          </div>
          <div>
            <h1 className="text-2xl text-gray-500">0</h1>
          </div>
        </div>
        <div className="2 bg-white border-solid border border-gray-300 px-8 py-2 text-center h-20 rounded cursor-pointer hover:bg-sky-200">
          <div className="text-sky-500 flex items-center">
            Access Reviews <IoIosArrowForward />
          </div>
          <div>
            <h1 className="text-2xl text-gray-500">0</h1>
          </div>
        </div>
        <div className="3 bg-white border-solid border border-gray-300 px-8 py-2 text-center h-20 rounded cursor-pointer hover:bg-sky-200">
          <div className="text-sky-500 flex items-center">
            Approvals <IoIosArrowForward />
          </div>
          <div>
            <h1 className="text-2xl text-gray-500">0</h1>
          </div>
        </div>
        <div className="4 bg-white border-solid border border-gray-300 px-8 py-2 text-center h-20 rounded flex justify-center items-center cursor-pointer hover:bg-sky-200">
          <div className="text-sky-500 flex items-center">
            Manager User Access <IoIosArrowForward />
          </div>
        </div>
        <div className="5 bg-white border-solid border border-gray-300 px-8 py-2 text-center cursor-pointer hover:bg-sky-200 h-20 rounded flex justify-center items-center">
          <div className="text-sky-500 flex items-center">
            Track My Requests <IoIosArrowForward />
          </div>
        </div>
      </div>

      <div className="second-row bg-gray-100 flex">
        <div className="1 bg-white h-auto w-96 mt-10 ml-4 border-solid border border-gray-300 rounded">
          <div className="flex items-center h-14 bg-gray-50 px-5 border-solid border-b  border-gray-300">
            <h1 className="mr-16 text-lg">Latest Violation Work Items</h1>
            <span className="text-xs text-sky-500 flex">
              Both <MdOutlineKeyboardArrowDown />
            </span>
          </div>
          <div className="h-56 text-center flex justify-center items-center text-xl text-gray-500">
            Currently no data
          </div>
          <div className="bg-gray-50 h-10 flex items-center border-solid border-t border-gray-300 shadow">
            <button className="w-10 h-6 text-xs border-solid border border-gray-300 flex px-2 py-1 text-gray-500 ml-5 ">
              All <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="1 bg-white h-auto w-96 mt-10 ml-10 border-solid border border-gray-300 rounded">
          <div className="flex items-center h-14 bg-gray-50 px-5 border-solid border-b  border-gray-300">
            <h1 className="mr-16 text-lg">Direct Reports</h1>
          </div>
          <div className="h-56 text-sm ml-4 p-2 flex flex-col justify-center gap-4 text-sky-500 ">
            {DirectReports.map((user) => (
              <div key={user.id} className=" flex justify-between">
                <div className="hover:bg-blue-700 hover:text-white cursor-pointer">
                  <strong>{user.name}</strong>
                </div>
                <div className="flex mr-4 flex-row gap-6">
                  <div className="icon-container border-solid border border-gray-300 h-6 w-8 px-2 py-1">
                    <GrKey />
                  </div>
                  <div className="icon-container border-solid border border-gray-300 h-6 w-8 px-2 py-1">
                    <IoLockOpenSharp />
                  </div>
                  <div className="icon-container border-solid border border-gray-300 h-6 w-8 px-2 py-1">
                    <FaFolder />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 h-10 flex items-center border-solid border-t border-gray-300 shadow">
            <button className="w-10 h-6 text-xs border-solid border border-gray-300 flex px-2 py-1 text-gray-500 ml-5 ">
              All <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="1 bg-white h-auto w-96 mt-10 ml-10 border-solid border border-gray-300 rounded">
          <div className="flex items-center h-14 bg-gray-50 px-5 border-solid border-b  border-gray-300">
            <h1 className="mr-16 text-lg">Certification Campaigns</h1>
          </div>
          <div className="h-56 text-center flex justify-center items-center text-xl text-gray-500">
            Currently no data
          </div>
          <div className="bg-gray-50 h-10 flex items-center border-solid border-t border-gray-300 shadow">
            <button className="w-10 h-6 text-xs border-solid border border-gray-300 flex px-2 py-1 text-gray-500 ml-5 ">
              All <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      <div className="third-row bg-gray-100 flex">
        <div className="1 bg-white h-auto w-96 mt-10 ml-4 border-solid border border-gray-300 rounded">
          <div className="flex items-center h-14 bg-gray-50 px-5 border-solid border-b  border-gray-300">
            <h1 className="mr-16 text-lg">Risk Score</h1>
          </div>
          <div className="h-56 text-center flex justify-center items-center text-xl text-gray-500">
            Currently no data
          </div>
          <div className="bg-gray-50 h-10 flex items-center border-solid border-t border-gray-300 shadow">
            <button className="w-10 h-6 text-xs border-solid border border-gray-300 flex px-2 py-1 text-gray-500 ml-5 ">
              All <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="1 bg-white h-auto w-auto mt-10 ml-10 border-solid border border-gray-300 rounded">
          <div className="flex items-center h-14 bg-gray-50 px-5 border-solid border-b  border-gray-300">
            <h1 className="mr-16 text-lg">My Access Reviews</h1>
          </div>
          <div className="h-56  text-gray-500">
            <table className="text-xs flex-col justify-center items-center text-left mt-8 ml-4 mr-4">
              <thead>
                <tr className="text-gray-600 bg-gray-200">
                  <th>Display Name</th>
                  <th>Description</th>
                  <th>Account Name</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {AccessReview.map((user) => (
                  <tr key={user.account_name} className="text-xs">
                    <td className="text-sky-500">
                      <strong>{user.name}</strong>
                    </td>
                    <td>
                      <strong>{user.description}</strong>
                    </td>
                    <td className="pb-4">
                      <strong>{user.account_name}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 h-10 flex items-center border-solid border-t border-gray-300 shadow">
            <button className="w-10 h-6 text-xs border-solid border border-gray-300 flex px-2 py-1 text-gray-500 ml-5 ">
              All <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="1 bg-white h-auto w-96 mt-10 ml-10 border-solid border border-gray-300 rounded">
          <div className="flex items-center h-14 bg-gray-50 px-5 border-solid border-b  border-gray-300">
            <h1 className="mr-16 text-lg">Certification Campaigns</h1>
          </div>
          <div className="h-56 text-center flex justify-center items-center text-xl text-gray-500">
            Currently no data
          </div>
          <div className="bg-gray-50 h-10 flex items-center border-solid border-t border-gray-300 shadow">
            <button className="w-10 h-6 text-xs border-solid border border-gray-300 flex px-2 py-1 text-gray-500 ml-5 ">
              All <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
