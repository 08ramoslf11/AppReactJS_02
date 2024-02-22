import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [estadoInterruptor, setEstadoInterruptor] = useState(false)
  const [contador, setContador] = useState(0)

  function ligarLampada() {
    setEstadoInterruptor(!estadoInterruptor)
    if (estadoInterruptor == false)
      setContador(contador + 1)
  }
  
  return (
    <div>
      <h2>

        

        {
          contador <5
          ? `Você já ligou ${contador} vezes a lampada ${contador >= 5 ? "acabou explodindo": ""}`
          : "Não clique mais, pois sua lampada ja era "
          
        }
      </h2>
      {contador >= 5
        ? <Image src={"/assets/explodiu.png"} width={360} height={277} />
        
        : estadoInterruptor == true
          ? < Image src={"/assets/on.png"} width={286} height={388} />
          : <Image src={"/assets/off.png"} width={286} height={388} />
      } 
        {
          contador <5
          ? <button onClick={ligarLampada}> 
          {estadoInterruptor == false ?"Desligado"
        :"Ligado"}
          </button>
          : null
        }

    </div>
  );
}
