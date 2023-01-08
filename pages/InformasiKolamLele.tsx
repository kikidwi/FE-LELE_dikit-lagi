import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import styles from '../styles/InformasiKolamLele.module.css'
import Link from 'next/link'


import axios from "axios";
import { useState, useEffect} from 'react';
import Router from 'next/router';

export default function InformasiKolamLele({token}) {


    const apiEndPoint = 'https://api.lemes.my.id/kolam/inputdata';

    const [namaKolam, setNamaKolam] = useState('')
    const [jumlahLele, setJumlahLele] = useState('')
    const [beratLele, setBeratLele] = useState('')
    const [stock, setStock] = useState('')

    const handleNama = (e) => {
        setNamaKolam(e.target.value)
    }

    const handleJumlah = (e) => {
        setJumlahLele(e.target.value)
    }
    const handleBerat = (e) => {
        setBeratLele(e.target.value)
    }
    const handleStock = (e) => {
        setStock(e.target.value)
    }   

    function handleApi(e){
        e.preventDefault();
        console.log({namaKolam, jumlahLele, beratLele, stock})
        axios.post(apiEndPoint, {
            "nama_kolam": namaKolam,
            "jumlah_lele": jumlahLele,
            "berat_lele": beratLele,
            "stock_pakan": stock
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
                Router.push('menuutama')
            
            })
            .catch(error => { 
                console.log(error);
                alert("nama kolam sudah ada")
            });
    }
    
    return (
        <div>
            <Head>
                <title>Informasi Kolam Dan Lele</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            </Head>

            <main className={styles.main} style={{maxHeight: 100, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className={styles.arrowback}>
                    <Link href="login">
                        <p className={styles.back}><FaArrowLeft/> Back</p>
                    </Link>
                    <Link href="menuutama">
                        <p className={styles.next}>Skip <FaArrowRight/></p>
                    </Link>
                </div>

                <div>
                    <p className={styles.judul}>Informasi Lele Dan Kolam</p>
                </div>

                <form className={styles.formInput}>
                    <p className={styles.text}>Nama Kolam</p>
                    <input onChange={handleNama} id="NamaKolam" value={namaKolam} type="text" placeholder='Input Here' className={styles.inputText} 
                        required
                        minLength={4}
                        maxLength={20}/>
                    

                    <p className={styles.text}>Berat Lele</p>
                    <input onChange={handleBerat} id="BeratLele" value={beratLele} type="number" placeholder='Input Here' className={styles.inputText} required/>
                    

                    <p className={styles.text}>Jumlah Lele</p>
                    <input onChange={handleJumlah} id="JumlahLele" value={jumlahLele} type="number" placeholder='Input Here' className={styles.inputText} required/>
                    

                    <p className={styles.text}>Stock Pakan</p>
                    <input onChange={handleStock} id="stockPakan" value={stock} type="number" placeholder='Input Here' className={styles.inputDate} required/>
                    

                    <input onClick={handleApi} type="submit" placeholder='SUBMIT' className={styles.submitButton}/>
                    
                </form>

                
            </main>
        </div>
    )
}

export function getServerSideProps({req, res}){
    return {props: {token : req.cookies.token || ""} };
}
