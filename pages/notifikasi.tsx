import Head from 'next/head'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import styles from '../styles/notifikasi.module.css'
import Link from 'next/link'

import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbarUser';

export default function notifikasi({token}) {
    const [notif, setNotif] = useState([])
    useEffect(() => { 
        async function getNotif() {
            try {
                const {data: res} = await axios.get('https://api.lemes.my.id/user/notifikasi', {
                    headers : {
                        "accept": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                    
                })
                setNotif(res);
                console.log(res); 
            }catch(error){
                console.log(error)
            }
             
        }
        getNotif();
    }, []);

    return (
        <div>
            <Head>
                <title >notifikasi</title>
            </Head>

            <main className={styles.main}>
                <div>
                    <p className={styles.NamePage}>Notifikasi</p>
                </div>
                <table className={styles.table}>
                    <thead>

                    </thead>
                    <tbody>
                       {notif.map((notif) =>
                            <tr key={notif.key} className={styles.tr}>
                                <td className={styles.judulNotif}>{notif.nama_kolam}</td>
                                
                                <td className={styles.td}>{notif.messages}</td>
                                <td className={styles.waktu}>{notif.waktu_keluar}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
                <Navbar />
            </main>
        </div>
    )
}

export function getServerSideProps({req, res}){
    return {props: {token : req.cookies.token || ""} };
}