import Head from 'next/head'
import Image from 'next/image'
import profil from '../gambar/profil.png'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';

import styles from '../styles/UserProfile.module.css'
import Link from 'next/link'

import router from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbarUser';

export default function AdminProfile({token}) {
    const [dataUser, setData] = useState(null);
    useEffect(() => {
       
        async function getData() {
            const {data: res} = await axios.get('https://api.lemes.my.id/user/profile', {
                headers : {
                    "accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
                
            })
            setData(res);
            console.log(res);  
        }
        getData();
    }, []);

    const handleSubmit = () => {
        fetch("/api/logout", {
            method : "post",
            headers: {
                "Content-Type" : "application/json",
         },
            body: JSON.stringify({})
        })

        router.push('login')
    }

    return (
        <div>
            <Head>
                <title>Admin Profile</title>
            </Head>

            <main className={styles.main}>
                <div>
                    <p className={styles.judul}>Admin Profile</p>
                </div>

                <div >
                    <div className={styles.kotak}>
                        <Image
                            src={profil}
                            alt="profil"
                            width={65}
                            height={65}
                            className={styles.foto}
                        />
                        <div>
                            {dataUser && (
                                <div>
                                    <p className={styles.text}>Full name: {dataUser.full_name}</p>
                                    <p className={styles.text}>Username: {dataUser.username}</p>
                                    <p className={styles.text}>Email: {dataUser.email}</p>
                                </div>
                            )}
                            
                        </div>
                    </div>
                    
                    
                </div>

                    
                <button  className={styles.logoutButton} onClick={() => handleSubmit()}>LOGOUT</button>


                <Navbar/>

            </main>
        </div>
  )
}

export function getServerSideProps({req, res}){
    return {props: {token : req.cookies.token || ""} };
}

