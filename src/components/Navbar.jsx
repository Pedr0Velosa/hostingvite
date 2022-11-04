import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Navbar.module.css';
import {TbDrone} from 'react-icons/tb';
import { useLocation, Outlet } from "react-router-dom";

export default function Navbar () {

  const {pathname} = useLocation()
  return (
    <>
      <header>
        <nav className={styles.container}>
          <ul className={styles.list}>
            <li className={styles.logo}>
              <Link
                to={'servicos'}
                style={{display: 'flex', alignItems: 'center', gap: 8}}
              >
                <p>
                  Fiap's Delivery
                </p>
                <TbDrone size={'1em'} />
              </Link>
            </li>
            <li>
              <Link
                className={styles.links}
                to={'servicos'}
                data-current={pathname === '/hostingvite.io/servicos' ? true : false}
              >
                servicos
              </Link>
            </li>
            <li>
              <Link
                className={styles.links}
                to={'locais'}
                data-current={pathname === '/hostingvite.io/locais' ? true : false}
              >
                locais
              </Link>
            </li>
            <li>
              <Link
                className={styles.links}
                to={'valores'}
                data-current={pathname === '/hostingvite.io/valores' ? true : false}
              >
                valores
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </>
  );
};
