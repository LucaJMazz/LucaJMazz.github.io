import Landing from "./components/landing/Landing";
import AboutMe from "./components/aboutme/AboutMe";
import ScrollDivider from "./components/dividers/ScrollDivider";

function Home() {
    return (
        <>
            <Landing />
            <ScrollDivider />
            <div className="my-4" />
            <AboutMe />
        </>
    )
}

export default Home;