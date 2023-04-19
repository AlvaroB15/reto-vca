export const existsPercentageNegative = (options) => {
    const dataNegative = options.filter(data => data.percentage < 0);
    return dataNegative.length > 0;
};

export const percentageTotalMoreHundred = (options) => {
    let totalPercentage = options.reduce((sum, option) => sum + option.percentage, 0);
    return totalPercentage > 100;
}

export const verifyAddIndeterminate = (options, totalPercentage) => {
    if (totalPercentage !== 100) {
        options.push({
            "name": "Indeterminado",
            "percentage": 100 - totalPercentage
        })

        return true;
    }
    return false;
}

export const verifyMultiplesOptionsEquals = (options) => {

    return options.reduce((acumulador, elemento) => {
        // Buscamos el índice del objeto que tiene el mismo número que el elemento actual
        const indice = acumulador.findIndex(objeto => objeto.name === elemento.name);

        // Si encontramos el objeto, sumamos su probabilidad al objeto actual
        if (indice !== -1) {
            acumulador[indice].percentage += elemento.percentage;
        }
        // Si no encontramos el objeto, agregamos el elemento actual al acumulador
        else {
            acumulador.push(elemento);
        }

        // Devolvemos el acumulador actualizado
        return acumulador;
    }, []);
}
