import './AboutMe.css'
import yorkLogo from '../../assets/york-u-logo.png';
import variHall from '../../assets/vari-hall.png';
import idImage from '../../assets/id-image.jpg';
import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import LinePattern from '../patterns/LinePattern';
import PatternDivider from '../dividers/PatternDivider'

function AboutMe() {
    return (
        <div className='about-me-container mb-40'>
            <h1>About Me</h1>

            <div className='flex flex-row justify-center items-center mb-5 mx-50'>
                <span className='p-10 jetbrains-mono text-xl'>Hi, I’m Luca.
                        I’m a <b className='font-extrabold'>Computer Science</b> student at <b className='font-extrabold'>York University</b> with an interdisciplinary background in <b className='font-extrabold'>art and design</b>. I specialize in building visually polished, interactive coded experiences backed by strong technical foundations.
                        <div className='m-5'/>
                        I enjoy working at the intersection of design and development, translating creative ideas into clean, functional, and scalable code.
                </span>
                <motion.div 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                exit={{ scale: 0.5 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className='portrait-before shrink-0  m-5'>
                    <div className='portrait shrink-0 flex flex-col justify-center items-center'>
                        <img src=''></img>
                        <p className='mt-4 jetbrains-mono text-xl text-black'> Luca Mazzotta</p>
                    </div>
                </motion.div>
            </div>

            <LinePattern className={'pattern-bg'}>
            <div className='px-60 py-20 flex flex-row justify-center items-center'>
                <div className='text-box text-xl jetbrains-mono'>
                    <h2 className='text-3xl jetbrains-mono mb-3'> 
                        Education
                        <motion.hr
                            className='h-1'
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true, amount: 0.5 }}
                            exit={{ width: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }} />
                    </h2>
                    I am a York University student currently pursuing a <b>Lassonde School of Engineering,
                    B.Sc., Special Honours Computer Science</b> degree. I began my studies in Digital Media, developing a strong foundation in design and user-centered thinking, before transferring into Computer Science to strengthen my technical skill set. This interdisciplinary background allows me to combine creative problem-solving with strong programming skills while focusing on practical, real-world projects.
                </div>
            <div className='scale-130'><IdCard /></div>
            </div>
            </LinePattern>

            <div className='eduboxes flex flex-row justify-center align-middle'>
                <motion.div className='flex flex-row justify-center align-middle'
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                <div className='info-card m-20 p-5' 
                onClick={() => open('https://ampd.yorku.ca/department-of-computational-arts/digital-media/', '_blank')} title='Visit York U Digital Media page'>
                    <p className='jetbrains-mono font-extrabold mb-2 text-gray-900 text-2xl'>B.A Digital Media</p>
                    <p className='text-gray-500 mb-2'>York University, 2023-2024</p>
                    <hr className='h-0.5'/>
                    <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-600">
                        <li>UI / UX design principles & user-centered workflows</li>
                        <li>Graphic design, branding, and visual systems</li>
                        <li>Interactivity of computing and society</li>
                        <li>Creative problem-solving & design iteration</li>
                        <li>Collaboration on interdisciplinary creative projects</li>
                    </ul>
                </div>
                <div className='info-card m-20 p-5' 
                onClick={() => open('https://lassonde.yorku.ca/academics/computer-science', '_blank')} title='Visit Lassonde Computer Science page'>
                    <p className='jetbrains-mono font-extrabold mb-2 text-gray-900 text-2xl'>B.Sc. Special Honours Computer Science</p>
                    <p className='text-gray-500 mb-2'>York University, 2024-Present</p>
                    <hr className='h-0.5'/>
                    <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-600">
                        <li>Programming fundamentals (Java, JavaScript, Python)</li>
                        <li>Data structures, algorithms, and problem solving</li>
                        <li>Object-oriented design & software architecture</li>
                        <li>Web development with modern frameworks (React)</li>
                        <li>Mathematical foundations for computing</li>
                    </ul>
                </div>
                </motion.div>
            </div>

            <PatternDivider />

        </div>
    );
}

function IdCard() {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [-15, 15]), {
        stiffness: 300,
        damping: 30
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [15, -15]), {
        stiffness: 300,
        damping: 30
    });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) / (rect.width / 2));
        y.set((e.clientY - centerY) / (rect.height / 2));

        // Get mouse position relative to card
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <motion.div 
            onClick={() => open('https://www.yorku.ca', '_blank')}
            title="Visit York University"
            className='card shrink-0 mx-15'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
                position: 'relative'
            }}
        >
            {/* Card thickness/edge */}
            <div
                style={{
                    position: 'absolute',
                    top: '1px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                    borderRadius: '.7rem',
                    background: 'linear-gradient(135deg, #8B0000 0%, #5a0000 100%)',
                    transform: 'translateZ(-22px)',
                    transformStyle: 'preserve-3d',
                    pointerEvents: 'none',
                    zIndex: -1
                }}
            />
            {mousePosition.x !== 0 && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '.5rem',
                        background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3), transparent)`,
                        pointerEvents: 'none',
                        zIndex: 10
                    }}
                />
            )}
            <img className='york-logo' src={yorkLogo} alt='york-u-logo' />
            <img className='building-bar' src={variHall} alt='vari-hall' />
            <div className='photo-mask'><img className='id-photo' src={idImage} alt='id-image'/></div>
            <span>
                <p><b>Luca Mazzotta</b></p>
                <p>B.sc. Computer Science</p>
            </span>
        </motion.div>
    )
}

export default AboutMe;