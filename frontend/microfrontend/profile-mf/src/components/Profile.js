import React from "react";

export default function Profile({currentUser}) {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

    return (
        <section className="profile page__section">
            <div className="profile__image" onClick={()=> setIsEditAvatarPopupOpen(true)} style={imageStyle}></div>
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" onClick={() => setIsEditProfilePopupOpen(true)}></button>
                <p className="profile__description">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={() => setIsAddPlacePopupOpen(true)}></button>
        </section>
    )
}