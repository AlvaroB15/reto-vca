export const getNumberRandomWithProbability = (options, totalPercentage) => {
    const randomNumber = Math.random() * totalPercentage;
    let cumulativePercentage = 0;

    for (let i = 0; i < options.length; i++) {
        cumulativePercentage += options[i].percentage;

        if (randomNumber < cumulativePercentage) {
            return options[i].name;
        }
    }
}
