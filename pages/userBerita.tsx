import Head from 'next/head'
import Image from 'next/image'
import profilePic1 from 'gambar/lele2.jpg'
import profilePic2 from 'gambar/lele3.jpg'
import profilePic3 from 'gambar/lele1.jpg'
import styles from '../styles/userBerita.module.css'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/Md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>User Berita</title> 
      </Head>
      <main className={styles.main}>
      <div className={styles.btngroup} role="group">
        <Button variant="primary" >Berita </Button>
        <Button variant="secondary">Pedoman</Button>

        </div>
        <div className = {styles.userBerita}>
            <hr/>
            <div className={styles.kolam1}>
                <div>
                    <p className={styles.textjudul}>Cara Budidaya Ikan Lele di Kolam Terpal Bagi Pemula </p>
                    <p className={styles.text1}>25 May 2022 • Admin</p>
                </div>
                <Image className = {styles.gambarr}
                    src={profilePic1}
                    alt="Picture of the author"
                />
            </div>
            <hr/>
            <div className={styles.kolam1}>
                <div>
                    <p className={styles.textjudul}>10 Makanan Lele Terbaik, Dijamin Bikin Cepat Besar</p>
                    <p className={styles.text1}>25 May 2022 • Admin</p>
                </div>
                <Image className = {styles.gambarr}
                    src={profilePic2}
                    alt="Picture of the author"
                 />
            </div>
            <hr/>
            <div className={styles.kolam1}>
                <div>
                    <p className={styles.textjudul}>Cara Ternak Ikan Lele untuk Pemula: Mulai dari Pembuatan Kolam, Cara Memilih Benih Unggul dan Perawatan</p>
                    <p className={styles.text3}>25 May 2022 • Admin</p>
                </div>
                <Image className = {styles.gambarr}
                    src={profilePic1}
                    alt="Picture of the author"
                />
            </div>
            <hr/>
            
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