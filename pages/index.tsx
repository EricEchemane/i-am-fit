import LoadingSkeleton from 'components/shared/LoadingSkeleton';
import useUser from 'hooks/useUser';
import React from 'react';

export default function HomePage() {
  const { error, user } = useUser({
    whenNotFoundRedirectTo: '/sign-in'
  });

  if (error || !user) return <LoadingSkeleton />;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, {user.name}</p>
    </div>
  );
}
