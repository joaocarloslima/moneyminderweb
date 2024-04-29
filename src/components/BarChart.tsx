"use client"

import { getTotalPorCategoria } from '@/app/actions/movimentacoes/dashboard';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Label, Legend, Rectangle, XAxis, YAxis } from 'recharts';


export function BarChartCategorias() {
    const [data, setData] = useState([])

    useEffect(() => {
        getTotalPorCategoria().then(data =>
            setData(data)
        )
    }, [])

    return (
        <BarChart
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
          <Label />
          <XAxis dataKey="categoria" />
          <YAxis />
          <Legend />
          <Bar dataKey="valor" fill="#FF0066" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
    );
  }


