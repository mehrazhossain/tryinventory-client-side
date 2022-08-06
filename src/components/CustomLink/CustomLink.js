import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="link-div">
      <Link
        style={{
          color: match ? '#111827' : '#dfe4ea',
          backgroundColor: match ? '#2DD4BF' : '',
          padding: match ? '10px' : '',
          borderRadius: match ? '3px' : '',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
