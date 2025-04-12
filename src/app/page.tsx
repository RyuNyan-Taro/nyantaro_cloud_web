import './page.css'
import { RoundImageButton } from '@/components/RoundImageButton'

export default function Home() {
  return (
    <div>
      <h1>
        Nyantaro Cloud
      </h1>
      <div className="container">
        <div className="left-scroll">
          <h2>
            Contents
          </h2>
          <p>
            <RoundImageButton
              href="/"
              src="/globe.svg"
              alt="blog"
              size={100}
            /><br />
            <RoundImageButton
              href="/"
              src="/globe.svg"
              alt="galley"
              size={100}
            /><br />
            <RoundImageButton
              href="/"
              src="/globe.svg"
              alt="movie"
              size={100}
            />
          </p>
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
