import { PieChart, Pie, ResponsiveContainer, Cell, Sector } from 'recharts';
import { useCallback, useState } from 'react';
import style from './ComparativePieChart.module.scss';

const COLORS = [
	'#0088FE',
	'#00C49F',
	'#fc2222',
	'#FFBB28',
	'#FF8042',
	'#c922fc',
];

const renderActiveShape = props => {
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
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 0) * cos;
	const sy = cy + (outerRadius + 0) * sin;
	const mx = cx + (outerRadius + 10) * cos;
	const my = cy + (outerRadius + 10) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<text
				x={cx}
				y={cy}
				dy={8}
				textAnchor='middle'
				fontSize={13}
				fontWeight={600}
			>
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
				fill='none'
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 8}
				y={ey - 16}
				dy={18}
				textAnchor={textAnchor}
				fontWeight={600}
				fontSize={13}
			>
				{`${(percent * 100).toFixed(2)}%`}
			</text>
		</g>
	);
};

// Componente principal
/*
	La propiedad data recibe el arreglo completo de la información que queremos parsear, tener en cuenta que este compoenente trabaja con toda la informacion junta
	La propiedad dataKey recibe el nombre de la propiedad que queremos mostrar
	La propiedad Title recibe el titulo que encabezará el chart
 */
const ComparativePieChart = ({ data, dataKey, label }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const onPieEnter = useCallback(
		(_, index) => {
			setActiveIndex(index);
		},
		[setActiveIndex]
	);
	const prepData = [];
	data.forEach(item => {
		prepData.push({
			name: item.name,
			value: item[dataKey].this_week,
		});
	});

	return (
		<div className={style.container}>
			<div className={style.title}>
				<h1>{label?.title}</h1>
				<p>{label?.subtitle}</p>
			</div>

			<div className={style.body}>
				<div className={style.list}>
					{prepData.map((item, index) => {
						return (
							<div className={style.item} key={index}>
								<div
									style={{
										backgroundColor: COLORS[index % COLORS.length],
									}}
								/>
								<p>
									{item.name}: <b>{item.value}</b>
								</p>
							</div>
						);
					})}
				</div>
				<div className={style.pieContainer}>
					<ResponsiveContainer height={200}>
						<PieChart>
							<Pie
								activeIndex={activeIndex}
								activeShape={renderActiveShape}
								onMouseEnter={onPieEnter}
								cy={90}
								cx={140}
								data={prepData}
								innerRadius={60}
								paddingAngle={3}
								outerRadius={75}
								dataKey='value'
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default ComparativePieChart;
