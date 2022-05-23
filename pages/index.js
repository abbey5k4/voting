import Head from 'next/head'
import Image from 'next/image'
import LandingScreen from '../src/container/LandingScreen'
import Layout from '../src/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <LandingScreen />
      </Layout>
    </div>
  )
}
