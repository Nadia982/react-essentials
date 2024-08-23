
//onSelect on the line below could be called anything (e.g. onClick or any other name we choose), 
//unlike the "children" prop which is provided by React and must be named children. 
export default function TabButton({children, isSelected, ...props}) {

  return (
    <li><button className={isSelected? "active" : ""} {...props}>{children}</button></li>
  )
}

