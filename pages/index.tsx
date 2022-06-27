import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AddTodo from './AddTodo'
import TodoList from '../src/Component/TodoList'



const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TODOAPP nextjs</title>
        <meta name="description" content="how to create todoApp with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default Home
