import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <div>
      <p>Main Page</p>
      <a href="/about">Go to about page</a>
    </div>
  )
}
