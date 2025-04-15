// Importing the motion component from framer-motion for animations.
import { motion } from "framer-motion";

// Importing the Icon type from lucide-react to render dynamic icons.
import { Icon } from "lucide-react";

// Defining the StatCard component as an arrow function.
// It takes in four props: name (string), icon (icon component), value (number or string), and color (string).
export const StatCard = ({ name, icon: Icon, value, color }) => {
    return (
        // The motion.div is an animated div that supports hover transitions using Framer Motion.
        <motion.div
            // Styling: semi-transparent dark background with blur, border, shadow, and rounded corners.
            className={'bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'}

            // Animation on hover: slightly move up and add a stronger box shadow.
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
        >
            {/* Content container with padding */}
            <div className={"px-4 py-5 sm:p-6"}>

                {/* Row containing the icon and label text */}
                <span className={'flex items-center text-sm font-medium text-gray-400'}>
                    {/* Render the passed-in icon component with size and dynamic color */}
                    <Icon
                        size={20}
                        className="mr-2" // Margin to the right for spacing from the label
                        style={{ color }} // Color comes from the prop
                    />
                    {name} {/* Display the name/label next to the icon */}
                </span>

                {/* Display the main statistic or value with larger, bolder text */}
                <p className={'mt-1 text-3xl font-semibold text-gray-100'}>
                    {value}
                </p>
            </div>
        </motion.div>
    )
}

// Export the component as default for easier imports elsewhere.
export default StatCard;
