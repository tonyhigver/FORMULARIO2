"use client";

import { useState } from "react";

export default function Home() {
  const [tipoDataset, setTipoDataset] = useState("");
  const [nivelDificultad, setNivelDificultad] = useState("");
  const [formato, setFormato] = useState("");
  const [estiloLenguaje, setEstiloLenguaje] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [estiloEntrenamiento, setEstiloEntrenamiento] = useState("");
  const [coberturaTemporal, setCoberturaTemporal] = useState("");

  const cardStyle = "p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition duration-200";

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Formulario de Dataset Interactivo</h1>

      {/* Tipo de Dataset */}
      <div className={cardStyle}>
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

      {/* Secciones dinámicas */}
      {tipoDataset && (
        <div className="space-y-4">
          {/* Nivel de dificultad */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Nivel de dificultad:</label>
            <select
              className="w-full border p-2 rounded"
              value={nivelDificultad}
              onChange={(e) => setNivelDificultad(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
              <option value="experto">Experto</option>
            </select>
          </div>

          {/* Formato de presentación */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Formato de presentación:</label>
            <select
              className="w-full border p-2 rounded"
              value={formato}
              onChange={(e) => setFormato(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="markdown">Markdown</option>
              <option value="xlsx">XLSX</option>
              <option value="parquet">Parquet</option>
              <option value="txt">TXT</option>
            </select>
          </div>

          {/* Estilo de lenguaje */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Estilo de lenguaje:</label>
            <select
              className="w-full border p-2 rounded"
              value={estiloLenguaje}
              onChange={(e) => setEstiloLenguaje(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="formal">Formal</option>
              <option value="coloquial">Coloquial</option>
              <option value="resumido">Resumido</option>
              <option value="detallado">Detallado</option>
              <option value="tecnico">Técnico</option>
              <option value="educativo">Educativo / estilo docente</option>
            </select>
          </div>

          {/* Cantidad de ejemplos / tamaño */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Cantidad de ejemplos / tamaño:</label>
            <select
              className="w-full border p-2 rounded"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="1k">1k</option>
              <option value="5k">5k</option>
              <option value="10k">10k</option>
              <option value="50k">50k</option>
              <option value="100k">100k</option>
            </select>
          </div>

          {/* Estilo de entrenamiento */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Estilo de entrenamiento:</label>
            <select
              className="w-full border p-2 rounded"
              value={estiloEntrenamiento}
              onChange={(e) => setEstiloEntrenamiento(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="pasivo">Dataset “pasivo” (ejemplos estáticos)</option>
              <option value="interactivo">Dataset “interactivo” (ejemplos con variantes, preguntas de autoevaluación)</option>
            </select>
          </div>

          {/* Cobertura temporal / actualización */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Cobertura temporal / actualización:</label>
            <select
              className="w-full border p-2 rounded"
              value={coberturaTemporal}
              onChange={(e) => setCoberturaTemporal(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="historicos">Datos históricos</option>
              <option value="recientes">Datos recientes</option>
              <option value="tiempo-real">En tiempo real (donde aplique)</option>
            </select>
          </div>
        </div>
      )}

      {/* Botón de envío */}
      {tipoDataset && (
        <div className="text-center mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
}
