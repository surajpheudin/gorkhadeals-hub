import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import { CardType } from "./interface";

const Card = (props: CardType) => {
    switch (props.variant) {
        case "one":
            return <CardOne {...props} />;

        case "two":
            return <CardTwo {...props} />;

        default:
            return null;
    }
};

export default Card;
