import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "motion/react"
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import './Navbar.css'
import NavbarMenu from './NavbarMenu'

function Navbar() {
    const [selected, setSelected] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const menuItems = ['Home', 'About Me', 'Projects', 'Creative Works'];
    const locationIndex = {'/home': 0, '/about-me':1, '/projects':2, '/creative-works':3};
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname == '/') {
            setSelected(0);
        }
        else setSelected(locationIndex[location.pathname]);
    },[location])

    function chevronHandle(direction) {
        let val = selected + direction;

        if (val >= 0 && val < menuItems.length) {
            setSelected(val);
        }
        else if (selected == menuItems.length-1 && direction == 1) {
            val = 0;
            setSelected(val);
        }
        else if (selected == 0 && direction == -1) {
            val = menuItems.length-1;
            setSelected(val);
        }

        navigate("/"+menuItems[val].toLowerCase().replace(' ', '-'));
    }

    return (
        <>
        <AnimatePresence>
            {showMenu && <NavbarMenu />}
        </AnimatePresence>
        <div className='navbar-container'>
            <div className="bar">
                <HiMenu className='menu' onClick={() => setShowMenu(!showMenu)}/>

                <span className='item-holder'>
                <FaChevronLeft className='chevron' onClick={() => chevronHandle(-1)}/>
                {
                    menuItems.map((item, index) => {
                        return <Item key={index} index={index} 
                                text={item} setSelected={setSelected} 
                                selected={selected}/>
                    })
                }
                <FaChevronRight className='chevron' onClick={() => chevronHandle(1)}/>
                </span>

                <a href='mailto:lucajmazz@gmail.com' className='rounded-yellow'>Contact</a>
            </div>
        </div>
        </>
    )
}

function SelectedNode() {
    return (
        <motion.div layoutId="pill" className="pill" />
    );
}

function Item({ text, selected = false, setSelected, index }) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>{
            setSelected(index);
            navigate("/"+text.toLowerCase().replace(' ', '-'));
        }} className={`item ${(selected == index) ? 'selected' : ''}`}
        id={`item-${index}`} >
            <p>{text}</p>
            {selected === index && (
                <SelectedNode />
            )}    
        </div>
    );
}

export default Navbar;