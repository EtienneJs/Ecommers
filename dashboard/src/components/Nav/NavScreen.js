import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'



export const NavScreen = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
     <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-primary sidebar collapse">
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to='/home'  className="nav-link text-white" aria-current="page" href="/">
            <span data-feather="home"></span>
            Dashboard
          </Link>
        </li>
        {
           (user.name === 'Admin' || user.editProduct === 'permitido') &&
          <li className="nav-item">
          <Link to='/home/allProduct'  className="nav-link text-white" href="verProducts">
            <span data-feather="users"></span>
            Ver Todos los productos
          </Link>
        </li>
        }

        {
          (user.name === 'Admin' || user.putProduct === 'permitido') &&
          <li className="nav-item">
          <Link to='/home/newProduct'  className="nav-link text-white" href="products">
            <span data-feather="shopping-cart"></span>
           Ingresar un producto
          </Link>
        </li>
        }
        
        { (user.name === 'Admin' || user.orderUsers === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/order'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Compras
          </Link>
        </li>
        }
        { (user.name === 'Admin' || user.editUsers === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/allUser'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Usuarios registrados
          </Link>
        </li>
        }
        { (user.name === 'Admin' ) &&
          <li className="nav-item">
          <Link to='/home/newAdmin'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Register Admin
          </Link>
        </li>
        }
        
        { (user.name === 'Admin' ) &&
          <li className="nav-item">
          <Link to='/home/allAdmin'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Admins
          </Link>
        </li>
        }
        
      </ul>
    </div>
  </nav>
    </>
  )
}
