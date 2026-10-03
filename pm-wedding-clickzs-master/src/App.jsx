import Header from './components/Header';
import Hero from './pages/home/Hero';
import Contact from './pages/contact/Contact';
import StoriesPage from './pages/stories/StoriesPage';
import { RouterProvider, useRouter } from './lib/router';

function MainRoutes() {
  const { path } = useRouter();
  const normalizedPath = path === '/' ? '/' : (path || '/').replace(/\/+$/, '') || '/';

  if (normalizedPath === '/stories') return <StoriesPage />;
  if (normalizedPath === '/contact') return <Contact />;

  return <Hero />;
}

function App() {
  return (
    <RouterProvider>
      <Header />
      <MainRoutes />
    </RouterProvider>
  );
}

export default App;


