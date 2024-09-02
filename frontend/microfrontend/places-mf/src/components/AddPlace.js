import Card from "../../../../src/components/Card";
import React from "react";

const AddPlaces = () => (
    <section className="places page__section">
        <ul className="places__list">
            {cards.map((card) => (
                <Card
                    key={card._id}
                    card={card}
                    onCardClick={onCardClick}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                />
            ))}
        </ul>
    </section>
);