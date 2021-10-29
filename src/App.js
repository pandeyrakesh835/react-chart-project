import React from "react";
import index from "./index";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,AreaChart , Area ,BarChart ,Bar
} from "recharts";

const pdata = [
  { Name: "python", Student: "170", fee: 140 },
  { Name: "Node js", Student: "110", fee: 170 },
  { Name: "Java", Student: "140", fee: 120 },
  { Name: "C++", Student: "98", fee: 190 },
  { Name: "React", Student: "120", fee: 170 },
];
function App() {
  return (
    <>
    <div>
      <h1 className="text-center text-decoration-underline bg-danger text-white chart-heading">
        Line Chart
      </h1>
      <ResponsiveContainer width="90%" buttom="5" top="10" aspect={3}>
        <AreaChart data={pdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis  tickFormatter={(value)=>value+ ' Programing'} dataKey="Name" interval={"preserveStartEnd"} />
          <YAxis/>
          <Tooltip itemStyle={{fontFamily:'cursive'}} contentStyle={{backgroundColor:'yellow'}}/>
          <Area dataKey="Student" type='monotone' stroke="red" activeDot={{radius:15}} />
          <Area dataKey="fee"type='monotone' stroke="blue" activeDot={{radius:15}} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
        <div>
        <h1 className="text-center text-decoration-underline bg-danger text-white chart-heading">
          Line Chart
        </h1>
        <ResponsiveContainer width="90%" buttom="5" top="10" aspect={3}>
          <LineChart data={pdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis  tickFormatter={(value)=>value+ ' Programing'} dataKey="Name" interval={"preserveStartEnd"} />
            <YAxis/>
            <Tooltip itemStyle={{fontFamily:'cursive'}} contentStyle={{backgroundColor:'yellow'}}/>
            <Line dataKey="Student" type='monotone' stroke="red" activeDot={{radius:15}} />
            <Line dataKey="fee"type='monotone' stroke="blue" activeDot={{radius:15}} />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
        <div>
        <h1 className="text-center text-decoration-underline bg-danger text-white chart-heading">
          Line Chart
        </h1>
        <ResponsiveContainer width="90%" buttom="5" top="10" aspect={3}>
          <BarChart data={pdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis  tickFormatter={(value)=>value+ ' Programing'} dataKey="Name" interval={"preserveStartEnd"} />
            <YAxis/>
            <Tooltip itemStyle={{fontFamily:'cursive'}} contentStyle={{backgroundColor:'yellow'}}/>
            <Bar dataKey="Student" type='monotone' stroke="red" fill="#82ca9d" activeDot={{radius:15}} />
            <Bar dataKey="fee"type='monotone' stroke="blue" fill="#ffc658" activeDot={{radius:15}} />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      </>
  );
}
export default App;
