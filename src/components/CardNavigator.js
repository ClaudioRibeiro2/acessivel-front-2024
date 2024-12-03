import Link from "next/link";
import { Card } from "./ui/card";

const CardNavigator = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((card, index) => (
                <Link href={card.href} key={index}>
                    <Card className="text-white px-14 py-14 bg-primary-blue text-center text-2xl font-bold border-2 border-primary-blue">
                        <span>{card.title}</span>
                    </Card>
                </Link>
            ))}
        </div>
    );
}

export default CardNavigator;