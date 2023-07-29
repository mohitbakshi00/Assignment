import { useState } from 'react'

import Navbar from './navbar'
import ListGroup from './list'
import Feed from './feed'
import Tabs from './tabs'
import Experience from './experience'
import Education from './education'
import UserCard from './intro'
import AboutUs from './aboutUs'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{marginBottom:"5px"}}>
        <Navbar  />
        <div></div>
    
      </div>
      <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-3 ...">
        <div style={{ backgroundColor: "white" ,width:"250px"}} class="col-span-1">
          <ListGroup />
        </div>
        <div style={{ backgroundColor: "white" ,width:"250px"}} class="col-span-1 col-start-2 row-span-3">
          <UserCard />
        </div>
        <div class="col-span-2 col-start-3" style={{backgroundColor: "white", width:"610px"  ,textAlign:"center"}}>
          <Tabs />
        </div>
       
        <div style={{ backgroundColor: "white" ,width:"250px",textAlign:"center" ,marginTop:"10px"}} class="col-span-1">
          <Feed />
        </div>
        <div class="col-span-2 col-start-3" style={{ marginTop:"10px", backgroundColor: "white",width:"610px"  ,textAlign:"center"}}>
          <Experience />
        </div>
        <div class="col-span-2 col-start-3 " style={{ marginTop:"10px", backgroundColor: "white",width:"610px"  ,textAlign:"center"}}>
          <Education />
        </div>
        <div style={{ backgroundColor: "white" ,width:"250px",textAlign:"center" ,marginTop:"50px",marginRight:"30px"}} class="col-span-1">
          <AboutUs />
        </div>
      </div>
    </>
  );
}

export default App
