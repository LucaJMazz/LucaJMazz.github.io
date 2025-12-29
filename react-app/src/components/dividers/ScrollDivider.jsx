import './ScrollDivider.css'
import React, { useEffect, useRef, useState } from 'react';

function ScrollDivider() {
    const scrollRef = useRef(null);
    const [scrollWidth, setScrollWidth] = useState(0);

    const items = [
        'Programming',
        'Graphic Design',
        'App Development',
        'Web App Creation',
        'Front+Back End Development',
    ];

    useEffect(() => {
        // Calculate the width of one complete set
        if (scrollRef.current) {
            const firstChild = scrollRef.current.firstElementChild;
            if (firstChild) {
                setScrollWidth(firstChild.offsetWidth);
            }
        }

        // Recalculate on window resize
        const handleResize = () => {
            if (scrollRef.current) {
                const firstChild = scrollRef.current.firstElementChild;
                if (firstChild) {
                    setScrollWidth(firstChild.offsetWidth);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <hr className='h-2' />

            <div className="flex items-center justify-centerover flow-hidden">
                <div className="relative w-full overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex animate-scroll"
                        style={{
                            '--scroll-width': scrollWidth ? `${scrollWidth}px` : '0px',
                            '--scroll-duration': scrollWidth ? `${scrollWidth / 50}s` : '20s'
                        }}
                    >
                        {/* Render items twice for seamless scrolling */}
                        {[...Array(2)].map((_, setIndex) => (
                            <div key={setIndex} className="flex shrink-0">
                                {items.map((item, index) => (
                                    <React.Fragment key={`${setIndex}-${index}`}>
                                        <div className="scroll-text shrink-0 px-8 text-6xl whitespace-nowrap">
                                            {item}
                                        </div>
                                        <span className="scroll-text shrink-0 text-6xl whitespace-nowrap">
                                            •
                                        </span>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <hr className='h-2' />
        </>
    )
}

export default ScrollDivider
