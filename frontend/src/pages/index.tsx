import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logoTelaLogin.png'
import { Input } from '../components/common/input'
import { Button } from '../components/common/Button'

export default function Home() {
  return (
    <>
      <Head>
      <title>Petros pizza italiana - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria Petros" width="400px" height="200px"/>

        <div className={styles.login}>
          <form>
            <Input 
              placeholder='Digite seu email'
              type="text"
            />

            <Input 
              placeholder='Digite sua senha'
              type="password"
            />

            <Button 
              type="submit"
              loading={true}
            >
              Acessar
            </Button>
          </form>

          <a className={styles.text}> Não possui uma conta? Cadastre-se</a>
        </div>
      </div>
  </>
  )
}
