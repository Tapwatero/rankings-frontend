import arrayShuffle from "array-shuffle";

export const generateMatchups = (pEntries: string[]) => {
    let matchups: string[][] = [];

    for (const [index, comparison_candidate_1] of pEntries.entries()) {

        pEntries.slice(index + 1).forEach(comparison_candidate_2 => {
            matchups.push(arrayShuffle([comparison_candidate_1, comparison_candidate_2]));
        });

    }
    return matchups;
}
