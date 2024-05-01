import React, { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load the TrendingQuiz component
const LazyTrendingQuiz = lazy(() => import('./TrendingQuiz'));

const LoadingPage = () => {
  return (
    <div>
      <h1>Loading...</h1>
      {/* Add a loading spinner or animation here */}
    </div>
  );
};

const App = () => {
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time with a setTimeout
    const fetchData = async () => {
      // Simulate fetching data from an API or performing other asynchronous tasks
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2 seconds loading time

      // Once data fetching is complete, set isComponentLoaded to true
      setIsComponentLoaded(true);
    };

    fetchData(); // Call the fetchData function

    // No need to return anything from useEffect
  }, []);

  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        {/* Render TrendingQuiz component only when isComponentLoaded is true */}
        {isComponentLoaded && <LazyTrendingQuiz />}
      </Suspense>
    </div>
  );
};

export default App;
