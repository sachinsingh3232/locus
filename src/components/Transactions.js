import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
const Transactions = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const categories = [
    "SmartPhones",
    "Laptops",
    "Mobiles",
    "Televisions",
    "Headphones",
    "SmartWatches",
    "Drones",
    "Accessories",
  ];
  const [month, setMonth] = useState(months[new Date().getMonth()]);
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <div>
        <p className="text-bold text-2xl px-4">Transactions | {month}</p>
        <div className="flex flex-row justify-between px-3 align-center w-full">
          <div className="w-1/5 align-center justify-center  bg-gray-100 m-3 rounded-md p-2">
            <SearchIcon size={28} className="pb-1 text-gray-700 " />
            <input
              placeholder="Order/Transactions Id"
              className="bg-transparent text-gray-700 outline-none"
            />
          </div>
          <div className="flex flex-row w-1/4 gap-16">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                label="Month"
                onChange={handleChange}
              >
                {months.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleCategoryChange}
              >
                {categories.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      John Brown
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      45
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      New York No. 1 Lake Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      New York No. 1 Lake Park
                    </td>
                  </tr>

                  <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Jim Green
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      27
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      London No. 1 Lake Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      London No. 1 Lake Park
                    </td>
                  </tr>

                  <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Joe Black
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      31
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Sidney No. 1 Lake Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Sidney No. 1 Lake Park
                    </td>
                  </tr>

                  <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Edward King
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      16
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      LA No. 1 Lake Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      LA No. 1 Lake Park
                    </td>
                  </tr>

                  <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Jim Red
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      45
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Melbourne No. 1 Lake Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Melbourne No. 1 Lake Park
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
