import { useState } from "react";

export default function Home() {
  const [tipoDataset, setTipoDataset] = useState("");
  
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Selecciona tu tipo de Dataset</h1>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Tipo de Dataset:</label>
        <select
          className="w-full border p-2 rounded"
          value={tipoDataset}
          onChange={(e) => setTipoDataset(e.target.value)}
        >
          <option value="">-- Selecciona --</option>
          <option value="contexto">Datasets con más contexto</option>
          <option value="especializado">Datasets de campo especializado</option>
          <option value="mixtos">Datasets mixtos / adaptativos</option>
        </select>
      </div>

      {tipoDataset === "contexto" && (
        <div className="mb-4 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Sección Contexto</h2>
          <input type="text" placeholder="Nombre del dataset" className="w-full p-2 border rounded mb-2" />
          <input type="range" min="0" max="10" className="w-full" />
        </div>
      )}

      {tipoDataset === "especializado" && (
        <div className="mb-4 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Sección Especializado</h2>
          <input type="text" placeholder="Área de especialización" className="w-full p-2 border rounded mb-2" />
          <select className="w-full p-2 border rounded">
            <option>Análisis A</option>
            <option>Análisis B</option>
            <option>Análisis C</option>
          </select>
        </div>
      )}

      {tipoDataset === "mixtos" && (
        <div className="mb-4 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Sección Mixtos</h2>
          <input type="text" placeholder="Descripción del dataset" className="w-full p-2 border rounded mb-2" />
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Incluye datos de campo y contexto
          </label>
        </div>
      )}

      <button className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
    </div>
  );
}
