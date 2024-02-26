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
    <div>
      <nav className="h-20 flex items-center justify-center text-black dark:text-white">
        <ul className="flex justify-center gap-x-5">
          <li className="px-3 py-1">Experiencia</li>
          <li className="px-3 py-1">Proyectos</li>
          <li className="px-3 py-1">Sobre Mi</li>
          <li className="px-3 py-1">Contacto</li>
          <li className="px-3 py-1" onClick={handleTheme}>
            {
              value === "light" ?
                <IconSun className="mt-0.5" width={20} height={20} fill="#fff" /> :
                <IconMoon className="mt-0.5" width={20} height={20} fill="#fff" />
            }

          </li>
        </ul>
      </nav>
    </div>
  )
}
