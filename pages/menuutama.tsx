import Head from 'next/head'
import { BsTrashFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLibraryBooks } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import styles from '../styles/menuutama.module.css'
import Link from 'next/link'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbarUser';


export default function menuutama({token}) {
  
    const [dataKolam, setData] = useState([]);
    useEffect(() => { 
        async function getData() {
            try {
                const {data: res} = await axios.get('https://api.lemes.my.id/kolam/info/all', {
                    headers : {
                        "accept": "application/json",
                        "Authorization": `Bearer ${token}`,
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

    const apiDel = 'https://api.lemes.my.id/kolam/delete'
    const handleDelete = async (dataKolam) => {
        const result = window.confirm('Apakah Anda yakin?')
        if (result) {
            await axios.delete(`${apiDel}?nama_kolam=${dataKolam.nama_kolam}`,{
                headers : {
                    "accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            window.location.reload()
            // setData(dataKolam.filter((p) => p.key !== p.key))
        } else {
            console.log("tidak jadi")
        }
    }
    const [cari, setCari] = useState('')
    const handlecari = (e) => {
        setCari(e.target.value)
    }
    const handleSearch = (e) =>{
        e.preventDefault();
        const res =  axios.get('https://api.lemes.my.id/kolam/info/' + cari, {
            headers : {
                "accept": "application/json",
                "Authorization": `Bearer ${token}`,
            }
                
        })  
            .then(res => {
                alert(["Nama Kolam: ", res.data[0].nama_kolam, 
                "\nJumlah Lele : ", res.data[0].jumlah_lele,
                "\nBerat Lele : ", res.data[0].berat_lele,
                "\nStock Pakan : ", res.data[0].stock_pakan])
                console.log(res.data[0])
            })
            .catch(error => { 
                console.log(error);
            });
        
    }
    return (
        <div col-sm>
            <Head>
                <title>Menu Utama</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            </Head>

            <main className={styles.main} style={{maxHeight: 1500,display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
            <div className={styles.MenuUtama}>   
                <div className="d-flex" style={{ position: 'fixed', top: 0 ,backgroundColor: '#D9D9D9', paddingRight: 50, paddingLeft: 60, paddingBottom: 20}}> 
                    <input onChange={handlecari} type="text" placeholder="Search" className={styles.Search} style={{}} required/> 
                    <button onClick={handleSearch} style={{borderColor: 'transparent', backgroundColor: 'transparent'}}><AiOutlineSearch/></button>
                    
                </div>              
                <div className={styles.restockpakan}>
                    <Link className={styles.restock} href="restockpakan">Pengingat Restock Pakan <BsPlusLg/></Link>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr className={styles.judulTable}>
                            <th >Informasi List Kolam</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                       {dataKolam.map((dataKolam, index) =>
                            <tr key={dataKolam.key} className={styles.bodyTabel}>
                                <div className={styles.nomorKolam}>
                                    <td>Kolam ke {index +1}</td>
                                    <button onClick={() => handleDelete(dataKolam)} className={styles.deleteButton}>Hapus</button>
                                </div>
                                <td className={styles.td}>Nama Kolam : {dataKolam.nama_kolam}</td>
                                <td className={styles.td}>Jumlah Lele : {dataKolam.jumlah_lele}</td>
                                <td className={styles.td}>Berat Lele : {dataKolam.berat_lele}</td>
                                <td className={styles.td}>Stock Pakan : {dataKolam.stock_pakan}</td>
                                <td className={styles.td}>Jumlah Pakan Harian : {dataKolam.jumlah_pakan_harian}</td>
                                <td className={styles.td}>Waktu Panen : {dataKolam.waktu_panen}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            <Navbar />
            </main>
        </div>
    )
}

export function getServerSideProps({req, res}){
    return {props: {token : req.cookies.token || ""} };
}