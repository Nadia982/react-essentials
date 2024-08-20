

export default function TabButton({children}) {
function handleClick(){
    console.log("clicking")
}

  return (
    <li><button onClick={handleClick}>{children}</button></li>
  )
}

