import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const stats = [
  { name: 'Mon', users: 240 },
  { name: 'Tue', users: 139 },
  { name: 'Wed', users: 980 },
  { name: 'Thu', users: 390 },
  { name: 'Fri', users: 480 },
];

export default function Barchart() {
  return (
    <ResponsiveContainer width="100%" minWidth={'500px'} height={250}>
      <BarChart data={stats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#63D1F6" />
      </BarChart>
    </ResponsiveContainer>
  );
}

