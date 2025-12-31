import './Projects.css'
import minesweeperImg from '../../assets/minesweeper++.png'
import portfolioImg from '../../assets/portfolio.png'
import minuteMathImg from '../../assets/minutemath.png'
import sniffEmOutImg from '../../assets/sniffemout.png'
import LinePattern from '../patterns/LinePattern';

function Projects() {
    return (
        <div className='projects-container flex flex-col justify-center items-center'>
            <h1 className='mt-8 mb-8'>Projects</h1>
            <LinePattern className={'pattern-bg'}>
            <div className='py-15 w-dvw flex justify-center items-center'>
            <div className='grid grid-cols-2 grid-rows-2 gap-15'>
                <ProjectBox name={'Portfolio Site'} 
                desc={'Portfolio site for my personal applications'} 
                tools={['ReactJs + Vite', 'Tailwind CSS', 'framer-motion', 'Fimga']}
                imgSrc={portfolioImg}
                link={'/'}
                span={'Designed and developed a fully responsive portfolio using React and Vite, styled with Tailwind CSS. Implemented smooth UI animations and page transitions with Framer Motion, focusing on clean component structure, performance, and modern frontend best practices.'}/>

                <ProjectBox name={'Minesweeper++'} 
                desc={'A Minesweeper game with different modes for a new experience'} 
                tools={['ReactJs + Vite', 'Tailwind CSS', 'Redux', 'JavScript', 'Netlify']}
                imgSrc={minesweeperImg}
                link={'https://minesweeper-plus-plus.netlify.app'}
                span={'Built a feature-rich Minesweeper clone using React and Redux for centralized game state management. Implemented multiple game modes, dynamic board generation, and efficient state updates, then deployed the project using Netlify.'}
                />

                <ProjectBox name={'Minute Math'} 
                desc={'A Wordle-like game with daily math problems'} 
                tools={['ReactJs + Vite', 'Firebase', 'JavScript', 'Netlify']}
                imgSrc={minuteMathImg}
                link={'https://minutemath.netlify.app'}
                span={'Developed a daily math puzzle game inspired by Wordle, using React for the UI and Firebase for backend services such as data storage and future authentication. Focused on deterministic daily challenges, clean UX, and scalable architecture.'}
                />

                <ProjectBox name={'Sniff \'em out'} 
                desc={'A mobile app where a group of people try to find who the odd man out is'} 
                tools={['Swift', 'XCode', 'Figma']}
                imgSrc={sniffEmOutImg}
                link={'https://minutemath.netlify.app'}
                span={'Developed Sniff \'em out as a social deduction experience using Swift and Xcode, prioritizing a "pass-and-play" mobile architecture. I designed and customize a branded UI and implemented a custom back-end system that handles state management to handle the topic and each players roles.'}
                />

            </div>
            </div>
            </LinePattern>
        </div>
    );
}

function ProjectBox({ name, desc, tools, imgSrc, link, span}) {
    return (
        <div className='box-glass'>
        <div className='project-box h-full'>
            <h2 className='jetbrains-mono text-xl font-extrabold'>{name}</h2>
            <h2 className='jetbrains-mono text-gray-500 mb-5'>{desc}</h2>
            <div className='flex flex-row justify-start items-center flex-wrap'>
                {tools.map((tool, index) => {
                    return <div key={index} className='tool jetbrains-mono text-xs m-0.5'>{tool}</div>
                })} 
            </div>
            <hr className='h-0.5 my-5'/>
            <div className='flex flex-col justify-center items-center'>
                <a href={link} target='_blank'><img src={imgSrc}></img></a>
                <p className='jetbrains-mono text-sm text-gray-500 mb-5'>click to open project</p>
            </div>
            <span className='jetbrains-mono text-sm text-gray-800 mb-5'>{span}</span>
        </div>
        </div>
    );
}

export default Projects;