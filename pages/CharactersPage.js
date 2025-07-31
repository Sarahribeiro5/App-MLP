import React from "react";

function CharactersPage() {
  const characters = [
    { name: "Twilight Sparkle", description: "Uma líder inteligente e estudiosa." },
    { name: "Rainbow Dash", description: "Rápida e corajosa." },
    { name: "Pinkie Pie", description: "Sempre animada e divertida." },
    { name: "Fluttershy", description: "Gentil e amiga dos animais." },
    { name: "Applejack", description: "Honesta e trabalhadora." },
    { name: "Rarity", description: "Elegante e criativa." },
  ];

  return (
    <div>
      <h1>Personagens Principais</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <strong>{character.name}:</strong> {character.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharactersPage;