const moviesData = [
  {
    id: 1,
    name: "Spider-Man: No Way Home",
    genre: "Action",
    ageRestriction: 13,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM"],
    description: "Peter Parker seeks Doctor Strange's help to make people forget he is Spider-Man, but the spell goes wrong and brings visitors from other realities."
  },
  {
    id: 2,
    name: "Frozen II",
    genre: "Animation",
    ageRestriction: 3,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    showTime: ["11:00 AM", "2:00 PM", "5:00 PM"],
  },
  {
    id: 3,
    name: "The Dark Knight",
    genre: "Action",
    ageRestriction: 16,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    showTime: ["1:00 PM", "4:00 PM", "8:00 PM"],
  },
  {
    id: 4,
    name: "Toy Story 4",
    genre: "Animation",
    ageRestriction: 3,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg",
    showTime: ["9:00 AM", "12:00 PM", "3:00 PM"],
  },
  {
    id: 5,
    name: "Inception",
    genre: "Sci-Fi",
    ageRestriction: 13,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    showTime: ["2:00 PM", "5:00 PM", "9:00 PM"],
    description: "A skilled thief who steals corporate secrets through dream-sharing technology is offered a chance to regain his old life in exchange for a task considered impossible: inception."
  },
  {
    id: 6,
    name: "The Lion King",
    genre: "Animation",
    ageRestriction: 3,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
    showTime: ["10:30 AM", "1:30 PM", "4:30 PM"],
  },
  {
    id: 7,
    name: "Avengers: Endgame",
    genre: "Action",
    ageRestriction: 13,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    showTime: ["11:30 AM", "3:30 PM", "7:30 PM"],
  },
  {
    id: 8,
    name: "Joker",
    genre: "Drama",
    ageRestriction: 18,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    showTime: ["2:30 PM", "6:00 PM", "9:30 PM"],
  },
  {
    id: 9,
    name: "Toy Story 4",
    genre: "Animation/Family",
    ageRestriction: 3,
    posterUrl:
      "https://lumiere-a.akamaihd.net/v1/images/p_toystory4_19639_917ad716.jpeg",
    showTime: ["10:00 AM", "1:00 PM", "4:00 PM"],
    description:
      "Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky.",
  },
  {
    id: 10,
    name: "The Lion King",
    genre: "Animation/Musical",
    ageRestriction: 3,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
    showTime: ["11:00 AM", "2:00 PM", "5:00 PM"],
    description:
      "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
  },
  {
    id: 11,
    name: "Spider-Man: Across the Spider-Verse",
    genre: "Action/Animation",
    ageRestriction: 13,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    showTime: ["12:30 PM", "3:30 PM", "6:30 PM"],
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
  },
  {
    id: 12,
    name: "The Dark Knight",
    genre: "Action/Drama",
    ageRestriction: 16,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    showTime: ["2:00 PM", "5:00 PM", "8:00 PM"],
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 13,
    name: "Frozen II",
    genre: "Animation/Musical",
    ageRestriction: 3,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    showTime: ["10:30 AM", "1:30 PM", "4:30 PM"],
    description:
      "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land.",
  },
  {
    id: 14,
    name: "Inception",
    genre: "Sci-Fi/Action",
    ageRestriction: 16,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    showTime: ["3:00 PM", "6:00 PM", "9:00 PM"],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 15,
    name: "Oppenheimer",
    genre: "Biography/Drama",
    ageRestriction: 18,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    showTime: ["2:30 PM", "5:30 PM", "8:30 PM"],
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: 16,
    name: "Kung Fu Panda 4",
    genre: "Animation/Comedy",
    ageRestriction: 3,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjNkODNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    showTime: ["11:30 AM", "2:30 PM", "5:30 PM"],
    description:
      "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace.",
  },
  {
    id: 17,
    name: "Barbie",
    genre: "Comedy/Fantasy",
    ageRestriction: 13,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    showTime: ["1:30 PM", "4:30 PM", "7:30 PM"],
    description: "Barbie suffers a crisis that leads her to question her world and her existence."
  },
  {
    id: 18,
    name: "The Super Mario Bros. Movie",
    genre: "Animation/Adventure",
    ageRestriction: 3,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_.jpg",
    showTime: ["10:00 AM", "12:30 PM", "3:00 PM"],
    description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess."
  },
  {
    id: 19,
    name: "The Batman",
    genre: "Action/Crime",
    ageRestriction: 16,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    showTime: ["2:00 PM", "5:30 PM", "9:00 PM"],
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
  },
  {
    id: 20,
    name: "Top Gun: Maverick",
    genre: "Action/Drama",
    ageRestriction: 13,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    showTime: ["1:30 PM", "4:30 PM", "8:30 PM"],
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission."
  },
  {
    id: 21,
    name: "Everything Everywhere All at Once",
    genre: "Action/Comedy",
    ageRestriction: 15,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
    showTime: ["12:00 PM", "3:30 PM", "7:00 PM"],
    description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led."
  }
];
