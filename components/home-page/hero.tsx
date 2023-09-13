import Image from 'next/image';
import classes from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image src='/images/Profile.jpeg' alt='' width={300} height={300} />
        </div>
        <div className={classes.heroText}>
          <span>Hey, I am Chirag !</span>

          <br />
          <span>I am a software developer and a crypto analyst</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
