import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SmallHeader from "./SmallHeader";

const Statistics = () => {
  const chart = useLoaderData();
  const data = chart.data;
  return (
    <div>
      <div className="hidden md:block">
        <SmallHeader>All Results</SmallHeader>
      </div>
      <ResponsiveContainer width="90%" height={500} className="flex justify-center my-12">
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3.3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
