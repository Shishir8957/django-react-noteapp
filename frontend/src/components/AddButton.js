import React from "react";
import {Link} from 'react-router-dom'

const AddButton = () => {
  return (
    <div>
      <Link to="/note/new" className="floating-button">
        <img src="https://img.icons8.com/ios-glyphs/512/plus-2-math.png" width={30}/>
      </Link>
    </div>
  )
}

export default AddButton
