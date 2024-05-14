import React from "react";
import { Button } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useNavigate } from "react-router-dom";

const InfoSection = () => {
  const navigate = useNavigate();

  const data2 = [
    { label: "SmartPhones", value: 20 },
    { label: "Laptops", value: 30 },
    { label: "Drones", value: 40 },
  ];

  return (
    <div>
      <div className="justify-between flex flex-row w-full px-3 align-center my-6">
        <p className="text-bold text-4xl">Overview</p>
        <div>
          <Button variant="contained" onClick={() => {
            navigate("/addProduct")
          }}>
            Add Product
          </Button>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between pr-10 pl-4 rounded-lg">
        <div className="shadow-md w-1/4">
          <p>Total Sales</p>
          <p>212323423423</p>
        </div>
        <div className="w-1/4 shadow-md">
          <p>Total Products Sold</p>
          <p>12321</p>
        </div>
        <div className="w-1/4 shadow-md">
          <p>Chart</p>
          <PieChart
            skipAnimation
            colors={["yellow", "#bdbdbd", "#4caf50"]}
            series={[
              {
                paddingAngle: 2,
                cornerRadius: 5,
                outerRadius: 60,
                innerRadius: 40,
                data: data2,
              },
            ]}
            height={150}
            slotProps={{
              legend: { hidden: true },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
