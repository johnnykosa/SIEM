import Header from "../components/common/Header.jsx";
import {motion} from "framer-motion";
import StatCard from "../components/common/StatCard.jsx";
import {Zap} from "lucide-react";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart.jsx";
import ThreatsTable from "../components/threats/ThreatsTable.jsx";

export const ThreatPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Threats" />

            <main className={'max-w-7xl mx-auto py-6 px-4 lg:px-8'}>
                {/* STATS */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>

                    <StatCard name="Total Threats" icon={Zap} value={"100"} color={'#6366f1'}/>
                    <StatCard name="Severe Threats" icon={Zap} value={"15"} color={'#e76262'}/>
                    <StatCard name="Medium Threats" icon={Zap} value={"45"} color={'#e79062'}/>
                    <StatCard name="Low Threats" icon={Zap} value={"40"} color={'#e7c162'}/>
                </motion.div>

                {/* Product Table */}
                <ThreatsTable/>
            </main>
        </div>
    )
}

export default ThreatPage