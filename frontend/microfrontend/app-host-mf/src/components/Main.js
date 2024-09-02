import React, {Suspense} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {AddPlace, Places, Profile} from "../utils/Remotes";

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <main className="content">
        <section className="page__section">
            <Profile currentUser={currentUser}/>
            <AddPlace/>
        </section>
        <Places/>
    </main>
  );
}

export default Main;
