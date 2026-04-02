import React, { useState } from 'react'
import './Mirshoxid.css'

function Mirshoxid() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <div className={`${theme} page-wrapper`}>
        <div className="page-content">
          <h3>Theme Menu</h3>
          <button onClick={() => setTheme('light')}>Light</button>
          <button onClick={() => setTheme('dark')}>Dark</button>
          <button onClick={() => setTheme('blue')}>Blue</button>
          <button onClick={() => setTheme('red')}>Red</button>
          <button onClick={() => setTheme('gray')}>Gray</button>
        </div>
        <div className="page-content">
          <div>
            <h1>Mirshohid Page</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores numquam unde est architecto fugit reiciendis cum facilis perferendis alias voluptas in consequatur facere deserunt qui nostrum, quo maxime voluptatum minima maiores exercitationem molestiae repellat! Nobis assumenda amet obcaecati sequi sapiente. Corrupti, amet? Quos, commodi quas dolor tenetur quae repellat. Laborum!</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim error, itaque provident, voluptatum perferendis minima velit ea officia facere ipsam recusandae adipisci voluptatibus, quae sapiente inventore dignissimos cupiditate sunt fugiat possimus delectus iusto? Ea odio recusandae a itaque veniam impedit accusamus quod qui rem soluta. Dolor recusandae officia modi vero reprehenderit iste praesentium sequi tenetur provident facere laboriosam, odit reiciendis assumenda, delectus corporis nemo vel esse illum! Atque, libero.
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mirshoxid
