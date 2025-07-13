import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LayoutPadrao from "./layouts/LayoutPadrao";
import CardEvento from "./components/CardEvento";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function EventosPage() {
  const [eventos, setEventos] = useState([]);
  const [status, setStatus] = useState('Carregando...');
  const query = useQuery();
  const cidade = query.get('cidade');

  useEffect(() => {
    const buscarEventos = async () => {
      try {
        const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${encodeURIComponent(cidade)}&countryCode=BR`;

        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Erro na resposta da API");

        const dados = await resposta.json();

        if (!dados._embedded || !dados._embedded.events) {
          setStatus('Nenhum evento encontrado para essa cidade.');
          return;
        }

        setEventos(dados._embedded.events);
        setStatus('');
      } catch (erro) {
        console.error(erro);
        setStatus('Erro: ' + erro.message);
      }
    };

    if (cidade) {
      buscarEventos();
    }
  }, [cidade]);

  return (
    <LayoutPadrao>
      <div className="flex flex-col items-center gap-6 mt-6">
        <h2  className="text-lg flex gap-4 w-full max-w-7xl">
          Sua busca para<span className="font-bold">{cidade}</span>trouxe os seguintes resultados
        </h2>

        {status && <p className="text-gray-500">{status}</p>}

        <div className="flex flex-col gap-4 w-full max-w-full">
          {eventos.map((evento) => (
            <CardEvento
              key={evento.id}
              nome={evento.name}
              imagem={evento.images?.[0]?.url}
              cidade={evento._embedded?.venues[0]?.city?.name}
              local={evento._embedded?.venues[0]?.name}
              data={new Date(evento.dates?.start?.dateTime).toLocaleString()}
              url={evento.url}
            />
          ))}
        </div>
      </div>
    </LayoutPadrao>
  );
}



