import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Felicitacion({mensajes}) {

  const randomMensaje = () => mensajes[(Math.floor(Math.random()*mensajes.length))];

  const [agradecimiento, setAgradecimiento] = useState(randomMensaje());

  return (
    <div>
      <h3>{agradecimiento}</h3>
      <button onClick={() => setAgradecimiento(randomMensaje())}>
        Nuevo Saludo
      </button>
    </div>
  );
}