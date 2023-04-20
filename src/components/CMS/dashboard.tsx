import Views from '@assets/logo/views.svg';
import Revenue from '@assets/logo/revenue.svg';
import Viewer from '@assets/logo/viewers.svg';
import Eye from '@assets/logo/eye.svg';
import Dollar from '@assets/logo/dollar.svg';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';

const data = [
  {
    name: 'Shrawan',
    uv: 2780,
    rv: 3000,
    sub: 'Insight Project Management',
  },
  {
    name: 'Baisakh',
    uv: 5000,
    rv: 6000,
    sub: 'Insight Data Science',
  },
  {
    name: 'Jestha',
    uv: 3500,
    rv: 4000,
    sub: 'Insight Big Data',
  },
  {
    name: 'Asar',
    uv: 4500,
    rv: 5000,
    sub: 'Old is Gold Solutions',
  },
];

const DashBoard = () => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-row gap-32 p-4 min-w-full justify-around">
        <div id="Views" className="space-y-8 bg-bg-color-1 p-4 rounded-xl text-slate-50 w-80">
          <div className="space-y-0">
            <div className="flex flex-row justify-around ">
              <h1>1200</h1>
              <h1>400</h1>
              <h1>1400</h1>
            </div>
            <div className="flex flex-row justify-around text-buttons-secondary ">
              <h1>Notes</h1>
              <h1>Slides</h1>
              <h1>Others</h1>
            </div>
          </div>
          <div className="flex justify-start pl-6 gap-4">
            <img src={Views} alt="views"></img>
            <div className="flex flex-col text-slate-50">
              <h1 className="text-buttons-secondary">Views</h1>
              <h1>3000</h1>
            </div>
          </div>
        </div>
        <div id="Revenue" className=" gap-3 bg-bg-color-1 p-4 rounded-xl text-slate-50 w-80">
          <LineChart width={300} height={100} data={data}>
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="rv" stroke="#42FF00" />
          </LineChart>
          <div className="flex flex-row gap-6">
            <div className="mt-2">
              <img src={Revenue} alt="views"></img>
            </div>
            <div>
              <h1 className="text-buttons-secondary">Revenue</h1>
              <h1>32</h1>
            </div>
          </div>
        </div>
        <div id="Viewers" className=" gap-3 bg-bg-color-1 p-4 rounded-xl text-slate-50 w-80">
          <LineChart width={300} height={100} data={data}>
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="uv" stroke="#42FF00" />
          </LineChart>
          <div className="flex flex-row gap-6">
            <div className="mt-2">
              <img src={Viewer} alt="views"></img>
            </div>
            <div>
              <h1 className="text-buttons-secondary">Revenue</h1>
              <h1>32</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-14">
        <div
          id="Revenue_vs_Views"
          className="basis-2/3 space-y-8 bg-bg-color-1 p-4 rounded-xl text-slate-50 w-80"
        >
          Revenue vs Views
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#42FF00" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#42FF00" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#40C4FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#40C4FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis />
            <CartesianGrid horizontal vertical={false} strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#42FF00"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="rv"
              stroke="#40C4FF"
              fillOpacity={1}
              fill="url(#colorRv)"
            />
          </AreaChart>
        </div>
        <div className="bg-bg-color-1 p-2 space-y-2 rounded-lg text-slate-600 divide-gray-500 w-1/4">
          <h1 className="text-slate-100">Top Contents</h1>
          {data.map((d, index) => {
            return (
              <section key={index}>
                <h1>{d.sub}</h1>
                <div className="flex flex-row gap-1">
                  <img src={Eye} alt="eye" />
                  <div
                    className={`border-green-400 border-t-2 w-[${Math.floor(
                      (d.uv / 5000) * 300,
                    )}px] mt-3`}
                  ></div>
                  <h1>{Math.floor((d.uv / 5000) * 300)}</h1>
                </div>
                <div className="flex flex-row gap-1">
                  <img src={Dollar} alt="dollar" />
                  <div
                    className={`border-blue-400 border-t-2 w-[${Math.floor(
                      (d.rv / 5000) * 300,
                    )}px] mt-3`}
                  ></div>
                  <h1>{Math.floor((d.rv / 5000) * 300)}</h1>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
