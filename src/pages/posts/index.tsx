import styles from './styles.module.scss';
import Head from 'next/head'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>Conteudo do pos</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>Conteudo do pos</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>Conteudo do pos</p>
          </a>
        </div>
      </main>
    </>
  );
}