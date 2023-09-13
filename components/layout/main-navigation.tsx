import Link from 'next/link';
import Logo from './logo';
import classes from '../../styles/main-navigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            {' '}
            <Link href='/contacts'>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
