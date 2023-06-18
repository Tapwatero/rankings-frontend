import { createContext } from 'react';


interface IRankingContext {
    id: string,
    topic: string,
}

const initialRankingContext: IRankingContext = {
    id: "",
    topic: "",
};

const RankingContext = createContext<IRankingContext>(initialRankingContext);

export default RankingContext;
