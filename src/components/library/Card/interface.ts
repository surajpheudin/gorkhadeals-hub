import { ICardOne } from "./CardOne/interface";
import { ICardTwo } from "./CardTwo/interface";

export type CardType = CardOne | CardTwo;

interface CardOne extends ICardOne {
    variant: "one";
}

interface CardTwo extends ICardTwo {
    variant: "two";
}
export type CardVariant = "one" | "two";
