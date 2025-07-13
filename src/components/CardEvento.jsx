 function CardEvento({ nome, cidade, imagem, local, data, url }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex items-center p-4 gap-4">
      <img
        src={imagem}
        alt={nome}
        className="w-60  h-40 object-cover rounded-md"
      />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800">{nome}</h3>
        <p className="text-xl text-gray-600">Cidade: {cidade}</p>
        <p className="text-xl text-gray-600">Local: {local}</p>
        <p className="text-lg text-gray-600">Data: {data}</p>
      </div>
        <a
          href={url}
          title={`Comprar ingresso para ${nome}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Comprar
        </a>
     
    </div>
  );
}
export default CardEvento