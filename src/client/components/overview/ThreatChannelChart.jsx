import { motion } from "framer-motion";
import {
    BarChart,
    Bar,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const THREAT_DATA = [
    { name: "Severe", value: 15 },
    { name: "Medium", value: 45 },
    { name: "Low", value: 40 }
];

const COLORS = ["#e76262", "#e79062", "#e7c162"];

const CUSTOM_LEGEND = [
    { name: "Severe", color: "#e76262" },
    { name: "Medium", color: "#e79062" },
    { name: "Low", color: "#e7c162" }
];

export const ThreatChannelChart = () => {
    return (
        <motion.div
            className="w-full bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-xl font-semibold mb-4 text-gray-100">Threat Chart</h2>

            <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={THREAT_DATA}
                        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#e5e7eb" }}
                        />
                        <Bar dataKey="value">
                            {THREAT_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Custom Legend */}
            <div className="flex mt-4 space-x-6 justify-center">
                {CUSTOM_LEGEND.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div
                            className="w-4 h-4 rounded-sm"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-gray-300">{item.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
