import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "https://newwebsite.com";
    }, 5000);

    const countdown = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      
      <div className="text-center space-y-6 animate-fadeIn">
        
        {/* Animated Icon */}
        <div className="text-6xl animate-bounce">🚧</div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-red-400">
          Website Moved
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          This project is no longer active. We've upgraded to a better platform 🚀
        </p>

        {/* Countdown */}
        <p className="text-md text-yellow-400">
          Redirecting in <span className="font-bold text-xl">{count}</span> seconds...
        </p>

        {/* Button */}
        <a
          href="https://your-new-website.com"
          className="inline-block mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-full shadow-lg hover:scale-105"
        >
          Go to New Website
        </a>
      </div>

      {/* Background glow effect */}
      <div className="absolute w-96 h-96 bg-red-500 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
    </div>
  );
}

export default App;
