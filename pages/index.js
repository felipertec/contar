import { useState } from 'react';

function Home(){
    return(
        <div>
            <h1>Pagina Principal</h1>
            <Contador />
        </div>
    ) 
}

function Contador(){

    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    function retirarContador(){
        setContador(contador - 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador} >Adicionar</button>
            <button onClick={retirarContador}>Retirar</button>
        </div>
        
    )

}

export default Home