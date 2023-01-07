import { FaArrowLeft } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import styles from '../styles/menuutama.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { relative } from 'path';

function Navbar(){
    return(
        <div >
            <main className={styles.main}>
                <nav className={styles.icon}>
                    <Link href="adminmenu" className={styles.iconbar}>
                        <p><FaHome/></p>
                    </Link>
                    <Link href="adminPagePedoman" className={styles.iconbar}>
                        <p><MdLibraryBooks/></p>
                    </Link>
                    <Link href="AdminProfile" className={styles.iconbar}>
                        <p><GoPerson/></p>
                    </Link>
                </nav>
            </main>
            
        </div>
        
    )
}

export default Navbar;