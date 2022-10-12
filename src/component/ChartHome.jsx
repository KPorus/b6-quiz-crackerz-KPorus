import React,{useContext} from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import {ProductContext } from '../layout/Main'
const ChartHome = () => {
  const context= useContext(ProductContext);
  const data01 = [
    { name: context[0].name, value: context[0].total },
    { name: context[1].name, value: context[1].total },
    { name: context[2].name, value: context[2].total },
    { name: context[3].name, value: context[3].total }
  ];

  // for(let i = 0;i<context.length;i++)
  // {
  //   console.log(context[i].total)
  //   data01[i].total.push(context[i].total)
  // }
  console.log(data01)
  return (
    <div>
      <h1 className="font-bold text-slate-800 text-center m-5 text-2xl">Chart of total question of various topic.</h1>
     <PieChart width={800} height={400}>
     <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />

        <Tooltip />
      </PieChart> 
    </div>
  );
};

export default ChartHome;