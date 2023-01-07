import Head from 'next/head'
import styles from '../styles/adminBerita.module.css'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
// import { BsPlusLg } from 'react-icons/bs';
// import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import Link from 'next/link'

import axios from "axios";
import { useState, useEffect} from 'react';
import Router from 'next/router';

export default function Login({token}) {

  const apiEndPoint = 'https://api.lemes.my.id/admin/post/berita';

  const [judul, setJudul] = useState('')
  const [isi, setIsi] = useState('')
  const handleJudul = (e) => {
    setJudul(e.target.value)
  }

  const handleIsi = (e) => {
      setIsi(e.target.value)
  }

  function handleApi(e){
    e.preventDefault();
    console.log({judul, isi})
    console.log({token})
    axios.post(apiEndPoint, {
      "judul_berita_dan_pedoman": judul,
      "isi_berita_dan_pedoman": isi

    }, {
        headers : {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            alert('data berhasil ditambahkan')
            console.log(res.data)
            Router.push('adminmenu')

        })
        .catch(error => { 
            console.log(error);
        });
  }
  return (
    <div>
        <Head>
            <title>Add Berita</title>
        </Head>

        <main className={styles.main}>
            <div className = {styles.AdminMenu}>
              <p className = {styles.judul}>Add Berita</p>
              <p className = {styles.berita}>Berita</p>
              <form onSubmit={handleApi}>
                <div className = {styles.kotak}>
                    <input onChange={handleJudul} type="text" placeholder="Judul Berita" className={styles.kontenberita}/>
                    <hr/>
                    <div className ={styles.inputfile}>
                      <textarea onChange={handleIsi} name="isi" placeholder='Isi Berita' className={styles.fileberita} />
                    </div>
                  </div>
                  <div className={styles.tombol}>
                    <input className = {styles.submit} type="submit" placeholder='SUBMIT' />
                  </div>
              </form>   
            </div>

            
            <nav className={styles.icon}>
                <Link href="#" className={styles.iconbar}>
                    <p><FaHome/></p>
                </Link>
                <Link href="#" className={styles.iconbar}>
                    <p><MdLibraryBooks/></p>
                </Link>
                <Link href="UserProfile" className={styles.iconbar}>
                    <p><GoPerson/></p>
                </Link>
            </nav>
      </main>
    </div>
  )
}
export function getServerSideProps({req, res}){
    return {props: {token : req.cookies.token || ""} };
}
