import { BarChart2, ShieldAlert, Menu, Settings } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowLogoSvg from '../assets/arrow_logo.svg';

const SIDEBAR_ITEMS = [
    {
        name: "Overview",
        icon: BarChart2,
        color: "#6366f1",
        href: "/",
    },
    { name: "Threats", icon: ShieldAlert, color: "#E34234", href: "/threats" },
    { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
                isSidebarOpen ? "w-64" : "w-20"
            }`}
            animate={{width: isSidebarOpen ? 256 : 80}}
        >
            <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
                {/* TOP SECTION WITH MENU BUTTON AND LOGO */}
                <div className="flex items-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
                    >
                        <Menu size={24} />
                    </motion.button>

                    <AnimatePresence>
                        {isSidebarOpen && (
                            <motion.div
                                className="flex items-center"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.1,
                                        duration: 0.2
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -10,
                                    transition: {
                                        duration: 0.15
                                    }
                                }}
                            >
                                <img
                                    src={ArrowLogoSvg}
                                    className='w-6 h-6 ml-3'
                                    alt="xSIEM Logo"
                                />
                                <motion.span
                                    className="ml-2 text-lg font-semibold whitespace-nowrap"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div>xSIEM</div>
                                    <div className='font-extralight text-xs'>Security simplified</div>
                                </motion.span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <nav className='mt-8 flex-grow'>
                    {SIDEBAR_ITEMS.map((item) => (
                        <Link key={item.href} to={item.href}>
                            <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className='ml-4 whitespace-nowrap'
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>

                {/* OPTIONAL BOTTOM LOGO SECTION (can be removed if redundant) */}
                <AnimatePresence>
                    {isSidebarOpen && (
                        <motion.div
                            className="mt-auto pt-4 border-t border-gray-700"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 0.3
                                }
                            }}
                            exit={{
                                opacity: 0,
                                y: 10,
                                transition: {
                                    duration: 0.2
                                }
                            }}
                        >
                            <div className="flex items-center justify-center p-2">
                                <div className="flex items-center">
                                    <img src={ArrowLogoSvg} className='w-8 h-8 mr-2' alt="xSIEM Logo" />
                                    <motion.span
                                        className="text-lg font-semibold"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        xSIEM
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Sidebar;