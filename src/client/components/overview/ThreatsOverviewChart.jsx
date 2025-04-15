import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const threatData = [
    { name: "Jan", threats: 1000},
    { name: "Feb", threats: 1500},
    { name: "Mar", threats: 924},
    { name: "Apr", threats: 235},
    { name: "May", threats: 2367},
    { name: "Jun", threats: 2356},
    { name: "Jul", threats: 234},
    { name: "Aug", threats: 475},
    { name: "Sep", threats: 136},
    { name: "Oct", threats: 4357},
    { name: "Nov", threats: 1637},
    { name: "Dec", threats: 1256},
];

export const ThreatsOverviewChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-4' // Added p-4
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Threats Overview</h2>

            <div className={"h-80 w-130"}>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <LineChart data={threatData}>
                        <CartesianGrid strokeDasharray={'3 3'} stroke={'#4b5563'}/>
                        <XAxis dataKey={'name'} stroke={"#9ca3af"}/>
                        <YAxis stroke={"#9ca3af"}/>
                        <Tooltip
                        contentStyle={{backgroundColor: 'rgba(31,41,55,0.8)', borderColor: '#4b5563',}}
                        itemStyle={{ color: "#e5e7eb"}} />

                        <Line
                            type="monotone"
                            dataKey={'threats'}
                            stroke={"#6366f1"}
                            strokeWidth={3}
                            dot={{ fill: "#6366f1", strokeWidth: 2, r: 6}}
                            activeDot={{ r: 8, strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}