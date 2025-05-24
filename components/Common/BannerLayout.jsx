
const BannerLayout = ({ children }) => {
    const backgroundStyle = {
        background: 'linear-gradient(to bottom, #121212, #181818)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div
            className="relative backdrop-blur-sm w-full h-80 bg-fixed z-10"
            style={backgroundStyle}>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-Black/5 backdrop-blur-sm w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BannerLayout
