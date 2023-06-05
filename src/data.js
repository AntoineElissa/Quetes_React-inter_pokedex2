const pokemons = [
  {
    name: "Pikachu",
    rate: 3.8,
    desc: "N°025 Pokémon Souris Taille: 0.4m Poids: 6.0kg",
    niveau: 12,
    attacks: [
      {
        name: "Ronge",
        degat: 10,
        desc: "",
      },
      {
        name: "Secousse Tonnerre",
        degat: 30,
        desc: "Lancez une pièce. Si c'est pile, ce pokémon s'inflige 10 dégats",
      },
    ],
    faiblesse: " x2",
    resistance: "-20",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "Drakofeu",
    rate: 3.4,
    desc: "N°06 Pokémon Flamme. Taille: 1.7m, poids: 90,5kg",
    niveau: 76,
    attacks: [
      {
        name: "Danseflamme",
        degat: 100,
        desc: "Défaussez 2 cartes Energie attachées à Dracaufeu pour pouvoir utiliser cette attaque",
      },
    ],
    faiblesse: "1",
    resistance: "-30",

    imgSrc:
      "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/1200px-Dracaufeu-RFVF.png",
  },
  {
    name: "Mewtwo",
    rate: 4.4,
    desc: "N°150 Pokémon Génétique. Taille: 2m, poids: 122kg",
    niveau: 53,
    attacks: [
      {
        name: "Psyko",
        degat: 10,
        desc: "Inflique 10 dégâts plus 10 dégâts supplémentaires pour chaque carte Energie attachée au Pokémon Défenseur",
      },
      {
        name: "Bouclier",
        degat: "-",
        desc: "Défaussez 1 carte énergie attacjée à Mewtwo pour pouvoir utiliser cette attaque. Pendant le prochain tour de votre adversaire, prévenez tous les effets ou attaques, y compris les dégats, infligés à Mewtwo",
      },
    ],
    faiblesse: " x1",
    resistance: "-",

    imgSrc: "https://www.pngmart.com/files/13/Mewtwo-PNG-Pic.png",
  },
];

export default pokemons;
