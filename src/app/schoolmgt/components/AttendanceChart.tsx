'use client';

import Image from 'next/image';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 63,
    absent: 21,
  },
  {
    name: 'Tue',
    present: 34,
    absent: 55,
  },
  {
    name: 'Wed',
    present: 12,
    absent: 62,
  },
  {
    name: 'Thu',
    present: 5,
    absent: 12,
  },
  {
    name: 'Fri',
    present: 52,
    absent: 23,
  },
];

function AttendanceChart() {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>

      <BarChart
        width={500}
        height={300}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        barSize={20}
      >
        <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
        <XAxis
          dataKey='name'
          axisLine={false}
          tick={{ fill: '#d1d5db' }}
          tickLine={false}
        />
        <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
        <Tooltip
          contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
        />
        <Legend
          align='left'
          verticalAlign='top'
          wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
        />
        <Bar
          dataKey='present'
          fill='#8884d8'
          activeBar={<Rectangle fill='pink' stroke='blue' />}
          legendType='circle'
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey='absent'
          fill='#82ca9d'
          activeBar={<Rectangle fill='gold' stroke='purple' />}
          legendType='circle'
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
export default AttendanceChart;
