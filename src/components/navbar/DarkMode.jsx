import React from 'react'
import LightButton from '/src/assets/website/lightmode.png'
import NightButton from '/src/assets/website/nightsmode.png'

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem('theme') || 'light'
  })

  React.useEffect(() => {
    const element = document.documentElement
    const isDark = theme === 'dark'

    element.classList.toggle('dark', isDark)
    element.style.colorScheme = isDark ? 'dark' : 'light'
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className='relative'>
      <img
        src={LightButton}
        alt='Switch to dark mode'
        onClick={toggleTheme}
        className={`absolute right-0 z-10 w-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] transition-all duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
      />

      <img
        src={NightButton}
        alt='Switch to light mode'
        onClick={toggleTheme}
        className={`w-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] transition-all duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default DarkMode
