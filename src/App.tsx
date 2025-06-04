import React, { useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Add ErrorBoundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center p-4">Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    Loading...
  </div>
);

function App() {
  // Set page title on mount
  useEffect(() => {
    document.title = 'Marius Grasman - Developer Portfolio';
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Suspense fallback={<LoadingFallback />}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;