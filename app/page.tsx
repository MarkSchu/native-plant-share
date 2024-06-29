import FindOrShare from "./components/find-or-share";
import LandingNav from "./components/landing-nav";
import styles from './landing.module.css';

export default function Home() {
  return (
    <div className="landing-page">
      <LandingNav />
       <main >
        <h1>Native Plant Share</h1>
        <FindOrShare />
      </main>
    </div>
  );
}
