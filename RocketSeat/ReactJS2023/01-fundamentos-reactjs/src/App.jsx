import  {Post}  from "./Post";
import { Header } from "./components/Header";
import './global.css'

export function App() {
  return (
    <div>
      <Header />

    <Post 
      author="Lucas Abrantes" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorem nostrum dolores necessitatibus molestias recusandae! Illum deserunt tempora adipisci minima quidem incidunt necessitatibus eveniet molestiae quaerat ratione magnam, maiores consequatur."
    />
     <Post 
      author="Cileide" 
      content="Novo Post!!!"
    />
    </div>
  )
}

