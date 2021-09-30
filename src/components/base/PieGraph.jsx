import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function PieGraph({ data, colors, label, categoryToggle, columnsSpan }) {
  return (
    <div
      className={`flex flex-col w-full h-full rounded-2xl shadow-xl py-2 mt-8 ${columnsSpan}`}
    >
      <div className="flex justify-around mb-4">
        <h2 className="capitalize">{label}</h2>
        {categoryToggle}
      </div>
      <ResponsiveContainer
        width="75%"
        height="75%"
        className="m-auto flex justify-center items-center"
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieGraph;