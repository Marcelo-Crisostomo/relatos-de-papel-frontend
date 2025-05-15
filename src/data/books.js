const booksData = [
  {
    "id": 1,
    "title": "Cien Años de Soledad",
    "author": "Gabriel García Márquez",
    "image": "https://m.media-amazon.com/images/I/81n2i30X+5L._AC_UY218_.jpg",
    "synopsis": "La historia de la familia Buendía en el pueblo ficticio de Macondo, explorando temas de soledad, amor y realismo mágico.",
    "price": 18.00
  },
  {
    "id": 2,
    "title": "El Principito",
    "author": "Antoine de Saint-Exupéry",
    "image": "https://m.media-amazon.com/images/I/71RXYyYp77L._AC_UY218_.jpg",
    "synopsis": "Un piloto se encuentra con un pequeño príncipe que ha viajado desde otro planeta, compartiendo lecciones sobre la vida y la naturaleza humana.",
    "price": 9.89
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "image": "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UY218_.jpg",
    "synopsis": "Una distopía donde el gobierno totalitario controla todos los aspectos de la vida, y un hombre lucha por su libertad y verdad.",
    "price": 10.00
  },
  {
    "id": 4,
    "title": "Matar a un ruiseñor",
    "author": "Harper Lee",
    "image": "https://m.media-amazon.com/images/I/81+j6JIEweL._AC_UY218_.jpg",
    "synopsis": "Una niña observa cómo su padre, un abogado, defiende a un hombre negro acusado injustamente en el sur de Estados Unidos.",
    "price": 12.79
  },
  {
    "id": 5,
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "image": "https://m.media-amazon.com/images/I/61-D06GIMQL._AC_UY218_.jpg",
    "synopsis": "Las aventuras de un hidalgo que, influenciado por libros de caballería, decide convertirse en caballero andante junto a su escudero Sancho Panza.",
    "price": 10.00
  },
  {
    "id": 6,
    "title": "Crimen y Castigo",
    "author": "Fiódor Dostoyevski",
    "image": "https://m.media-amazon.com/images/I/716mmCzlOAL._AC_UY218_.jpg",
    "synopsis": "Un joven estudiante comete un asesinato y lucha con la culpa y las consecuencias morales de sus acciones.",
    "price": 11.00
  },
  {
    "id": 7,
    "title": "La Metamorfosis",
    "author": "Franz Kafka",
    "image": "https://m.media-amazon.com/images/I/612NA7i9u8L._AC_UY218_.jpg",
    "synopsis": "Gregor Samsa se despierta un día transformado en un insecto gigante, enfrentando el rechazo de su familia y la sociedad.",
    "price": 5.90
  },
  {
    "id": 8,
    "title": "Los Miserables",
    "author": "Victor Hugo",
    "image": "https://m.media-amazon.com/images/I/81e1NPAQJmL._AC_UY218_.jpg",
    "synopsis": "La redención de Jean Valjean, un exconvicto, en la Francia del siglo XIX, y su lucha por la justicia y el amor.",
    "price": 15.99
  },
  {
    "id": 9,
    "title": "Orgullo y Prejuicio",
    "author": "Jane Austen",
    "image": "https://m.media-amazon.com/images/I/71OhfiZe7pL._AC_UY218_.jpg",
    "synopsis": "La historia de Elizabeth Bennet y su evolución personal mientras navega por las normas sociales y el amor en la Inglaterra del siglo XIX.",
    "price": 12.97
  },
  {
    "id": 10,
    "title": "El Retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "image": "https://m.media-amazon.com/images/I/71g1b3u6rVL._AC_UY218_.jpg",
    "synopsis": "Dorian Gray desea permanecer joven para siempre, mientras su retrato envejece y refleja las consecuencias de sus actos.",
    "price": 8.00
  },
  {
    "id": 11,
    "title": "El Hobbit",
    "author": "J.R.R. Tolkien",
    "image": "https://m.media-amazon.com/images/I/71UZKQ3-wCL._AC_UY218_.jpg",
    "synopsis": "Bilbo Bolsón emprende una aventura inesperada con un grupo de enanos para recuperar un tesoro custodiado por un dragón.",
    "price": 17.95
  },
  {
    "id": 12,
    "title": "El Señor de los Anillos",
    "author": "J.R.R. Tolkien",
    "image": "https://m.media-amazon.com/images/I/81OYpDCDCUL._AC_UY218_.jpg",
    "synopsis": "La épica travesía de Frodo Bolsón para destruir un anillo poderoso y salvar la Tierra Media del mal.",
    "price": 7.99
  },
  {
    "id": 13,
    "title": "Drácula",
    "author": "Bram Stoker",
    "image": "https://m.media-amazon.com/images/I/81Oj1lgREZL._AC_UY218_.jpg",
    "synopsis": "La lucha de un grupo de personas contra el conde Drácula, un vampiro que busca expandir su influencia en Inglaterra.",
    "price": 10.00
  },
  {
    "id": 14,
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "image": "https://m.media-amazon.com/images/I/91HvX42+65L._AC_UY218_.jpg",
    "synopsis": "Victor Frankenstein crea una criatura a partir de cadáveres, enfrentando las consecuencias de desafiar la naturaleza.",
    "price": 9.00
  },
  {
    "id": 15,
    "title": "El Gran Gatsby",
    "author": "F. Scott Fitzgerald",
    "image": "https://m.media-amazon.com/images/I/61hAvhdPV2S._AC_UY218_.jpg",
    "synopsis": "La vida de Jay Gatsby y su obsesión por recuperar un amor perdido en la era del jazz estadounidense.",
    "price": 14.90
  },
  {
    "id": 16,
    "title": "La Divina Comedia",
    "author": "Dante Alighieri",
    "image": "https://m.media-amazon.com/images/I/81v+bKnqplL._AC_UY218_.jpg",
    "synopsis": "El viaje de Dante a través del Infierno, el Purgatorio y el Paraíso, guiado por Virgilio y Beatriz.",
    "price": 12.00
  },
  {
    "id": 17,
    "title": "La Odisea",
    "author": "Homero",
    "image": "https://m.media-amazon.com/images/I/61YUYPYlkzL._AC_UY218_.jpg",
    "synopsis": "La larga travesía de Odiseo para regresar a Ítaca después de la guerra de Troya, enfrentando numerosos desafíos.",
    "price": 16.00
  },
  {
    "id": 18,
    "title": "El Perfume",
    "author": "Patrick Süskind",
    "image": "https://m.media-amazon.com/images/I/91-r8dhj9TL._AC_UY218_.jpg",
    "synopsis": "Jean-Baptiste Grenouille, dotado de un sentido del olfato extraordinario, busca crear el perfume perfecto, cometiendo crímenes en el proceso.",
    "price": 42.91
  },
  {
    "id": 19,
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "image": "https://m.media-amazon.com/images/I/81Joc7A9HaL._AC_UY218_.jpg",
    "synopsis": "Una novela experimental que narra la vida de Horacio Oliveira y su búsqueda de sentido en París y Buenos Aires.",
    "price": 24.00
  },
  {
    "id": 20,
    "title": "La Casa de los Espíritus",
    "author": "Isabel Allende",
    "image": "https://m.media-amazon.com/images/I/81t-jwLF8RL._AC_UY218_.jpg",
    "synopsis": "La saga de la familia Trueba, marcada por eventos sobrenaturales y los cambios políticos en Chile.",
    "price": 17.00
  },
  {
    "id": 21,
    "title": "Cumbres Borrascosas",
    "author": "Emily Brontë",
    "image": "https://m.media-amazon.com/images/I/71qdlA1lNqL._AC_UY218_.jpg",
    "synopsis": "La intensa y destructiva relación entre Heathcliff y Catherine en los páramos de Yorkshire.",
    "price": 10.00
  },
  {
    "id": 22,
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "image": "https://m.media-amazon.com/images/I/61sKsbPb5GL._AC_UY218_.jpg",
    "synopsis": "En una sociedad donde los libros están prohibidos, un bombero comienza a cuestionar su papel en la censura.",
    "price": 12.00
  },
  {
    "id": 23,
    "title": "Un Mundo Feliz",
    "author": "Aldous Huxley",
    "image": "https://m.media-amazon.com/images/I/81glRrzOepL._AC_UY218_.jpg",
    "synopsis": "Una visión distópica de un futuro donde la felicidad es obligatoria y la individualidad suprimida.",
    "price": 14.95
  },
  {
    "id": 24,
    "title": "El Código Da Vinci",
    "author": "Dan Brown",
    "image": "https://m.media-amazon.com/images/I/815WORuYMML._AC_UY218_.jpg",
    "synopsis": "El profesor Robert Langdon investiga un asesinato en el Louvre, descubriendo secretos ocultos en obras de arte.",
    "price": 9.99
  }
];

export default booksData;

