/****
 * author:md atiqul islam
 * This file contain mobile navbar
 * left side 3 dots click and open a modal of
 * login , signup, cart, wishlist,
 */

import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BsCart, BsHeart } from "react-icons/bs";
const MobileRightbar = () => {
  return (
    <div className="">
      <label htmlFor="my-modal-4" className="">
        <HiDotsVertical className={`mt-1  ml-4`} size={35} />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <div
          className=" -mt-2 bg-white w-[280px] h-[300px]
        "
        >
          <p className="w-full text-xl bg-slate-800 p-5 text-white">
            Fast Grocer
          </p>
          <div className="p-4">
            <div className="mt-3 flex items-center  ">
              <p>
                <BiLogIn size={30} />
              </p>
              <p className="text-[17px] ml-2 text-black">Login</p>
            </div>
            <div className="mt-5 flex items-center  ">
              <p>
                <MdPersonAddAlt1 size={30} />
              </p>
              <p className="text-[17px] ml-2 text-black">Sign Up</p>
            </div>
            <div className="mt-5  ">
              <div className="flex flex-row items-center">
                <p>
                  <BsHeart size={25} />
                </p>
                <div className="badge -mt-5 -ml-[8px] bg-[#F6A64D] border-none rounded-full w-[20px] h-[20px] font-bold">
                  0
                </div>
                <div className="">
                  <p className="text-[17px] ml-2 text-black">WhishList</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row mt-5">
                <BsCart size={25} />

                <div className="badge -mt-2  -ml-[8px] bg-[#92B137] border-none rounded-full w-[20px] h-[20px] font-bold">
                  0
                </div>
                <div>
                  <p className="text-[17px] ml-2 text-black">Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default MobileRightbar;