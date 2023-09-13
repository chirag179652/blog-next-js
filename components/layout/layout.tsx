import MainNavigation from './main-navigation';

const Layout = (props: any) => {
  return (
    <>
      <MainNavigation />
      {props?.children}
    </>
  );
};

export default Layout;
