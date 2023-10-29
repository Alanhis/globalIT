import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card/Card'
import Modal from './component/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState()
  const [data, setData] = useState()
  useEffect(() => {
    async function getData(){
     await fetch("http://127.0.0.1:3000/")
     .then(data => data.json())
     .then(res => setUsers(res))
    }
    getData()
  }, [])
  return (
    <main style={{display: "grid", gridTemplateColumns: "400px auto 40%"}}>
      {users && users.map((user, index) => <Card key={index} data={user} setData={setData} setIsOpen={setIsOpen}/>)}
      {isOpen && <Modal data={data} setIsOpen={setIsOpen} />}
    </main>
  )
}

export default App
