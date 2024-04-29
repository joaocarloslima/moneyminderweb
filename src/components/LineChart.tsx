"use client"

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    mes: 'Jan',
    receita: 100,
    despesa: 150,
  },
  {
    mes: 'Fev',
    receita: 180,
    despesa: 130,
  },
  {
    mes: 'Mar',
    receita: 150,
    despesa: 180,
  },
  {
    mes: 'Abr',
    receita: 190,
    despesa: 110,
  },

];

export function LineChartMovimentacoes() {
    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="receita" stroke="#00FF66" />
          <Line type="monotone" dataKey="despesa" stroke="#FF0066" />
        </LineChart>
    );
}
