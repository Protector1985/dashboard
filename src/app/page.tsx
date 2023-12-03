"use client"
import withAuth from '@/HOC/withAuth'
import styles from './page.module.css'
import withMenu from '@/HOC/withMenu'

 function Overview() {
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
    </main>
  )
}


export default withAuth(withMenu(Overview))