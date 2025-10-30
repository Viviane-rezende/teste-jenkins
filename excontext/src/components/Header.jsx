import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const Header = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <header style={{
        backgroundColor: theme==='light'?'#f0f0f0':'#222',
        color: theme==='light'?'#000':'#fff',
        padding: '10px'
    }}>
        <h1>Meu App em Context API / Pipeline com Jenkins</h1>
        <p>Executando Pipeline a cada 5 minutos</p>
        <p>Executando Pipeline a cada 5 minutos e fazendo commit a cada alteração</p>
        <p>Executando Pipeline a cada 5 minutos e fazendo commit/push a cada alteração</p>
        <p>Commit e push só são realizados quando uma alteração é identificada</p>
    </header>
  )
}

export default Header