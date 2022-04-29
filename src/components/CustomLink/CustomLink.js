import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="link-div">
      <Link
        style={{
          color: match ? '#dfe4ea' : '#dfe4ea',
          fontWeight: match ? 'bold' : 'bold',
          textUnderlinePosition: match ? 'under' : 'auto',
          textDecoration: match ? 'overline' : 'none',
          textDecorationColor: match ? '#FF8A00' : 'auto',
          textDecorationThickness: match ? '3px' : 'auto',
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
