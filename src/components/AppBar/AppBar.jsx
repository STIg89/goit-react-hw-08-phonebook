import { Navigation } from './Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './Navigation/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ margin: '0 auto', padding: '0 16px' }}>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
