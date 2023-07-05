import React from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
// import According from './Pages/Accordion'
// import Avatarr from './Pages/Avatarr'
// import { Badgee } from './Pages/Badgee'
// import Cardd from './Pages/Cardd'
// import Collapsee from './Pages/Collapsee'
// import Caroseall from './Pages/Caroseall'
// import Dialoguee from './Pages/Dialoguee'
// import { Drawerr } from './Pages/Drawerr'
// import Listt from './Pages/List'
// import Menu1 from './Pages/Menu1'
// import Menu2 from './Pages/Menu2'
// import Footer from './Pages/Footer'

const App = () => {
  return (
    <>
{/* <According />    
<Avatarr />
<Badgee />
<Cardd />
<Collapsee />
<Caroseall />
<Dialoguee />
<Drawerr />
<Listt />
<Menu1 />
<Menu2 />
<Footer /> */}

<div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full ">
          <Navbar />
          {/* Rest of your application content */}

        

        </div>
      </div>



    </>
  )
}

export default App