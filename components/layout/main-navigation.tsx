import Link from 'next/link';
import Logo from './logo';

const MainNavigation = () => {
  return (
    <>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
            <Link href='/contacts'>Logo</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
