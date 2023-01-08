import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'
import styles from '../styles/signup.module.css'
import Link from 'next/link'

import axios from "axios";
import { useState } from 'react';
import Router from 'next/router';


export default function signup() {
  const apiEndPoint = 'https://api.lemes.my.id/auth/signup';

  const [data, setData] = useState({
    fullName: "",
    email : "",
    username: "",
    password: ""
  })

  const [errorusername, setErrorusername] = useState('')
  const [errorPass, setErrorPass] = useState('')
  const [errorName, setErrorName] = useState('')


  function Submit(e){
    e.preventDefault();
    axios.post(apiEndPoint, {
      "full_name": data.fullName,
      "email": data.email,
      "username": data.username,
      "password": data.password
    })
      .then(res => {
        console.log(res.data)
        setErrorPass(" ")
        Router.push('/')
      })
      .catch(error => {
        alert("username atau email sudah digunakan")
        console.log(error);
      });
    
  }

  function handle(e) {
    const newData= {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <div>
        <Head>
            <title>Sign Up</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        </Head>

        <main className={styles.main}>
            <div className={styles.arrowback}>
              <Link href="/">
                  <p className={styles.back}><FaArrowLeft/> Back</p>
              </Link>
            </div>

            <div>
              <p className={styles.judul}>Sign up</p>
              <p className={styles.textPanjang}>make a new account</p>
            </div>

            <form onSubmit={(e) => Submit(e)} className={styles.formInput} >
              
              <p className={styles.text}>Nama</p>
              <input onChange={(e) => handle(e)} id="fullName" value={data.fullName} type="text" className={styles.nama} placeholder="nama" 
                required
                minLength={4}
                maxLength={20}
              />
              

              <p className={styles.text}>Username</p>
              <input onChange={(e) => handle(e)} id="username" value={data.username} type="text" className={styles.username} placeholder="username"
                required
                minLength={4}
                maxLength={8}
              />
              

              <p className={styles.text}>Email</p>
              <input onChange={(e) => handle(e)} id="email" value={data.email} type="email" className={styles.username} placeholder="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

              />

              <p className={styles.text}>password</p>
              <input onChange={(e) => handle(e)} id="password" value={data.password} type="password" className={styles.password} placeholder="password" 
              required
              minLength={4}
              maxLength={8}/>
              
              <br />


              <br />
              <input type="submit" className={styles.submit} placeholder="SUBMIT" />
            </form>
        </main>
    </div>
  )
}

