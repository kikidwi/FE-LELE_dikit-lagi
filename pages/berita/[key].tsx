import axios from "axios";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from 'react';

import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import Head from 'next/head'
import styles from '../../styles/pageBerita.module.css'
import Image from 'next/image'
import profilePic from 'gambar/lele1.jpg'
import Link from 'next/link'

import { FaArrowLeft } from 'react-icons/fa'
import Navbar from '../../components/navbarUser';

export async function getStaticPaths() {
    // Ambil daftar berita dari API
    const response = await axios.get('https://api.lemes.my.id/beritapedoman/berita')
    const news = await response.data
  
    // Buat daftar rute untuk setiap item berita
    const paths = news.map(newsItem => ({
      params: { key: newsItem.key.toString() },
    }))
  
    // Kembalikan daftar rute
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    // Ambil item berita yang sesuai dari API
    const response = await axios.get(`https://api.lemes.my.id/beritapedoman/berita/{berita_id}?beritapedoman_id=${params.key}`)
    const news = await response.data
  
    // Kembalikan data sebagai properti statis
    return {
      props: {
        news,
      },
    }
  }

export default function detailBerita({news}){
    const Router = useRouter()
    console.log({news})

    return(
        <div className={styles.container}>
            <Head>
                <title>Page Berita</title>
            </Head>
            <main className={styles.main} style={{maxHeight: 1000 ,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div>
                <div className={styles.arrowback}>
                  <button className={styles.back} onClick={() => Router.back()} style={{backgroundColor : 'transparent', borderColor : 'transparent'}}><FaArrowLeft/> Back</button>
                  {/* <Link href="/previous-page">
                    <p className={styles.back}><FaArrowLeft/> Back</p>
                  </Link> */}
                </div>
                <p className={styles.textjudul}>{news.judul_berita_dan_pedoman}</p>
                <p className={styles.texttanggal}>{news.tanggal_berita_dan_pedoman} • Admin</p>
                <Image className = {styles.gambarr}
                  src={news.thumbnail || profilePic}
                  width={170}
                  height={170}
                  alt="gambar lele"
                />
                <p className={styles.isiberita} style={{width: 300}}>{news.isi_berita_dan_pedoman}</p>
              </div>

              {/* <nav className={styles.icon}>
                    <Link href="../../menuutama" className={styles.iconbar}>
                        <p><FaHome/></p>
                    </Link>
                    <Link href="../../userPedoman" className={styles.iconbar}>
                        <p><MdLibraryBooks/></p>
                    </Link>
                    <div className={styles.plus}>
                        <Link href="../../informasikolamdanlele" className={styles.tombolplus}>
                            <p className="mx-auto" style={{marginTop: 25}}><BsPlusLg/></p>
                        </Link>
                    </div>
                    <Link href="../../notifikasi" className={styles.iconbar}>
                        <p><FaBell/></p>
                    </Link>
                    <Link href="../../UserProfile" className={styles.iconbar}>
                        <p><GoPerson/></p>
                    </Link>
                </nav> */}
            </main>
        </div>
                    
    )
}


