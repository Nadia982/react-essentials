import React from 'react'

//the line below uses the rest property to collect all other props that might be received on the "Section" component and merge them together into a props object.
const Section = ({title, children, ...props}) => {
  return (
    // in the line below, the props collected using the rest operator are forwarded to the <section> element using the spread operator.  
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Section