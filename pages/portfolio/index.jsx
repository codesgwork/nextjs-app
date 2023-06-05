import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className='demoPageView'>
      <h1>The portfolio page</h1>
      <div className="link">

      <Link href='/'>go to Home</Link>
      <Link href='/portfolio/List'>list</Link>
      </div>
    </div>
  );
}
