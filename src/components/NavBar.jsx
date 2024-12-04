import { NavItems } from "../constants"

const NavBar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-transparent'>
      <nav className="flex justify-between items-center max-container">
        <a href="/"><img src="/logo-no-background.png" width={90} height={90} /> </a>
        <ul className='flex-1 flex justify-end items-center gap-14 mr-20 max-lg:hidden'>
                  {
                      NavItems.map((item) => (
                          <li key={item.label}>
                              <a href={item.href} className='font-montserrat font-medium leading-normal text-lg text-purple-950'>
                                  {item.label}
                              </a>
                          </li>
                      ))
                  }
        </ul>
        <div className="flex justify-end hidden max-lg:flex m-5">
          <img src="public/icons8-bars-stroke-24.png" alt='hamburger'/>
        </div>
      </nav>
      
    </header>
  )
}

export default NavBar