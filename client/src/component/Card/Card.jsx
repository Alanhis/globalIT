

function Card({data, setData, setIsOpen}) {
console.log(data)
  return (
    <div onClick={() => {setIsOpen(true); setData(data)}}>
      <h2>{data.name}</h2>
      <div>
        <p>{data.phone}</p>
      </div>
      <div>
        <p>{data.email}</p>
      </div>
    </div>
  )
}

export default Card
