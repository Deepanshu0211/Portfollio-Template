import Head from 'next/head';
import styles from "./project2.scss"


export default function Home() {
  const cards = [
    { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
    
  ];

  return (
    <div className={styles.pageContent}>
      

      <main className={styles.pageContent}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="content">
              <h2 className="title">{card.title}</h2>
              <p className="copy">{card.copy}</p>
              <button className="btn">{card.button}</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
