import React, { createContext, useContext, useEffect, useState } from 'react';

const RouterContext = createContext(null);

export const RouterProvider = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const navigate = (to) => {
    if (to === path) return;
    window.history.pushState({}, '', to);
    setPath(to);
    // notify listeners
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
};

export const Link = ({ to, children, className = '', activeClassName = '', afterNavigate, ...rest }) => {
  const { path, navigate } = useRouter();
  const isActive = path === to;

  const handleClick = (e) => {
    // allow modifier keys to open in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
    if (typeof afterNavigate === 'function') {
      setTimeout(() => afterNavigate(), 50);
    }
  };

  return (
    <a
      href={to}
      {...rest}
      onClick={handleClick}
      className={[className, isActive && activeClassName ? activeClassName : '']
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </a>
  );
};

export default RouterContext;
