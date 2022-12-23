function Paciente({ paciente }) {
  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="mx-5 mt-10 bg-white ml-3 shadow-md px-4 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded uppercase"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded uppercase"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
