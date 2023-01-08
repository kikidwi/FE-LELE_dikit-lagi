import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/userPedoman.module.css'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/navbarAdmin';

export default function Home() {
    const [data, setData] = useState([]);
    useEffect(() => { 
        async function getData() {
            try {
                const {data: res} = await axios.get('https://api.lemes.my.id/beritapedoman/pedoman', {
                    headers : {
                        "accept": "application/json",
                        
                    }
                    
                })
                setData(res);
                console.log(res); 
            }catch(error){
                console.log(error)
            }
             
        }
        getData();
    }, []);
    
    const Router = useRouter()

    return (
        <div className={styles.container}>
        <Head>
            <title>User Pedoman</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        </Head>

        <main className={styles.main} style={{maxHeight: 2000 ,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className = {styles.formcontainer}>
                <div className = {styles.userPedoman}>

                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ marginTop: 60,display : 'flex', alignItems : 'center'}}>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label style={{paddingTop: 6, paddingBottom: 6, paddingLeft: 30, paddingRight: 30}} className="btn btn-outline-secondary" htmlFor="btnradio1">Pedoman</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={() => Router.push('adminPageBerita')}/>
                        <label style={{paddingTop: 6, paddingBottom: 6, paddingLeft: 30, paddingRight: 30}}  className="btn btn-outline-secondary" htmlFor="btnradio2">Berita</label>
                    </div>

                    <table className={styles.table}>
                    <thead>
                        <tr className={styles.judulTable}>
                            <th>List Pedoman</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                       {data.map((data, index) =>
                            <tr key={data.key} className={styles.bodyTabel}>
                                <td className={styles.tdJudul}>{data.judul_berita_dan_pedoman}</td>
                                <td className={styles.td}>{data.isi_berita_dan_pedoman}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                </div>
            </div>
            <Navbar />
        </main>
        </div>
    )
}
