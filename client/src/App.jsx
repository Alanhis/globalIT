import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card/Card'
import Modal from './component/Modal/Modal';
import SearchSVG from './assets/search.svg'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState()
  const [data, setData] = useState()
  const [filterUsers, setFilterUsers] = useState(users)
  useEffect(() => {
    async function getData(){
     await fetch("http://127.0.0.1:3000/")
     .then(data => data.json())
     .then(res => {setUsers(res);setFilterUsers(res)})
    }
    getData()
  }, [])
  return (
    <><header>
      <div className='header_container'>
        <input className='header_input' onChange={(e) => {
         if( e.target.value.trim() !== ''){
          setFilterUsers(users.filter(sortData => sortData.name.includes(e.target.value.trim())))
         } else{
          setFilterUsers(users)
         }
        }}>
        </input>
        <img src={SearchSVG}/>
      </div>
    </header><main className='main_container'>
        {filterUsers && filterUsers.map((user, index) => <Card key={index} data={user} setData={setData} setIsOpen={setIsOpen} />)}
        {isOpen && <Modal data={data} setIsOpen={setIsOpen} />}
      </main></>
  )
}

export default App
