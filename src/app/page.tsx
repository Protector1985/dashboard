"use client"
import withAuth from '@/HOC/withAuth'
import styles from './page.module.css'
import withMenu from '@/HOC/withMenu'
import MetricsBoxSmall from '@/components/MetricsBoxSmall/page'
import { FaPhoneAlt } from "react-icons/fa";

 function Overview() {
  return (
    <main className={styles.wrapper}>
      <MetricsBoxSmall metric={385} name="TOTAL CALLS" Logo={FaPhoneAlt} bg={1} percentage={25.5} />
    </main>
  )
}


export default withAuth(withMenu(Overview))