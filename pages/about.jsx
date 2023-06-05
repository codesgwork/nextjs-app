import Link from 'next/link';
import { Test } from '../components/test';
export default function About() {
  return (
    <div className='demoPageView'>
      <h1>about page</h1>
      <Link href='/'> go to home</Link>
      <Test />
    </div>
  );
}
