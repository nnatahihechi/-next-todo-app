import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AddTodo from './AddTodo'
import Login from './Login'
import TodoList from '../src/Component/TodoList'
import SideBar from '../src/Component/SideBar'



const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TODOAPP nextjs</title>
        <meta name="description" content="how to create todoApp with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.sideBar}> 
      <SideBar />
      </div>

      <div className={styles.main}>
      <AddTodo />
      <TodoList />  
    </div>
      {/* <Login/>*/}
    </div>
  )
}

export default Home
