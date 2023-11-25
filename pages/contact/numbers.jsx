import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function about() {
    return (
      <div>
          <h1>About</h1>
          <Link legacyBehavior href="/">
             <a>Volver al inicio</a>
          </Link>
          <br>
          </br>
          <Link legacyBehavior href={"/contact/numbers"}>
            <a>Numbers</a>
          </Link>
          <br>
          </br>
          <Link legacyBehavior href={"/about"}>
            <a>about</a>
          </Link>
         
          
      </div>
    )
  }