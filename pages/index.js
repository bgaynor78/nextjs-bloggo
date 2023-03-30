import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import Date from '../components/date';
import stylesUtils from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={stylesUtils.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${stylesUtils.headingMd} ${stylesUtils.padding1px}`}>
        <h2 className={stylesUtils.headingLg}>Blog</h2>
        <ul className={stylesUtils.list}>
          {allPostsData.map(({ title, id, date }) => (
            <li className={stylesUtils.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={stylesUtils.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
}

export default Home;