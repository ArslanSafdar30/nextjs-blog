'use client';

import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Posts() {
  const router = useRouter();
  return ( 
    <main className={styles.main}>
      <div className={styles.center}> <h1>Post</h1></div>
      <a href="/">
        Back to home
      </a>
      <button type = "button" onClick={()=> router.push('/')}>
        back to home
      </button>
    </main>
  )
}