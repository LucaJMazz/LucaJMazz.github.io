import LinePattern from '../patterns/LinePattern.jsx'

function PatternDivider() {
    
    return (
        <>
        <hr className='h-2' />
        <LinePattern className={'h-15 w-full'}/>
        <hr className='h-2' />
        </>
    )
}

export default PatternDivider
