const Test = () => {
	const swapping = nums => {
		if (nums.length < 1 || nums.length > 6) {
			return 'The array does not meet the requirements';
		}

		// Buscamos numeros repetidos
		const tempArray = [];
		for (let i = 0; i < nums.length; i++) {
			if (nums[i + 1] === nums[i] || nums[i] < -10 || nums[i] > 10) {
				tempArray.push(nums[i]);
			}
		}
		if (tempArray.length) return 'The array does not meet the requirements.';

		// Al cumplir todos los requisitos se realiza la permutación
		const result = [];
		const permute = (i, nums) => {
			if (i === nums.length) {
				result.push(nums.slice());
				return;
			}
			for (let j = i; j < nums.length; j++) {
				[nums[i], nums[j]] = [nums[j], nums[i]];
				permute(i + 1, nums);
				[nums[i], nums[j]] = [nums[j], nums[i]];
			}
		};
		permute(0, nums);
		return result;
	};

	console.log(swapping([1, 2, 3]));

	return <h1> Estp es Test</h1>;
};
export default Test;

// Pie Chart
/*
import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 0) * cos;
  const sy = cy + (outerRadius + 0) * sin;
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius + 10) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fontSize={16} fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 8}
        y={ey - 16}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
*/
