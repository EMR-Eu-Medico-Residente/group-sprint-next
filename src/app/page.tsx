import { DevelopersList } from './DevelopersList';
// import { Suspense } from 'react';
import getDevelopers from '@/services/getDevelopers';

export default async function Home() {
  console.log('home');
  const developers = await getDevelopers();
  return (
    <main className='h-screen p-6'>
      <h3>Grupos da sprint</h3>
      {/* <Suspense fallback={<h1>...Loading</h1>}> */}
      {/* @ts-expect-error Async Server Component */}
      <DevelopersList developers={developers} />
      {/* </Suspense> */}
    </main>
  );
}
