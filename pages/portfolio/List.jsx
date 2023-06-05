import Link from 'next/link';

export default function List() {
  return (
    <div className='demoPageView'>
      <h1>portfolio list</h1>
      <Link href='/portfolio'>go to portfolio</Link>
    </div>
  );
}
