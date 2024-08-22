import React, { useState } from 'react';

function Download() {
  const [date, setDate] = useState(new Date().toLocaleString());
  const [name, setName] = useState("");
  const [takeoff, setTakeoff] = useState("");
  const [pickup, setPickup] = useState("");
  const [landing, setLanding] = useState("");

  const handleTakeoff = () => {
    const formattedTime = getFormattedTime();
    setTakeoff(formattedTime);
  };

  const handlePickup = () => {
    const formattedTime = getFormattedTime();
    setPickup(formattedTime);
  };

  const handleLanding = () => {
    const formattedTime = getFormattedTime();
    setLanding(formattedTime);
  };

  const handleCreateFile = () => {
    const [day, month, year, time] = date.split(/[\/ ]/);
    const templateText = `INFORME DEL PACIENTE\nNombre del paciente: ${name}\nFecha del accidente: ${day}/${month}/${year}\nHora de despegue: ${takeoff}\nHora de recogida: ${pickup}\nHora de aterrizaje: ${landing}`;
    const blob = new Blob([templateText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `informe_${date.replace(/[\/:]/g, '-')}.txt`;
    link.click();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const getFormattedTime = () => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    return `${hour}:${minute}:${second}`;
  };

  return (
    <div className="download-container">
      <h2>Informe recogida helicóptero</h2>
      <form>
        <label>
          Nombre del paciente:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </form>
      <div className="report-info">
        <p>
          Hora de despegue: {takeoff}
          <button className="btn" onClick={handleTakeoff}>
            Marcar despegue
          </button>
        </p>
        <p>
          Recogida del paciente: {pickup}
          <button className="btn" onClick={handlePickup}>
            Marcar recogida
          </button>
        </p>
        <p>
          Hora de aterrizaje: {landing}
          <button className="btn" onClick={handleLanding}>
            Marcar aterrizaje
          </button>
        </p>
        <button className="btn" onClick={handleCreateFile}>
          Crear archivo con los datos
        </button>
        <p>@mrksmcc ❤️</p>
      </div>
    </div>
  );
}

export default Download;