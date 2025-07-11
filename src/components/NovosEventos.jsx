import { useState } from "react";

export function NovosEventos() {
  const [eventos, setEventos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function buscarEventos() {
    setCarregando(true);
    setErro(null);
    try {
      // Substitua 'SEU_TOKEN_AQUI' pelo seu token da Eventbrite
      const resposta = await fetch(
        "https://www.eventbriteapi.com/v3/events/search/?q=tecnologia",
        {
          headers: {
            Authorization: "Bearer SEU_TOKEN_AQUI",
          },
        }
      );
      const dados = await resposta.json();
      setEventos(dados.events || []);
    } catch (e) {
      setErro("Erro ao buscar eventos.");
    }
    setCarregando(false);
  }

  return (
    <div className="my-8">
      <button
        onClick={buscarEventos}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Buscar Novos Eventos
      </button>
      {carregando && <p>Carregando...</p>}
      {erro && <p className="text-red-600">{erro}</p>}
      <ul className="mt-4">
        {eventos.map((evento) => (
          <li key={evento.id} className="mb-2 p-2 border rounded">
            <strong>{evento.name.text}</strong>
            <div>{evento.start.local}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}











