import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logoTelaLogin.png'
import { Input } from '../../components/common/input'
import { Button } from '../../components/common/Button'

import Link from 'next/link'

export default function Signup() {
  return (
    <>
      <Head>
      <title>Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria Petros" width="400px" height="200px"/>

        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form>
            <Input 
              placeholder='Digite seu nome'
              type="text"
            />

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
              Cadastrar
            </Button>
          </form>
          <Link href="/">
            <a className={styles.text}> Já possui uma conta? Faça-login</a>
          </Link>
        </div>
      </div>
  </>
  )
}
