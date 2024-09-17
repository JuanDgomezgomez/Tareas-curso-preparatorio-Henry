// Función para ingresar las variables y estadísticas históricas
function ingresarDatos() {
    let equipoLocal = prompt("Ingrese el nombre del equipo local:");
    let equipoVisitante = prompt("Ingrese el nombre del equipo visitante:");

    let partidosGanadosLocal = parseInt(prompt(`Ingrese la cantidad de partidos ganados por ${equipoLocal}:`));
    let partidosPerdidosLocal = parseInt(prompt(`Ingrese la cantidad de partidos perdidos por ${equipoLocal}:`));
    let partidosEmpatadosLocal = parseInt(prompt(`Ingrese la cantidad de partidos empatados por ${equipoLocal}:`));

    let partidosGanadosVisitante = parseInt(prompt(`Ingrese la cantidad de partidos ganados por ${equipoVisitante}:`));
    let partidosPerdidosVisitante = parseInt(prompt(`Ingrese la cantidad de partidos perdidos por ${equipoVisitante}:`));
    let partidosEmpatadosVisitante = parseInt(prompt(`Ingrese la cantidad de partidos empatados por ${equipoVisitante}:`));

    return {
        equipoLocal: equipoLocal,
        equipoVisitante: equipoVisitante,
        partidosGanadosLocal: partidosGanadosLocal,
        partidosPerdidosLocal: partidosPerdidosLocal,
        partidosEmpatadosLocal: partidosEmpatadosLocal,
        partidosGanadosVisitante: partidosGanadosVisitante,
        partidosPerdidosVisitante: partidosPerdidosVisitante,
        partidosEmpatadosVisitante: partidosEmpatadosVisitante
    };
}

// Función para calcular probabilidades basadas en los datos históricos
function calcularProbabilidades(datos) {
    let totalPartidosLocal = datos.partidosGanadosLocal + datos.partidosPerdidosLocal + datos.partidosEmpatadosLocal;
    let totalPartidosVisitante = datos.partidosGanadosVisitante + datos.partidosPerdidosVisitante + datos.partidosEmpatadosVisitante;

    let probabilidadVictoriaLocal = datos.partidosGanadosLocal / totalPartidosLocal;
    let probabilidadEmpateLocal = datos.partidosEmpatadosLocal / totalPartidosLocal;
    let probabilidadVictoriaVisitante = datos.partidosGanadosVisitante / totalPartidosVisitante;

    return {
        probabilidadVictoriaLocal: probabilidadVictoriaLocal,
        probabilidadEmpateLocal: probabilidadEmpateLocal,
        probabilidadVictoriaVisitante: probabilidadVictoriaVisitante
    };
}

// Función para analizar las probabilidades y predecir un resultado
function predecirResultado(probabilidades, datos) {
    console.log(`\nAnálisis del partido: ${datos.equipoLocal} vs ${datos.equipoVisitante}`);

    if (probabilidades.probabilidadVictoriaLocal > probabilidades.probabilidadVictoriaVisitante 
        && probabilidades.probabilidadVictoriaLocal > probabilidades.probabilidadEmpateLocal) {
        console.log(`Recomendación: Mayor probabilidad de victoria para ${datos.equipoLocal}`);
    } else if (probabilidades.probabilidadVictoriaVisitante > probabilidades.probabilidadVictoriaLocal 
        && probabilidades.probabilidadVictoriaVisitante > probabilidades.probabilidadEmpateLocal) {
        console.log(`Recomendación: Mayor probabilidad de victoria para ${datos.equipoVisitante}`);
    } else if (probabilidades.probabilidadEmpateLocal > probabilidades.probabilidadVictoriaLocal 
        && probabilidades.probabilidadEmpateLocal > probabilidades.probabilidadVictoriaVisitante) {
        console.log("Recomendación: Mayor probabilidad de empate");
    } else {
        console.log("El partido parece estar muy equilibrado. Las probabilidades son similares.");
    }
}

// Función principal que ejecuta todo el análisis
function main() {
    let datosPartido = ingresarDatos();
    let probabilidades = calcularProbabilidades(datosPartido);
    predecirResultado(probabilidades, datosPartido);
}

// Ejecutar el programa en la consola
main();
