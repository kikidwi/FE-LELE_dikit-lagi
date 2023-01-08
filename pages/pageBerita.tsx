import Head from 'next/head'
import styles from '../styles/pageBerita.module.css'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import Image from 'next/image'
import profilePic from 'gambar/lele1.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Berita</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <main className={styles.main} style={{maxHeight: 100, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={styles.pageBerita}>
          <div className={styles.text}>
            <p className={styles.textjudul}>Cara Budidaya Ikan Lele Bagi Pemula di Kolam Terpal</p>
            <p className={styles.texttanggal}>25 May 2022 • Admin</p>
              <Image className = {styles.gambarr}
                src={profilePic}
                alt="Picture of the author"
              />

              <p className={styles.isiberita}>
                Ada beragam kolam untuk budidaya ikan lele seperti kolam tanah, irigasi, tadah hujan, rawa, beton, dan terpal. Kolam terpal ini merupakan kolam yang menggunakan terpal sebagai bahan utama dan dapat dibongkar pasang atau dapat dipindah tempat.
                Kolam terpal ini direkomendasikan untuk Anda karena biayanya pembuatannya yang relatif murah dan prosesnya yang mudah. Untuk jenisnya, terdapat 2 macam kolam terpal yakni yang diletakan di atas permukaan tanah dan dimasukan ke dalam tanah.
                Kolam terpal yang berada di atas tanah bisa Anda bangun dari bambu, batu bata,.
                </p>
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
