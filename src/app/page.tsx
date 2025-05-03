import './page.css'
import Header from "@/components/Header";
import Contents from '@/components/Contents';
import SnsList from '@/components/SnsList';

export default function Home() {
    console.log(process.env.TEST_KEY);
    console.log('get_key is finished')
  return (
    <div className="main-container">
        <Header />
      <div className="content-section">
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
