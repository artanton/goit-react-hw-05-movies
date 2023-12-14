import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import { Container, Header, Menu, MenuLink } from './AppLayoutStyled';

export const AppLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Menu>
            <li>
              <MenuLink to="/">Home</MenuLink>
            </li>
            <li>
              <MenuLink to="/movies">Movies</MenuLink>
            </li>
          </Menu>
        </nav>
      </Header>

      <main>
        <Suspense
          fallback={
            <div>
              <ProgressBar
                height="80"
                width="400"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#F4442E"
                barColor="Teal"
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Container>
  );
};
