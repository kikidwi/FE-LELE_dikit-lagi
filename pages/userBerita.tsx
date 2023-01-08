import Head from 'next/head'
import Image from 'next/image'
import profilePic1 from 'gambar/lele2.jpg'
import profilePic2 from 'gambar/lele3.jpg'
import profilePic3 from 'gambar/lele1.jpg'
import styles from '../styles/userBerita.module.css'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';

import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '../components/navbarUser';

export default function userBerita({berita}) {
    console.log({berita})
    const Router = useRouter()
    return (
        <div className={styles.container}>
        <Head>
            <title>User Berita</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        </Head>
        <main className={styles.main} style={{maxHeight: 2000 ,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ display : 'flex', alignItems : 'center'}}>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onClick={() => Router.push('userPedoman')}/>
                <label style={{paddingTop: 6, paddingBottom: 6, paddingLeft: 40, paddingRight: 40}} className="btn btn-outline-secondary" htmlFor="btnradio1">Pedoman</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" defaultChecked />
                <label style={{paddingTop: 6, paddingBottom: 6, paddingLeft: 40, paddingRight: 40}} className="btn btn-outline-secondary" htmlFor="btnradio2">Berita</label>
            </div>

            <div>
                <hr style={{marginTop : 50}}/>
                {berita.map((dataBerita) => (
                    <> 
                        
                        <div key={dataBerita.key} onClick={() => Router.push(`berita/${dataBerita.key}`)} className={styles.kolam1}>
                            <div>
                                <p className={styles.textjudul} style={{width: 170}}>{dataBerita.judul_berita_dan_pedoman}</p>
                                <p className={styles.text1}>{dataBerita.tanggal_berita_dan_pedoman} • Admin</p>
                            </div>
                            
                            <Image className = {styles.gambarr}
                                src={dataBerita.thumbnail || profilePic2}
                                width={70}
                                height={70}
                                alt="gambar lele"
                            />
                            
                        </div>
                        <hr />
                        
                    </>
                ))}
            </div>


            <Navbar />
        </main>
        </div>
    )
}

// export async function getStaticProps(){
//     const res = await fetch('https://api.lemes.my.id/beritapedoman/berita');
//     const berita = await res.json();
//     return {
//         props: {
//             berita,
//         }
//     }
// }

export async function getStaticProps() {
    const response = await axios.get('https://api.lemes.my.id/beritapedoman/berita')
    const berita = response.data
  
    // Kembalikan data sebagai properti statis
    return {
      props: {
        berita,
      },
    }
  }