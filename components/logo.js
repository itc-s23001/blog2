import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = ({ boxOn = false }) => {
  return (
    <Link className={boxOn ? styles.box : styles.basic} href='/'>
      CUBE
    </Link>
  )
}

export default Logo
