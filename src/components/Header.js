import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  return (
    <div className="w-full justify-between  flex-row flex border-b">
      <div>
        <p>Hello</p>
      </div>
      <div className=" align-center justify-center  bg-gray-100 m-3 rounded-md p-2">
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
         */}
        <SearchIcon size={28} className="pb-1 text-gray-700 " />
        <input
          placeholder="Search items"
          className="bg-transparent text-gray-700 outline-none"
        />
      </div>
      <div className="justify-around w-1/4 flex-row flex align-center  pt-4">
        <span className="text-gray-700">For you</span>
        <span className="text-red-400">Logout</span>
        <AccountCircleIcon
          className="text-gray-500 text-base pb-2"
          style={{ fontSize: 40 }}
        />
      </div>
    </div>
  );
};

export default Header;
