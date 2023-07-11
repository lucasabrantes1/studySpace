import  { PencilLine } from 'phosphor-react'

import style from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar (){
    return (
        <aside className={style.sidebar}>
            <img className={style.cover}
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />

            <div className={style.profile}>
                <Avatar src="https://github.com/maykbrito.png"/>

                <strong>Lucas Abrantes</strong>
                <span>Desempregado</span>
            </div>

            <footer>
                <a href="#">
                  <PencilLine size={20}/>  
                  Editar seu perfil    
                </a> 
            </footer>
        </aside>
    );
}