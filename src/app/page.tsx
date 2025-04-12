import './page.css'
import Contents from '@/components/Contents';
import SnsList from '@/components/SnsList';

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
          <SnsList />
        </div>
      </div>
    </div>
  );
}
