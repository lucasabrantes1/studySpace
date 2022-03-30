type Componente = {
    new(...args: any[]): {
        render(): any;
    }
}

export default function logRender<C extends Componente>(componente: C){
    return class extends componente {
        
        render(){
            console.log('Rendered...')
            const r: any = super.render()
            console.log('Render done...')
            return r
        }
    }
}