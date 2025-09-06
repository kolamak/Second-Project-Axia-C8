import { createFileRoute } from '@tanstack/react-router'
import Nav from '../nav'
import Footer from '../footer'
// import SignUp from '../signUp/pages';
// import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);


    // const [success, unSucces] = useState()

  //  if (loading) {return <div>Loading...</div>;
  // }
  // if (error) return (<div><img src="./" alt="caution.img" /></div>
  // );

  return (
    <>
    <Nav />
    <Footer />
    {/* <SignUp /> */}
    </>
  )
}


