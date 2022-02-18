// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

// export default function Nav(props) {
//   return (
//     <div>
      
//        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
//   <div className="container-fluid">
//     <Link className="navbar-brand" to='/'>{props.title}</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className=" nav-item nav-link " aria-current="page" to='/'>{props.home}</Link>
//         </li>
//         <li className="nav-item">
//           <Link  to='/about' className="nav-link" >{props.about}</Link>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//           {props.Dropdown}
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><Link className="dropdown-item" to="/">By Number</Link></li>
//             <li><Link className="dropdown-item" to="/">By Email</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="/">By Social Media</Link></li>
//           </ul>
//         </li>
        
//       </ul>
//       {/* <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-light" type="submit">Search</button>
//       </form> */}
//       <div className={`form-check form-switch text-light`}>
//         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//       </div>

//     </div>

//   </div>
// </nav>
//     </div>
//   )
// }
// Nav.propTypes ={
//      title : PropTypes.string,
//      home: PropTypes.string,
//      about:PropTypes.string
// }

// Nav.defaultProps ={
//     title: 'Set Title Here',
//     home: 'Home',
//     about: 'About Us',
//     Dropdown: 'Dropdown'
// };


import React from 'react'
import PropTypes from 'prop-types'


export default function Nav(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
    <a className="navbar-brand" href=''>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href=''>{props.home}</a>
        </li>
        
        
      </ul>
      
      <div className={`form-check form-switch text-light`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>

    </div>

  </div>
</nav>
    </div>
  )
}
Nav.propTypes ={
     title : PropTypes.string,
     home: PropTypes.string,
     about:PropTypes.string
}

Nav.defaultProps ={
    title: 'Set Title Here',
    home: 'Home',
    about: 'About Us',
    Dropdown: 'Dropdown'
};