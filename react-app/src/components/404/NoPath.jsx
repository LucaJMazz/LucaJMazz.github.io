function NoPath() {
    return (
        <div className="flex flex-col justify-start items-center w-full">
            <h1 className="m-10">404</h1>
            <h2 className="text-2xl">Page not found</h2>
            <p className="text-gray-400 jetbrains-mono mt-2 mb-5">The requested URL was not found.</p>
            <button onClick={() => open('/', '_self')} className="underline jetbrains-mono cursor-pointer m-5">back to homepage</button>
        </div>
    );
}

export default NoPath;