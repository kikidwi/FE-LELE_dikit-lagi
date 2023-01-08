import Head from 'next/head'
import { ImHome } from 'react-icons/im'
import { MdLibraryBooks } from 'react-icons/md';
import { BsPencilFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import styles from '../styles/adminmenu.module.css'
import Link from 'next/link'
import Navbar from '../components/navbarAdmin';

export default function adminmenu() {
  return (
    <div>
        <Head>
            <title>adminmenu</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        </Head>
        <main className={styles.main} style={{maxHeight: 100, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={styles.Adminmenu}>
                <p className={styles.judul}>Admin Menu</p>
                <div className={styles.pedoman}>
                    <Link className={styles.text} href="adminPedoman">Tambah Pedoman </Link>
                </div>
                <div className={styles.berita}>
                    <Link className={styles.text} href="adminBerita">Tambah Berita </Link>
                </div>
            </div>
     
            <Navbar/>
        </main>
    </div>
  )
}
