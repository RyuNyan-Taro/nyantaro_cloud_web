import './page.css'
import Contents from '@/components/Contents';

export default function Home() {
  return (
    <div>
      <h1>
        Nyantaro Cloud
      </h1>
      <div className="container">
        <div className="left-scroll">
          <Contents />
        </div>
        <div className="right-fixed">
          <h2>
            SNS
          </h2>
          <p>
            <a 
              href="https://x.com/Nyantar83781816" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link"
            >
              X(twitter)</a><br />
            <a 
              href="https://www.instagram.com/nyantarotaro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link"
            >
              instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
