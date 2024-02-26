import { IconMoon, IconSun } from "../assets/icons"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { changeTheme } from "../store/theme/themeSlice"


export const Header = () => {
  const dispatch = useDispatch()
  const { value } = useSelector((state: RootState) => state.theme)

  const handleTheme = () => {
    dispatch(changeTheme(value === "light" ? "dark" : "light"))
  }
  return (
    <header className="fixed top-0 w-full">
      <nav className=" h-20 flex items-center justify-center text-black dark:text-white">
        <ul className="flex justify-center ">
          <li className="px-2 py-1 cursor-pointer">Experiencia</li>
          <li className="px-2 py-1 cursor-pointer">Proyectos</li>
          <li className="px-2 py-1 cursor-pointer">Sobre Mi</li>
          <li className="px-2 py-1 cursor-pointer">Contacto</li>
          <li className="px-2 py-1 cursor-pointer" onClick={handleTheme}>
            {
              value === "light" ?
                <IconSun className="mt-0.5" width={20} height={20} fill="#000" /> :
                <IconMoon className="mt-0.5" width={20} height={20} fill="#fff" />
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}
