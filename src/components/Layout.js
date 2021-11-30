import React from 'react';
import classes from './Layout.module.css';

const Layout = React.forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className={classes.container}>
      {children}
    </div>
  );
});

export default Layout;
