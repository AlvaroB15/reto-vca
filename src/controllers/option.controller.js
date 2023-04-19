import {dataEnvironment} from '../config.js';
import {
    existsPercentageNegative,
    percentageTotalMoreHundred,
    verifyAddIndeterminate,
    verifyMultiplesOptionsEquals
} from "../utils/operations.js";
import {getNumberRandomWithProbability} from "../utils/numberRandom.js";

export const getChooseOption = async (req, res) => {
    try {

        // Si es que no hay token no hace ningun proceso
        if (!(req.headers.authorization.split(" ")[0] === "Bearer" && req.headers.authorization.split(" ")[1] === dataEnvironment.TOKEN)) {
            throw new Error("Debe insertar el token correcto para poder hacer el proceso");
        }

        const {data} = req.body;

        // Si hay mas de {{5}} objetos declarados en el request, ese 5 se declaró en el config.js
        if (data.length > dataEnvironment.AMOUNT_DATA) {
            throw new Error("Se debe solo insertar al menos 1 opcion o maxima 5");
        }

        res.status(200).json({
            result: processData(data)
        });

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const processData = (options) => {

    try {
        // Si existe porcentajes negativos
        if (existsPercentageNegative(options)) {
            throw new Error("Los porcentajes deben ser positivo");
        }

        // Si la suma de porcentaje sobrepasa el de 100 en el request
        if (percentageTotalMoreHundred(options)) {
            throw new Error("La suma de los porcentajes han superado el limite de 100");
        }

        let totalPercentage = options.reduce((sum, option) => sum + option.percentage, 0);

        // Si la suma no consigue alcanzar el 100, lo que falte se asigna al Indeterminado.
        if (verifyAddIndeterminate(options, totalPercentage)) {
            totalPercentage = 100;
        }

        // Si hay names iguales, se suman y se convierten en 1
        options = verifyMultiplesOptionsEquals(options);

        return getNumberRandomWithProbability(options, totalPercentage);

    } catch (error) {
        throw new Error(error);
    }
};


