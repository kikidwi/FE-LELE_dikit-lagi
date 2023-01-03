import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/userPedoman.module.css'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/Md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>User Pedoman</title>
      </Head>

      <main className={styles.main}>
        <div className = {styles.formcontainer}>
            <div className = {styles.userPedoman}>
                <hr/>
                    <div className={styles.kolam1}>
                        <p className={styles.textjudul}>Cara Memberi makan Ikan Lele Dengan Benar</p>
                        <p className={styles.text1}>Cara pemberian pakan dengan menaburkannya secara merata sedikit demi sedikit di setiap sisi kolam agar ikan mendapat jatah yang sama. Ukuran pakan yang diberikan harus disesuaikan dengan ukuran bukaan mulut ikan. Semakin besar ukuran bukaan mulut ikan, akan semakin besar juga ukuran pakan yang diberikan.</p>
                    </div>
                    <hr/>
                    <div className={styles.kolam1}>
                        <p className={styles.textjudul}>Cara Memelihara Ikan Lele Agar Sehat</p>
                        <p className={styles.text1}>1. Hama dan penyakit ikan lele Harus selalu diwaspadai</p>
                        <p className={styles.text1}>2. Bersihkan kolam lele dengan benar</p>
                        <p className={styles.text1}>3. Benih ikan lele</p>
                        <p className={styles.text1}>4. Padat tebar</p>
                        <p className={styles.text1}>5. Pakan dan suplemen</p>
                        <p className={styles.text1}>6. Lakukan pengawasan</p>
                        <p className={styles.text1}>7. Jaga kebersihan kolam</p>
                        <p className={styles.text1}>8. Gunakan probiotik</p>
                    </div>
                    <hr/>
            </div>
        </div>
        <nav className={styles.icon}>
                <Link href="menuutama" className={styles.iconbar}>
                    <p><FaHome/></p>
                </Link>
                <Link href="#" className={styles.iconbar}>
                    <p><MdLibraryBooks/></p>
                </Link>
                <div className={styles.plus}>
                    <Link href="informasikolamdanlele" className={styles.tombolplus}>
                        <p><BsPlusLg/></p>
                    </Link>
                </div>
                <Link href="notifikasi" className={styles.iconbar}>
                    <p><FaBell/></p>
                </Link>
                <Link href="UserProfile" className={styles.iconbar}>
                    <p><GoPerson/></p>
                </Link>
            </nav>
      </main>
    </div>
  )
}
