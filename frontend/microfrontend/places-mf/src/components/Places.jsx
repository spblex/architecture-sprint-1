import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Card from "../../../../src/components/Card";

const Places = () => (
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
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<Places />)