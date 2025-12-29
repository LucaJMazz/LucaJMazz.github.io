import './NavbarMenu.css'
import { motion } from 'motion/react';

function NavbarMenu() {

    return (
        <motion.div className='menu-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
            
        </motion.div>
    )
}

export default NavbarMenu;