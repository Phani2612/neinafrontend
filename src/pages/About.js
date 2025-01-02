import Head from 'next/head';
import styles from '../styles/About.module.css';
import Layout from './Layout';

const About = () => {
  return (
   <Layout>


<>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about Phani Naidu Kondapalli, a Full Stack Developer with a passion for technology and storytelling." />
      </Head>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>About Me</h1>
        </div>
        
        <div className={styles.content}>
          <section className={styles.introduction}>
            <p>
              Hi, I'm <strong>Phani Naidu Kondapalli</strong>! I completed my <strong>Mechanical Engineering graduation</strong> at <strong>GNI Hyderabad</strong> in 2021. Since then, I have been on an exciting journey that blends technology and creativity.
            </p>
            <p>
              I began my career as an <strong>IT Analyst at DXC Technology</strong>, where I gained <strong>1.3 years of experience</strong>. During this time, I not only honed my technical skills but also used the opportunity to invest in my future by taking a <strong>Full Stack Development course</strong> at <strong>Learnbay</strong>. The course involved working on <strong>10 real-time projects</strong>, allowing me to apply my learning to practical scenarios.
            </p>
            <p>
              I also had the chance to expand my knowledge by joining a <strong>Bangalore-based startup</strong> as a <strong>Full Stack Developer</strong>, where I worked on innovative projects like a <strong>URL Shortener</strong> and <strong>E-commerce application</strong>. This four-month experience helped me strengthen my skills in both frontend and backend development.
            </p>
            <p>
              Aside from coding, I have a strong passion for <strong>writing stories and screenplays</strong>. I find joy in telling stories that inspire and connect with people. I'm also constantly curious and enjoy learning new <strong>technologies</strong>, which keeps me motivated to grow as a developer.
            </p>
            <p>
              I am passionate about applying my skills to real-world challenges and am excited about bringing my experience and enthusiasm to new opportunities.
            </p>
          </section>

          <section className={styles.portfolio}>
            <p>
              You can view my work and learn more about my projects on my <a href="https://portfolio-ten-delta-10.vercel.app/" target="_blank" rel="noopener noreferrer"><strong>Portfolio</strong></a>.
            </p>
          </section>
        </div>
      </div>
    </>

   </Layout>
  );
};

export default About;
