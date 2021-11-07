import React from 'react'
import ButtonSidebarSamll from '../components/sidebar-small/buttonSidebarSmall'

const Test = () => {
    return (
        <div className="h-screen  w-16 text-center">
        <div className="bg-parotia-1 h-full">
          <div className="flex items-center justify-start pt-20 ml-8 ">
            <p className="font-bold text-white text-xl"></p>
          </div>
          <nav className="mt-6">
           <ButtonSidebarSamll title="Dashbd"/>
           <ButtonSidebarSamll title="Usuarios"/>
           <ButtonSidebarSamll title="Inventario"/>
           <ButtonSidebarSamll title="Ingresos"/>
           <ButtonSidebarSamll title="Egresos"/>
           <ButtonSidebarSamll title="Ajustes"/>
           <ButtonSidebarSamll title="Egresos"/>
           <ButtonSidebarSamll title="Egresos"/>
          </nav>
        </div>
      </div>
    )
}

export default Test
