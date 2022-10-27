import { useContext, FormEvent } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logoTelaLogin.png'
import { Input } from '../components/common/input'
import { Button } from '../components/common/Button'

import { AuthContext } from '../contexts/AuthContext'


import Link from 'next/link'

export default function Home() {
  const {signIn} = useContext(AuthContext)

  async function handleLogin(event: FormEvent){
    event.preventDefault()

    let data = {
      email: "algum@teste.com",
      password: "123123"
    }
    await signIn(data)
  }

  return (
    <>
      <Head>
      <title>Petros pizza italiana - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria Petros" width="400px" height="200px"/>

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
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
              loading={false}
            >
              Acessar
            </Button>
          </form>
          <Link href="/signup">
            <a className={styles.text}> Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
  </>
  )
}
