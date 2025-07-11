import { NovosEventos } from "../components/NovosEventos"; // Import no topo

export default function Home() {
  return (
    <div>
      <h1>Página Principal</h1>
      <NovosEventos /> {/* Agora seu componente NovosEventos está sendo usado */}
    </div>
  );
}