import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import stylesUtils from '../styles/utils.module.css';
import styles from './layout.module.css';

const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }) => {

  const name = 'Brett Gaynor';

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image 
              priority
              src="/images/profile.jpeg"
              className={stylesUtils.borderCircle}
              height={144}
              width={144}
              alt="profile image"
            />
            <h1 className={stylesUtils.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image 
                priority
                src="/images/profile.jpeg"
                className={stylesUtils.borderCircle}
                height={144}
                width={144}
                alt="profile image"
            />
            </Link>
            <h2 className={stylesUtils.headingLg}>
              <Link href="/" className={stylesUtils.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">Back to home</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;