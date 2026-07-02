const cards = [
  { name: "Albert Einstein", forbidden: ["fizyka", "wzor", "relatywnosc", "Niemcy", "naukowiec", "geniusz"] },
  { name: "Taylor Swift", forbidden: ["piosenka", "koncert", "gitara", "album", "Swifties", "ex"] },
  { name: "Cristiano Ronaldo", forbidden: ["Portugalia", "Real", "Siu", "pilkarz", "bramka", "Messi"] },
  { name: "Lionel Messi", forbidden: ["Argentyna", "Barcelona", "pilka", "Ronaldo", "World Cup", "Inter Miami"] },
  { name: "Beyonce", forbidden: ["spiew", "taniec", "Jay-Z", "Queen", "Single Ladies", "koncert"] },
  { name: "Elon Musk", forbidden: ["Tesla", "rakieta", "SpaceX", "X", "Mars", "miliarder"] },
  { name: "Oprah Winfrey", forbidden: ["talk-show", "telewizja", "wywiad", "prezenty", "USA", "prowadząca"] },
  { name: "Michael Jackson", forbidden: ["Thriller", "moonwalk", "pop", "rękawiczka", "Neverland", "Billie Jean"] },
  { name: "Madonna", forbidden: ["pop", "Like a Virgin", "Material Girl", "koncert", "królowa", "muzyka"] },
  { name: "Adele", forbidden: ["Hello", "ballada", "głos", "Anglia", "płyta", "Someone Like You"] },
  { name: "Lady Gaga", forbidden: ["Poker Face", "kostium", "pop", "Shallow", "mięso", "Oscary"] },
  { name: "Harry Styles", forbidden: ["One Direction", "Watermelon", "garnitur", "koncert", "As It Was", "włosy"] },
  { name: "Billie Eilish", forbidden: ["Bad Guy", "zielone włosy", "szept", "Grammy", "piosenka", "Finneas"] },
  { name: "Rihanna", forbidden: ["Umbrella", "Fenty", "Barbados", "pop", "kosmetyki", "Super Bowl"] },
  { name: "Shakira", forbidden: ["biodra", "Kolumbia", "Waka Waka", "Pique", "taniec", "piosenka"] },
  { name: "Dwayne Johnson", forbidden: ["The Rock", "wrestling", "aktor", "mięśnie", "Jumanji", "łysy"] },
  { name: "Tom Cruise", forbidden: ["Mission Impossible", "Top Gun", "aktor", "kaskader", "samolot", "Hollywood"] },
  { name: "Leonardo DiCaprio", forbidden: ["Titanic", "Oscar", "aktor", "Wilk z Wall Street", "ekologia", "Hollywood"] },
  { name: "Brad Pitt", forbidden: ["aktor", "Angelina", "Fight Club", "Hollywood", "Once Upon a Time", "przystojny"] },
  { name: "Angelina Jolie", forbidden: ["Tomb Raider", "Brad Pitt", "aktorka", "usta", "ONZ", "Maleficent"] },
  { name: "Meryl Streep", forbidden: ["aktorka", "Oscar", "Diabeł ubiera się u Prady", "Mamma Mia", "Hollywood", "role"] },
  { name: "Will Smith", forbidden: ["aktor", "Men in Black", "Oscar", "policzek", "rap", "Fresh Prince"] },
  { name: "Jackie Chan", forbidden: ["kung-fu", "Chiny", "kaskader", "aktor", "walka", "Rush Hour"] },
  { name: "Keanu Reeves", forbidden: ["Matrix", "John Wick", "Neo", "aktor", "motocykl", "internet"] },
  { name: "Johnny Depp", forbidden: ["pirat", "Jack Sparrow", "aktor", "Edward Nożycoręki", "kapelusz", "Hollywood"] },
  { name: "Marilyn Monroe", forbidden: ["blondynka", "sukienka", "ikona", "Hollywood", "uśmiech", "Kennedy"] },
  { name: "Charlie Chaplin", forbidden: ["wąsik", "laska", "kino nieme", "kapelusz", "komik", "włóczęga"] },
  { name: "Walt Disney", forbidden: ["Myszka Miki", "bajki", "Disneyland", "animacja", "studio", "zamek"] },
  { name: "Steven Spielberg", forbidden: ["reżyser", "Jurassic Park", "E.T.", "Indiana Jones", "film", "Hollywood"] },
  { name: "Quentin Tarantino", forbidden: ["Pulp Fiction", "reżyser", "krew", "dialogi", "Kill Bill", "stopy"] },
  { name: "J.K. Rowling", forbidden: ["Harry Potter", "czarodziej", "książka", "Hogwart", "autorka", "różdżka"] },
  { name: "Stephen King", forbidden: ["horror", "książki", "To", "pisarz", "klaun", "Carrie"] },
  { name: "William Shakespeare", forbidden: ["Hamlet", "Romeo", "teatr", "dramat", "Anglia", "poeta"] },
  { name: "Agatha Christie", forbidden: ["kryminał", "Poirot", "morderstwo", "pisarka", "detektyw", "Marple"] },
  { name: "Pablo Picasso", forbidden: ["malarz", "kubizm", "Hiszpania", "Guernica", "obraz", "sztuka"] },
  { name: "Vincent van Gogh", forbidden: ["słoneczniki", "ucho", "malarz", "gwiazdy", "Holandia", "obraz"] },
  { name: "Frida Kahlo", forbidden: ["malarstwo", "brwi", "Meksyk", "autoportret", "Diego", "kwiaty"] },
  { name: "Leonardo da Vinci", forbidden: ["Mona Lisa", "wynalazca", "renesans", "Włochy", "malarz", "Ostatnia Wieczerza"] },
  { name: "Maria Skłodowska-Curie", forbidden: ["rad", "Nobel", "chemia", "Polska", "Francja", "promieniotwórczość"] },
  { name: "Nikola Tesla", forbidden: ["prąd", "wynalazca", "cewka", "Edison", "elektryczność", "Serbia"] },
  { name: "Isaac Newton", forbidden: ["jabłko", "grawitacja", "fizyka", "nauka", "ruch", "Anglia"] },
  { name: "Charles Darwin", forbidden: ["ewolucja", "małpa", "gatunki", "teoria", "Galapagos", "biologia"] },
  { name: "Steve Jobs", forbidden: ["Apple", "iPhone", "prezentacja", "czarny golf", "Mac", "założyciel"] },
  { name: "Bill Gates", forbidden: ["Microsoft", "Windows", "komputer", "miliarder", "fundacja", "programista"] },
  { name: "Mark Zuckerberg", forbidden: ["Facebook", "Meta", "social media", "Harvard", "miliarder", "hoodie"] },
  { name: "Jeff Bezos", forbidden: ["Amazon", "miliarder", "kosmos", "Blue Origin", "sklep", "łysy"] },
  { name: "Barack Obama", forbidden: ["prezydent", "USA", "Michelle", "Biały Dom", "Yes We Can", "Demokrata"] },
  { name: "Donald Trump", forbidden: ["prezydent", "USA", "wieżowiec", "Make America", "Republikanin", "włosy"] },
  { name: "Nelson Mandela", forbidden: ["RPA", "więzienie", "apartheid", "prezydent", "pokój", "Nobel"] },
  { name: "Mahatma Gandhi", forbidden: ["Indie", "pokój", "bez przemocy", "sól", "niepodległość", "okulary"] },
  { name: "Robert Lewandowski", forbidden: ["piłka", "Barcelona", "gol", "napastnik", "Bayern", "Polska"] },
  { name: "Iga Świątek", forbidden: ["tenis", "rakieta", "Roland Garros", "liderka", "kort", "Polska"] },
  { name: "Adam Małysz", forbidden: ["skoki", "narty", "Wisła", "bułka", "wąsy", "orzeł"] },
  { name: "Kamil Stoch", forbidden: ["skoki", "narty", "Zakopane", "olimpiada", "złoto", "Polska"] },
  { name: "Mariusz Pudzianowski", forbidden: ["strongman", "siła", "Pudzian", "MMA", "ciężary", "Polska"] },
  { name: "Andrzej Gołota", forbidden: ["boks", "ring", "walka", "cios", "Polska", "dyskwalifikacja"] },
  { name: "Agnieszka Radwańska", forbidden: ["tenis", "rakieta", "kort", "Isia", "Kraków", "Wimbledon"] },
  { name: "Justyna Kowalczyk", forbidden: ["narty", "biegi", "zima", "medal", "Tour de Ski", "Polska"] },
  { name: "Krzysztof Krawczyk", forbidden: ["Parostatek", "piosenka", "wąsy", "głos", "Trubadurzy", "Polska"] },
  { name: "Maryla Rodowicz", forbidden: ["Małgośka", "piosenka", "kolorowo", "festiwal", "Opole", "scena"] },
  { name: "Doda", forbidden: ["Virgin", "piosenkarka", "skandal", "róż", "królowa", "show"] },
  { name: "Sanah", forbidden: ["Szampan", "poezja", "piosenka", "skrzypce", "uczta", "koncert"] },
  { name: "Dawid Podsiadło", forbidden: ["piosenka", "X Factor", "stadion", "Małomiasteczkowy", "Dąbrowa", "koncert"] },
  { name: "Mata", forbidden: ["rap", "Patointeligencja", "Michał", "SBM", "młody", "Warszawa"] },
  { name: "Quebonafide", forbidden: ["rap", "tatuaże", "Egzotyka", "Kuba", "Taco", "Ciechanów"] },
  { name: "Taco Hemingway", forbidden: ["rap", "Warszawa", "Marmur", "Dawid", "Fifi", "piosenki"] },
  { name: "Michał Wiśniewski", forbidden: ["Ich Troje", "czerwone włosy", "A wszystko to", "piosenkarz", "show", "żony"] },
  { name: "Czesław Niemen", forbidden: ["Dziwny jest ten świat", "wokal", "muzyka", "Polska", "legenda", "Sen o Warszawie"] },
  { name: "Fryderyk Chopin", forbidden: ["fortepian", "kompozytor", "Żelazowa Wola", "Polonez", "muzyka", "Paryż"] },
  { name: "Olga Tokarczuk", forbidden: ["Nobel", "pisarka", "książka", "Bieguni", "literatura", "Wrocław"] },
  { name: "Wisława Szymborska", forbidden: ["Nobel", "poezja", "Kraków", "wiersz", "kot", "literatura"] },
  { name: "Henryk Sienkiewicz", forbidden: ["Quo Vadis", "Nobel", "Trylogia", "pisarz", "Staś", "Nel"] },
  { name: "Andrzej Sapkowski", forbidden: ["Wiedźmin", "Geralt", "fantasy", "książki", "Netflix", "potwory"] },
  { name: "Jan Paweł II", forbidden: ["papież", "Wadowice", "Karol", "Watykan", "Polska", "kremówki"] },
  { name: "Lech Wałęsa", forbidden: ["Solidarność", "wąsy", "prezydent", "stocznia", "Nobel", "Gdańsk"] },
  { name: "Mikołaj Kopernik", forbidden: ["astronom", "Słońce", "Ziemia", "Toruń", "heliocentryzm", "planety"] },
  { name: "Józef Piłsudski", forbidden: ["marszałek", "wąsy", "niepodległość", "legiony", "kasztanka", "Polska"] },
  { name: "Jerzy Owsiak", forbidden: ["WOŚP", "serduszko", "finał", "orkiestra", "siema", "fundacja"] },
  { name: "Kuba Wojewódzki", forbidden: ["talk-show", "TVN", "kanapa", "wywiad", "showman", "samochody"] },
  { name: "Robert Makłowicz", forbidden: ["kuchnia", "podróże", "gotowanie", "Kraków", "telewizja", "smak"] },
  { name: "Magda Gessler", forbidden: ["Kuchenne rewolucje", "restauracja", "włosy", "gotowanie", "TVN", "rzucanie"] },
  { name: "Tomasz Karolak", forbidden: ["aktor", "Rodzinka.pl", "Ludwik", "teatr", "komedia", "Warszawa"] },
  { name: "Cezary Pazura", forbidden: ["aktor", "Kiler", "komedia", "głos", "YouTube", "Psy"] },
  { name: "Bogusław Linda", forbidden: ["aktor", "Psy", "Franz", "kino", "twardziel", "Polska"] },
  { name: "Krystyna Janda", forbidden: ["aktorka", "teatr", "kino", "Człowiek z marmuru", "Warszawa", "rola"] },
];

const cartoonCards = [
  { name: "Myszka Miki", forbidden: ["Disney", "mysz", "uszy", "Minnie", "kreskówka", "rękawiczki"] },
  { name: "Kaczor Donald", forbidden: ["Disney", "kaczka", "złość", "marynarz", "siostrzeńcy", "kwakanie"] },
  { name: "Król Lew", forbidden: ["Simba", "lew", "sawanna", "Hakuna Matata", "Mufasa", "bajka"] },
  { name: "Shrek", forbidden: ["ogr", "Fiona", "Osioł", "bagno", "zielony", "DreamWorks"] },
  { name: "Elsa", forbidden: ["Kraina lodu", "lód", "Anna", "śnieg", "Let It Go", "królowa"] },
  { name: "Olaf", forbidden: ["bałwan", "Kraina lodu", "marchewka", "śnieg", "Elsa", "lato"] },
  { name: "Scooby-Doo", forbidden: ["pies", "duch", "zagadka", "Shaggy", "kanapka", "strach"] },
  { name: "SpongeBob", forbidden: ["gąbka", "ananas", "Patrick", "Krusty Krab", "morze", "Bikini Dolne"] },
  { name: "Minionek", forbidden: ["żółty", "banan", "Gru", "okulary", "mały", "język"] },
  { name: "Kubuś Puchatek", forbidden: ["miś", "miód", "Prosiaczek", "Stumilowy Las", "balonik", "Tygrysek"] },
  { name: "Ariel", forbidden: ["syrenka", "morze", "Disney", "rude włosy", "Sebastian", "książę"] },
  { name: "Alladyn", forbidden: ["lampa", "dżin", "dywan", "Jasmine", "życzenia", "pałac"] },
  { name: "Pikachu", forbidden: ["Pokemon", "żółty", "prąd", "Ash", "piorun", "pokeball"] },
  { name: "Tom i Jerry", forbidden: ["kot", "mysz", "pościg", "kreskówka", "pułapka", "hałas"] },
  { name: "Psi Patrol", forbidden: ["szczeniaki", "Ryder", "pojazdy", "ratunek", "Marshall", "Chase"] },
];

const movieCards = [
  { name: "Harry Potter", forbidden: ["czarodziej", "Hogwart", "różdżka", "blizna", "Voldemort", "okulary"] },
  { name: "Hermiona Granger", forbidden: ["Harry Potter", "książki", "czary", "Hogwart", "Ron", "mądra"] },
  { name: "Spider-Man", forbidden: ["pająk", "sieć", "Peter Parker", "Marvel", "maska", "drapacz"] },
  { name: "Batman", forbidden: ["nietoperz", "Gotham", "Bruce Wayne", "Joker", "peleryna", "jaskinia"] },
  { name: "Wonder Woman", forbidden: ["Amazonka", "lasso", "superbohaterka", "tarcza", "Diana", "DC"] },
  { name: "Iron Man", forbidden: ["zbroja", "Tony Stark", "Marvel", "latanie", "reaktor", "miliarder"] },
  { name: "Kapitan Jack Sparrow", forbidden: ["pirat", "statek", "Karaiby", "rum", "kompas", "Johnny Depp"] },
  { name: "Indiana Jones", forbidden: ["kapelusz", "bicz", "archeolog", "przygoda", "skarby", "wąż"] },
  { name: "Darth Vader", forbidden: ["Gwiezdne wojny", "maska", "ciemna strona", "Luke", "miecz", "oddech"] },
  { name: "Yoda", forbidden: ["Jedi", "zielony", "mistrz", "moc", "mały", "Gwiezdne wojny"] },
  { name: "E.T.", forbidden: ["kosmita", "telefon", "rower", "palec", "dom", "Spielberg"] },
  { name: "Forrest Gump", forbidden: ["bieganie", "czekoladki", "Tom Hanks", "ławka", "Jenny", "film"] },
  { name: "Kevin McCallister", forbidden: ["sam w domu", "pułapki", "święta", "złodzieje", "chłopiec", "rodzina"] },
  { name: "Rocky Balboa", forbidden: ["boks", "ring", "Filadelfia", "trening", "rękawice", "Adrian"] },
  { name: "Neo", forbidden: ["Matrix", "czerwone pigułki", "okulary", "kod", "Morpheus", "Keanu"] },
];

const objectCards = [
  { name: "Telefon", forbidden: ["dzwonić", "ekran", "smartfon", "aplikacja", "ładowarka", "numer"] },
  { name: "Rower", forbidden: ["koła", "pedały", "kierownica", "łańcuch", "jazda", "siodełko"] },
  { name: "Plecak", forbidden: ["szkoła", "torba", "ramiona", "książki", "zamek", "nosić"] },
  { name: "Pilot", forbidden: ["telewizor", "przyciski", "kanał", "bateria", "zmieniać", "kanapa"] },
  { name: "Okulary", forbidden: ["wzrok", "szkła", "oprawki", "nos", "widzieć", "słońce"] },
  { name: "Zegar", forbidden: ["czas", "godzina", "wskazówki", "tik-tak", "budzik", "ściana"] },
  { name: "Klucz", forbidden: ["zamek", "drzwi", "otwierać", "metal", "pęk", "zgubić"] },
  { name: "Parasolka", forbidden: ["deszcz", "mokro", "otworzyć", "rączka", "chmury", "ochrona"] },
  { name: "Książka", forbidden: ["czytać", "strony", "okładka", "autor", "biblioteka", "rozdział"] },
  { name: "Lodówka", forbidden: ["jedzenie", "zimno", "kuchnia", "drzwi", "mleko", "zamrażarka"] },
  { name: "Gitara", forbidden: ["struny", "muzyka", "grać", "akord", "koncert", "instrument"] },
  { name: "Piłka", forbidden: ["sport", "kopać", "rzucać", "okrągła", "bramka", "mecz"] },
  { name: "Latarka", forbidden: ["światło", "ciemność", "bateria", "świecić", "ręka", "noc"] },
  { name: "Kamera", forbidden: ["film", "nagrywać", "obiektyw", "zdjęcie", "wideo", "statyw"] },
  { name: "Klocki", forbidden: ["budować", "Lego", "kolory", "zabawka", "wieża", "dzieci"] },
];

const knownPeopleNames = `
Ariana Grande|Ed Sheeran|Bruno Mars|Justin Bieber|Katy Perry|Dua Lipa|Miley Cyrus|Selena Gomez|Drake|Eminem|Snoop Dogg|Tupac Shakur|Freddie Mercury|Elvis Presley|Bob Marley|John Lennon|Paul McCartney|Mick Jagger|David Bowie|Whitney Houston|Celine Dion|Tina Turner|Cher|Sting|Phil Collins|George Michael|Prince|Lenny Kravitz|Kanye West|Jay-Z|Kendrick Lamar|Travis Scott|Bad Bunny|Rosalia|Alicia Keys|Stevie Wonder|Aretha Franklin|Ray Charles|Frank Sinatra|Bruce Springsteen|Bono|Ozzy Osbourne|Slash|Dave Grohl|Kurt Cobain|Axl Rose|Chester Bennington|Anthony Hopkins|Morgan Freeman|Robert De Niro|Al Pacino|Joaquin Phoenix|Heath Ledger|Christian Bale|Harrison Ford|Samuel L. Jackson|Denzel Washington|Matt Damon|Ben Affleck|George Clooney|Ryan Reynolds|Ryan Gosling|Hugh Jackman|Chris Hemsworth|Chris Evans|Robert Downey Jr.|Scarlett Johansson|Jennifer Lawrence|Emma Stone|Natalie Portman|Julia Roberts|Sandra Bullock|Nicole Kidman|Cate Blanchett|Kate Winslet|Gal Gadot|Zendaya|Millie Bobby Brown|Timothee Chalamet|Daniel Radcliffe|Emma Watson|Rupert Grint|Benedict Cumberbatch|Henry Cavill|Jason Momoa|Margot Robbie|Anne Hathaway|Gwyneth Paltrow|Saoirse Ronan|Greta Thunberg|Malala Yousafzai|Usain Bolt|Michael Jordan|LeBron James|Kobe Bryant|Serena Williams|Roger Federer|Rafael Nadal|Novak Djokovic|Mike Tyson|Muhammad Ali|Tiger Woods|Lewis Hamilton|Max Verstappen|Michael Schumacher|Valentino Rossi|Zinedine Zidane|Kylian Mbappe|Neymar|Erling Haaland|Zlatan Ibrahimovic|Wayne Rooney|David Beckham|Pele|Diego Maradona|Andres Iniesta|Xavi|Ronaldinho|Karim Benzema|Luka Modric|Andrzej Duda|Donald Tusk|Mateusz Morawiecki|Aleksander Kwaśniewski|Bronisław Komorowski|Sławomir Mentzen|Mariusz Błaszczak|Rafał Trzaskowski|Szymon Hołownia|Krystyna Pawłowicz|Martyna Wojciechowska|Beata Pawlikowska|Dorota Szelągowska|Michał Szpak|Ralph Kaminski|Krzysztof Zalewski|Kasia Nosowska|Mrozu|Vito Bambino|Brodka|Margaret|Julia Wieniawa|Maciej Stuhr|Borys Szyc|Piotr Adamczyk|Marcin Dorociński|Dawid Ogrodnik|Joanna Kulig|Agnieszka Holland|Patryk Vega|Sławomir|Zenek Martyniuk|Muniek Staszczyk|Kazik Staszewski|Zbigniew Wodecki|Anna Jantar|Ewa Farna|Natalia Kukulska|Kayah|Katarzyna Cichopek|Małgorzata Kożuchowska|Anna Lewandowska|Ewa Chodakowska|Marcin Gortat|Bartosz Kurek|Wilfredo Leon|Jakub Błaszczykowski|Zbigniew Boniek|Wojciech Szczęsny|Piotr Zieliński|Arkadiusz Milik|Natalia Partyka|Otylia Jędrzejczak|Anita Włodarczyk|Robert Kubica|Kajetan Kajetanowicz|Karol Okrasa|Michel Moran|Piotr Kraśko|Tomasz Lis|Monika Olejnik|Kamil Durczok|Filip Chajzer|Marcin Prokop|Dorota Wellman|Krzysztof Ibisz|Tomasz Kammel|Hubert Urbański|Agnieszka Chylińska|Roksana Węgiel|Viki Gabor|Blanka|Sarsa|Enej|Golec uOrkiestra|Bracia Kacperczyk
`;

const cartoonNames = `
Bugs Bunny|Królik Bugs|Daffy Duck|Królik Roger|Tweety|Sylwester|Struś Pędziwiatr|Kojot|Flintstonowie|Fred Flintstone|Wilma Flintstone|Barney Rubble|Scooby|Shaggy|Velma|Daphne|Fred Jones|Atomówki|Bójka|Bajka|Brawurka|Dexter|Dee Dee|Johnny Bravo|Krowa i Kurczak|Ed Edd i Eddy|Ben 10|Steven Universe|Gumball|Darwin|Pora na Przygodę|Finn|Jake|Księżniczka Balonowa|Król Lodowy|Marcelina|Rick Sanchez|Morty Smith|Simpsonowie|Homer Simpson|Marge Simpson|Bart Simpson|Lisa Simpson|Maggie Simpson|Futurama|Bender|Fry|Leela|Family Guy|Peter Griffin|Stewie Griffin|Brian Griffin|South Park|Cartman|Kenny|Stan|Kyle|Aang|Katara|Sokka|Zuko|Korra|Mulan|Vaiana|Merida|Roszpunka|Kopciuszek|Śpiąca Królewna|Bella|Bestia|Jasmine|Dżin|Dumbo|Bambi|Pinokio|Jiminy Cricket|101 Dalmatyńczyków|Cruella|Piotruś Pan|Dzwoneczek|Kapitan Hak|Wendy|Mowgli|Baloo|Bagheera|Król Julian|Alex Lew|Marty Zebra|Gloria Hipopotam|Melman|Pingwiny z Madagaskaru|Skipper|Kowalski|Rico|Szeregowy|Kung Fu Panda|Po|Tygrysica|Mistrz Shifu|Smoczy Wojownik|Jak wytresować smoka|Czkawka|Szczerbatek|Astrid|Toy Story|Chudy|Buzz Astral|Jessie|Pan Bulwa|Rex|Hamm|Bo Peep|Potwory i spółka|Sulley|Mike Wazowski|Boo|Iniemamocni|Pan Iniemamocny|Elastyna|Violet|Dash|Jack-Jack|Gdzie jest Nemo|Nemo|Dory|Marlin|Bruce Rekin|Auta|Zygzak McQueen|Złomek|Sally|Coco|Miguel|Ernesto de la Cruz|W głowie się nie mieści|Radość|Smutek|Gniew|Strach|Odraza|Wall-E|EVE|Ratatuj|Remy|Krudowie|Epoka lodowcowa|Sid|Maniek|Diego|Scrat|Hotel Transylwania|Drakula|Mavis|Johnny|Smerfy|Papa Smerf|Smerfetka|Gargamel|Klub Winx|Bloom|Stella|Flora|Asterix|Obelix|Idefix|Kajko|Kokosz|Krecik|Reksio|Bolek|Lolek|Miś Uszatek|Muminki|Muminek|Włóczykij|Mała Mi|Ryjek|Pszczółka Maja|Gucio|Koziołek Matołek|Bob Budowniczy|Listonosz Pat|Strażak Sam|Peppa Pig|George Pig|Świnka Peppa|Tomek i Przyjaciele|Lokomotywa Tomek|Baranek Shaun|Wallace|Gromit|Angry Birds|Czerwony Ptak|Kraina Lodu|Anna|Elsa|Olaf|Sven|Kristoff|Miraculous|Biedronka|Czarny Kot|Ladybug|Tikki|Plagg|Transformers|Optimus Prime|Bumblebee|Megatron|Teen Titans|Robin|Starfire|Raven|Bestia|Cyborg|Lego Ninjago|Kai|Jay|Cole|Zane|Lloyd|Nya|Pokemon|Ash Ketchum|Pikachu|Charmander|Bulbasaur|Squirtle|Jigglypuff|Meowth|Naruto|Sasuke|Sakura|Kakashi|Luffy|Goku|Vegeta|Sailor Moon|Totoro|Kiki|Chihiro|Haku|Ponyo|Czarodziejka z Księżyca
`;

const classicCartoonNames = `
Myszka Miki|Minnie Mouse|Kaczor Donald|Kaczka Daisy|Goofy|Pluto|Sknerus McKwacz|Hyzio|Dyzio|Zyzio|Bugs Bunny|Królik Bugs|Daffy Duck|Tweety|Sylwester|Struś Pędziwiatr|Kojot|Taz|Speedy Gonzales|Elmer Fudd|Yogi Bear|Boo Boo|Tom|Jerry|Scooby-Doo|Shaggy|Velma|Daphne|Fred Jones|Flintstonowie|Fred Flintstone|Wilma Flintstone|Barney Rubble|Betty Rubble|Pebbles|Bamm-Bamm|Jetsonowie|George Jetson|Astro|Homer Simpson|Marge Simpson|Bart Simpson|Lisa Simpson|Maggie Simpson|Smerfy|Papa Smerf|Smerfetka|Gargamel|Klubowy Smerf|Maruda|Ważniak|Osiłek|Asterix|Obelix|Idefix|Panoramix|Kajko|Kokosz|Krecik|Reksio|Bolek|Lolek|Miś Uszatek|Kolargol|Muminek|Włóczykij|Mała Mi|Panna Migotka|Ryjek|Paszczak|Pszczółka Maja|Gucio|Filip Konik Polny|Koziołek Matołek|Jacek i Agatka|Kot Filemon|Bonifacy|Żwirek|Muchomorek|Rumcajs|Hanka|Cypisek|Wilk i Zając|Zając z Wilka i Zająca|Wilk z Wilka i Zająca|Czerwony Kapturek|Kubuś Puchatek|Prosiaczek|Tygrysek|Kłapouchy|Królik z Kubusia|Sowa|Maleństwo|Kangurzyca|Pinokio|Jiminy Cricket|Dumbo|Bambi|Tuptuś|Piotruś Pan|Dzwoneczek|Kapitan Hak|Wendy|Mowgli|Baloo|Bagheera|Shere Khan|Kopciuszek|Śpiąca Królewna|Królewna Śnieżka|Siedmiu Krasnoludków|Grumpy|Doc|Bashful|Happy|Sleepy|Sneezy|Dopey|Ariel|Sebastian|Florek|Urszula|Alladyn|Dżin|Jasmine|Abu|Jafar|Bella|Bestia|Gaston|Lumiere|Pani Imbryk|Simba|Mufasa|Nala|Timon|Pumba|Skaza|Rafiki|Pocahontas|Mulan|Mushu|Herkules|Hades|Megara|Tarzan|Jane|Quasimodo|Esmeralda|Kuzco|Yzma|Roszpunka|Flynn Rider|Merida|Vaiana|Maui|Elsa|Anna|Olaf|Sven|Kristoff|Shrek|Fiona|Osioł|Kot w Butach|Lord Farquaad|Ciastek|Król Julian|Alex Lew|Marty Zebra|Gloria Hipopotam|Melman|Skipper|Kowalski|Rico|Szeregowy|Po z Kung Fu Pandy|Tygrysica|Mistrz Shifu|Szczerbatek|Czkawka|Astrid|Chudy|Buzz Astral|Jessie|Pan Bulwa|Rex|Hamm|Bo Peep|Sulley|Mike Wazowski|Boo|Pan Iniemamocny|Elastyna|Violet|Dash|Jack-Jack|Nemo|Dory|Marlin|Bruce Rekin|Zygzak McQueen|Złomek|Sally|Remy|Wall-E|EVE|Miguel z Coco|Radość|Smutek|Gniew|Strach|Odraza|Sid|Maniek|Diego|Scrat|Drakula z Hotelu Transylwania|Mavis|Minionek|Gru|Bob Minionek|Kevin Minionek|Stuart Minionek|SpongeBob|Patrick Rozgwiazda|Skalmar|Pan Krab|Sandy|Gary|Bob Budowniczy|Listonosz Pat|Strażak Sam|Świnka Peppa|George Pig|Tomek Lokomotywa|Baranek Shaun|Wallace|Gromit|Pikachu|Ash Ketchum|Charmander|Bulbasaur|Squirtle|Jigglypuff
`;

const movieNames = `
Luke Skywalker|Leia Organa|Han Solo|Chewbacca|Obi-Wan Kenobi|Anakin Skywalker|Padme Amidala|Rey|Kylo Ren|R2-D2|C-3PO|Frodo Baggins|Sam Gamgee|Gandalf|Aragorn|Legolas|Gimli|Boromir|Gollum|Bilbo Baggins|Thorin|Katniss Everdeen|Peeta Mellark|Gale Hawthorne|Effie Trinket|Hannibal Lecter|Clarice Starling|Tony Montana|Vito Corleone|Michael Corleone|Don Corleone|Travis Bickle|Maximus|Gladiator|Terminator|Sarah Connor|John Connor|Ellen Ripley|Predator|Robocop|Rambo|John McClane|Lara Croft|James Bond|M|Q|Austin Powers|Borat|Mr Bean|Amelia|Leon Zawodowiec|Matylda|Joker|Harley Quinn|Aquaman|Superman|Lois Lane|Lex Luthor|Flash|Black Panther|Doktor Strange|Hulk|Thor|Loki|Kapitan Ameryka|Czarna Wdowa|Hawkeye|Ant-Man|Wasp|Star-Lord|Gamora|Groot|Rocket|Drax|Deadpool|Wolverine|Profesor X|Magneto|Jean Grey|Mystique|Blade|Venom|Eddie Brock|Mary Jane|Gwen Stacy|Doktor Octopus|Zielony Goblin|T'Challa|Shuri|Maverick|Iceman|Goose|Marty McFly|Doc Brown|Biff Tannen|Jack Dawson|Rose DeWitt Bukater|Terminator T-800|Jack Torrance|Wendy Torrance|Danny Torrance|Freddy Krueger|Jason Voorhees|Michael Myers|Ghostface|Chucky|Annabelle|Pennywise|Regan MacNeil|Carrie White|Norman Bates|Forrest Gump|Bubba|Jenny Curran|Cast Away|Chuck Noland|Wilson|Edward Nożycoręki|Willy Wonka|Charlie Bucket|Kapelusznik|Beetlejuice|Sweeney Todd|Edward Cullen|Bella Swan|Jacob Black|Hiccup|Astrid Hofferson|Erin Brockovich|Miranda Priestly|Andy Sachs|Bridget Jones|Mark Darcy|Elle Woods|Regina George|Cady Heron|Cher Horowitz|Ferris Bueller|Napoleon Dynamite|Mia Wallace|Vincent Vega|Jules Winnfield|Butch Coolidge|Django|Dr King Schultz|Bękarty Wojny|Hans Landa|Kill Bill|Panna Młoda|O-Ren Ishii|Tyler Durden|Narrator|Patrick Bateman|Jordan Belfort|Donnie Azoff|Mark Watney|Jason Bourne|Lisbeth Salander|Mikael Blomkvist|Hobbs|Dominic Toretto|Brian O'Conner|Letty Ortiz|Deckard Shaw|Ethan Hunt|Ilsa Faust|Bumblebee Filmowy|Optimus Prime Filmowy|Godzilla|King Kong|Jurassic Park|Alan Grant|Ellie Sattler|Ian Malcolm|Owen Grady|Claire Dearing|Indiana Jones|Marion Ravenwood|Short Round|Mutt Williams|Rocky|Apollo Creed|Ivan Drago|Adonis Creed|Creed|Neo|Trinity|Morpheus|Agent Smith|John Wick|Winston|Léon|Amadeusz Mozart|Salieri|William Wallace|Robin Hood|Sherlock Holmes|Doktor Watson|Hercules Poirot|Enola Holmes|Wednesday Addams|Morticia Addams|Gomez Addams|Kevin McCallister|Marv|Harry Lime|Grinch|Elf Buddy|Święty Mikołaj|Scrooge|Hagrid|Dumbledore|Snape|Ron Weasley|Draco Malfoy|Voldemort|Sirius Black|Luna Lovegood|Newt Scamander|Jack Sparrow|Will Turner|Elizabeth Swann|Barbossa|Davy Jones|Tonto|Pinokio Filmowy|Mary Poppins|Matilda|Niania McPhee|Jumanji|Alan Parrish|Ruby Roundhouse|Severus Snape|Geralt z Rivii|Yennefer|Ciri
`;

const iconicMovieNames = `
Gandalf|Frodo Baggins|Sam Gamgee|Aragorn|Legolas|Gimli|Gollum|Bilbo Baggins|Sauron|Galadriela|Saruman|Luke Skywalker|Darth Vader|Leia Organa|Han Solo|Yoda|Obi-Wan Kenobi|Chewbacca|R2-D2|C-3PO|Anakin Skywalker|Kylo Ren|Rey|Grogu|Mandalorianin|Harry Potter|Hermiona Granger|Ron Weasley|Dumbledore|Severus Snape|Voldemort|Hagrid|Draco Malfoy|Sirius Black|Zgredek|Newt Scamander|Spider-Man|Batman|Joker|Superman|Wonder Woman|Iron Man|Kapitan Ameryka|Thor|Hulk|Czarna Wdowa|Doktor Strange|Black Panther|Deadpool|Wolverine|Venom|Thanos|Loki|Star-Lord|Groot|Rocket|Harley Quinn|Aquaman|Flash|Catwoman|Penguin|Riddler|Jack Sparrow|Will Turner|Elizabeth Swann|Barbossa|Davy Jones|Indiana Jones|Lara Croft|James Bond|Sherlock Holmes|Doktor Watson|Hercules Poirot|Enola Holmes|Neo|Trinity|Morpheus|Agent Smith|John Wick|Ethan Hunt|Jason Bourne|Dominic Toretto|Brian O'Conner|Hobbs|Deckard Shaw|Terminator|Sarah Connor|John Connor|Ellen Ripley|Predator|Alien|Robocop|Rambo|Rocky Balboa|Apollo Creed|Ivan Drago|Adonis Creed|Maverick|Forrest Gump|Jenny Curran|Chuck Noland|Wilson|Kevin McCallister|Harry z Kevina|Marv z Kevina|Grinch|Elf Buddy|Scrooge|Święty Mikołaj|Willy Wonka|Charlie Bucket|Edward Nożycoręki|Beetlejuice|Kapelusznik|Mary Poppins|Matylda|Niania McPhee|Jumanji|Alan Parrish|Ruby Roundhouse|Shrek|Fiona|Osioł|Kot w Butach|Lord Farquaad|Myszka Miki|Kaczor Donald|Simba|Mufasa|Timon|Pumba|Elsa|Anna|Olaf|Ariel|Alladyn|Dżin|Mulan|Vaiana|Merida|Roszpunka|Piotruś Pan|Dzwoneczek|Kapitan Hak|Kubuś Puchatek|Buzz Astral|Chudy|Jessie|Pan Bulwa|Sulley|Mike Wazowski|Boo|Zygzak McQueen|Złomek|Remy|Wall-E|EVE|Nemo|Dory|Marlin|Miguel z Coco|Gru|Minionek|Po z Kung Fu Pandy|Szczerbatek|Czkawka|Alex Lew|Król Julian|Pingwiny z Madagaskaru|Sid|Maniek|Diego|Scrat|Drakula z Hotelu Transylwania|Mavis|Godzilla|King Kong|Jurassic Park|Alan Grant|Ian Malcolm|Owen Grady|Katniss Everdeen|Peeta Mellark|Hannibal Lecter|Clarice Starling|Tony Montana|Vito Corleone|Michael Corleone|Maximus|William Wallace|Robin Hood|Django|Hans Landa|Panna Młoda|Mia Wallace|Vincent Vega|Jules Winnfield|Tyler Durden|Patrick Bateman|Jordan Belfort|Mark Watney|Lisbeth Salander|Wednesday Addams|Morticia Addams|Gomez Addams|Edward Cullen|Bella Swan|Jacob Black|Geralt z Rivii|Yennefer|Ciri|Hannibal|Pennywise|Freddy Krueger|Jason Voorhees|Michael Myers|Ghostface|Chucky|Annabelle|Jack Torrance|Norman Bates|Carrie White|Leon Zawodowiec|Matylda z Leona|Amelia|Mr Bean|Borat|Austin Powers|Bridget Jones|Elle Woods|Regina George|Marty McFly|Doc Brown|Jack Dawson|Rose z Titanica|Pinokio|Mowgli|Baloo|Cruella|Hercules|Megara|Hades|Tarzan|Jane|Bestia|Bella z Bestii
`;

const objectNames = `
Kubek|Butelka|Szklanka|Talerz|Widelec|Nóż|Łyżka|Garnek|Patelnia|Czajnik|Ekspres do kawy|Mikrofalówka|Piekarnik|Toster|Blender|Mikser|Deska do krojenia|Miska|Sitko|Tarka|Nożyczki|Taśma klejąca|Klej|Długopis|Ołówek|Gumka|Temperówka|Linijka|Zeszyt|Notes|Kalendarz|Koperta|Znaczek|Drukarka|Laptop|Klawiatura|Mysz komputerowa|Monitor|Głośnik|Słuchawki|Mikrofon|Router|Pendrive|Dysk twardy|Tablet|Zegarek|Budzik|Termometr|Waga|Lustro|Szczotka|Grzebień|Suszarka|Ręcznik|Mydło|Szampon|Pasta do zębów|Szczoteczka|Maszynka do golenia|Perfumy|Krem|Plaster|Bandaż|Apteczka|Młotek|Śrubokręt|Wiertarka|Piła|Klucz francuski|Miarka|Poziomica|Gwoździe|Śruby|Latarka|Żarówka|Przedłużacz|Kabel|Gniazdko|Bateria|Pilot|Telewizor|Radio|Aparat|Kamera|Projektor|Ramka na zdjęcie|Obraz|Wazon|Doniczka|Kwiat|Świeczka|Zapałki|Zapalniczka|Kosz|Wiadro|Mop|Miotła|Szufelka|Odkurzacz|Żelazko|Deska do prasowania|Pralka|Suszarka do ubrań|Kosz na pranie|Spinacz|Wieszak|Szafa|Komoda|Biurko|Krzesło|Stół|Kanapa|Fotel|Łóżko|Materac|Poduszka|Kołdra|Koc|Dywan|Zasłona|Roleta|Lampa|Lampka nocna|Półka|Drabina|Walizka|Torba|Portfel|Pasek|Czapka|Rękawiczki|Szalik|Kurtka|Buty|Kalosze|Parasol|Okulary przeciwsłoneczne|Klucze|Brelok|Karta płatnicza|Moneta|Banknot|Mapa|Kompas|Plecak|Namiot|Śpiwór|Bidon|Termos|Lina|Kask|Hulajnoga|Deskorolka|Rolki|Narty|Sanki|Łyżwy|Piłka nożna|Piłka do kosza|Rakieta tenisowa|Hantle|Skakanka|Karty do gry|Kostka do gry|Puzzle|Klocki|Miś pluszowy|Lalka|Samochodzik|Jojo|Bączek|Balon|Kredki|Farby|Pędzel|Plastelina|Gitara|Pianino|Bęben|Flet|Skrzypce|Trąbka|Akwarium|Karma|Smycz|Obroża|Miska dla psa|Klatka|Siodło|Wędka|Haczyk|Siatka|Łopata|Grabie|Konewka|Wąż ogrodowy|Taczka|Donica|Grill|Leżak|Hamaka|Basen dmuchany|Rower|Kierownica|Dzwonek rowerowy|Pompka|Łańcuch|Kłódka|Zamek błyskawiczny|Magnes|Sprężyna|Kłębki wełny|Igła|Nitka|Guzik|Maszyna do szycia|Miarka krawiecka|Kalkulator|Teczka|Segregator|Dziurkacz|Zszywacz|Spinacze|Tablica|Kreda|Marker|Gąbka|Pilot do bramy|Domofon|Dzwonek|Gaśnica
`;

const knownForbiddenPool = ["piosenka", "koncert", "stadion", "medal", "głos", "kamera", "program", "książka", "nagroda", "mikrofon", "trener", "rekord", "serial", "teatr", "album", "wywiad", "scena", "boisko", "kort", "ekran"];
const cartoonForbiddenPool = ["rysunek", "odcinek", "magia", "zamek", "las", "przyjaciel", "zwierzak", "pościg", "śmiech", "królestwo", "piosenka", "kolory", "dom", "łapa", "ogon", "czapka", "księżniczka", "potwór", "wioska", "statek"];
const movieForbiddenPool = ["miecz", "różdżka", "maska", "peleryna", "statek", "kosmos", "pierścień", "czekolada", "samochód", "robot", "dinozaur", "pirat", "czarodziej", "supermoc", "zbroja", "pistolet", "mapa", "zamek", "smok", "planeta"];
const objectForbiddenPool = ["uchwyt", "przycisk", "kabel", "bateria", "pokrywka", "kółko", "ekran", "zamek", "kieszeń", "rączka", "sznurek", "pudełko", "szkło", "papier", "gumka", "metal", "plastik", "drewno", "materiał", "kolor"];

const forbiddenOverrides = {
  "Willy Wonka": ["fabryka", "czekolada", "Oompa Loompa", "kapelusz", "słodycze", "Charlie"],
  "Charlie Bucket": ["Willy Wonka", "czekolada", "złoty bilet", "fabryka", "dziadek", "bieda"],
  "Gandalf": ["czarodziej", "laska", "Moria", "hobbit", "Saruman", "siwy"],
  "Frodo Baggins": ["pierścień", "hobbit", "Shire", "Mordor", "Sam", "Gollum"],
  "Sam Gamgee": ["Frodo", "hobbit", "Shire", "ogród", "pierścień", "Mordor"],
  "Aragorn": ["król", "miecz", "Gondor", "tropiciel", "Arwena", "drużyna"],
  "Legolas": ["elf", "łuk", "strzały", "Gimli", "Mroczna Puszcza", "drużyna"],
  "Gollum": ["pierścień", "skarb", "hobbit", "jaskinia", "ryba", "Smeagol"],
  "Darth Vader": ["maska", "oddech", "Luke", "ciemna strona", "miecz", "Imperium"],
  "Yoda": ["Jedi", "zielony", "mistrz", "moc", "mały", "Dagobah"],
  "Luke Skywalker": ["Jedi", "miecz", "Vader", "Leia", "Tatooine", "moc"],
  "Han Solo": ["Sokół Millennium", "Chewbacca", "Leia", "przemytnik", "blaster", "kosmos"],
  "Harry Potter": ["różdżka", "blizna", "Hogwart", "Voldemort", "okulary", "Hermiona"],
  "Hermiona Granger": ["Harry Potter", "Hogwart", "różdżka", "książki", "Ron", "mądra"],
  "Ron Weasley": ["Harry Potter", "Hermiona", "rude włosy", "szachy", "Hogwart", "Weasley"],
  "Dumbledore": ["Hogwart", "dyrektor", "broda", "Feniks", "Harry", "czarodziej"],
  "Severus Snape": ["eliksiry", "Hogwart", "czarny", "Harry", "Lily", "nauczyciel"],
  "Voldemort": ["czarny pan", "nos", "Harry", "różdżka", "wąż", "horkruks"],
  "Spider-Man": ["pająk", "sieć", "Peter Parker", "maska", "Nowy Jork", "wujek Ben"],
  "Batman": ["nietoperz", "Gotham", "Bruce Wayne", "Joker", "jaskinia", "Batmobil"],
  "Joker": ["Batman", "uśmiech", "Gotham", "klaun", "zielone włosy", "chaos"],
  "Superman": ["peleryna", "Krypton", "Clark Kent", "latanie", "Lois", "S"],
  "Wonder Woman": ["lasso", "Amazonka", "Diana", "tarcza", "bransoletki", "wyspa"],
  "Iron Man": ["zbroja", "Tony Stark", "reaktor", "miliarder", "Jarvis", "latanie"],
  "Thor": ["młot", "Asgard", "Loki", "piorun", "Mjolnir", "Odyn"],
  "Hulk": ["zielony", "złość", "Bruce Banner", "siła", "Avengers", "rośnie"],
  "Loki": ["Thor", "rogaty hełm", "iluzja", "Asgard", "brat", "psikus"],
  "Thanos": ["rękawica", "kamienie", "pstryknięcie", "Avengers", "fioletowy", "Titan"],
  "Jack Sparrow": ["pirat", "rum", "kompas", "statek", "Karaiby", "kapitan"],
  "Kapitan Jack Sparrow": ["pirat", "rum", "kompas", "statek", "Karaiby", "kapitan"],
  "Indiana Jones": ["kapelusz", "bicz", "archeolog", "skarby", "wąż", "świątynia"],
  "James Bond": ["agent", "007", "martini", "garnitur", "Aston Martin", "szpieg"],
  "Neo": ["Matrix", "pigułka", "okulary", "kod", "Morpheus", "Trinity"],
  "John Wick": ["pies", "zabójca", "ołówek", "hotel", "czarny garnitur", "zemsta"],
  "Terminator": ["robot", "Sarah Connor", "przyszłość", "Hasta la vista", "Arnold", "cyborg"],
  "Rocky Balboa": ["boks", "schody", "Filadelfia", "Adrian", "rękawice", "trening"],
  "Maverick": ["Top Gun", "pilot", "samolot", "kask", "Tom Cruise", "myśliwiec"],
  "Forrest Gump": ["bieganie", "czekoladki", "ławka", "Jenny", "Tom Hanks", "głupi"],
  "Kevin McCallister": ["sam w domu", "pułapki", "święta", "złodzieje", "chłopiec", "krzyk"],
  "Grinch": ["święta", "zielony", "prezenty", "Whoville", "serce", "choinka"],
  "Edward Nożycoręki": ["nożyczki", "dłonie", "zamek", "fryzury", "Johnny Depp", "blizny"],
  "Mary Poppins": ["parasolka", "niania", "torba", "dzieci", "latać", "komin"],
  "Matylda": ["książki", "telekineza", "szkoła", "Trunchbull", "dziewczynka", "biblioteka"],
  "Jumanji": ["gra", "dżungla", "kostka", "plansza", "zwierzęta", "bęben"],
  "Bridget Jones": ["pamiętnik", "Darcy", "Londyn", "singielka", "dziennik", "komedia"],
  "Shrek": ["ogr", "bagno", "Fiona", "Osioł", "zielony", "cebulka"],
  "Fiona": ["Shrek", "księżniczka", "ogr", "zamek", "Osioł", "zielona"],
  "Osioł": ["Shrek", "gada", "smok", "przyjaciel", "kopyta", "humor"],
  "Kot w Butach": ["Shrek", "kapelusz", "szabla", "oczy", "buty", "miauczenie"],
  "Simba": ["lew", "Mufasa", "sawanna", "Hakuna Matata", "Skaza", "król"],
  "Mufasa": ["Simba", "lew", "ojciec", "Skaza", "król", "sawanna"],
  "Timon": ["Pumba", "surykatka", "Hakuna Matata", "Simba", "dżungla", "robaki"],
  "Pumba": ["Timon", "guziec", "Hakuna Matata", "Simba", "robaki", "zapach"],
  "Elsa": ["lód", "Kraina lodu", "Anna", "śnieg", "Let It Go", "królowa"],
  "Anna": ["Elsa", "Kraina lodu", "siostra", "Kristoff", "zamek", "śnieg"],
  "Olaf": ["bałwan", "marchewka", "Elsa", "lato", "śnieg", "Kraina lodu"],
  "Ariel": ["syrenka", "morze", "rude włosy", "Sebastian", "książę", "głos"],
  "Alladyn": ["lampa", "dywan", "Dżin", "Jasmine", "życzenia", "pałac"],
  "Dżin": ["lampa", "życzenia", "Alladyn", "niebieski", "magia", "dywan"],
  "Mulan": ["Chiny", "wojna", "smok", "Mushu", "przebranie", "honor"],
  "Vaiana": ["ocean", "Maui", "łódź", "wyspa", "serce", "Polinezja"],
  "Buzz Astral": ["Toy Story", "kosmos", "laser", "skrzydła", "Chudy", "zabawka"],
  "Chudy": ["Toy Story", "kowboj", "kapelusz", "Andy", "Buzz", "zabawka"],
  "Sulley": ["potwór", "Mike", "Boo", "drzwi", "strach", "niebieski"],
  "Mike Wazowski": ["jedno oko", "Sulley", "potwór", "Boo", "zielony", "drzwi"],
  "Zygzak McQueen": ["auta", "wyścig", "czerwony", "Złomek", "Puchar", "samochód"],
  "Wall-E": ["robot", "śmieci", "EVE", "kosmos", "roślina", "Ziemia"],
  "Nemo": ["rybka", "Dory", "ocean", "Marlin", "płetwa", "akwarium"],
  "Dory": ["Nemo", "zapomina", "ryba", "ocean", "Marlin", "niebieska"],
  "Gru": ["Minionki", "łysy", "złoczyńca", "dziewczynki", "banan", "laboratorium"],
  "Minionek": ["żółty", "banan", "Gru", "okulary", "mały", "język"],
  "Po z Kung Fu Pandy": ["panda", "kung fu", "makaron", "Shifu", "Smoczy Wojownik", "Chiny"],
  "Szczerbatek": ["smok", "Czkawka", "latanie", "czarny", "wiking", "ogon"],
  "Czkawka": ["smok", "Szczerbatek", "wiking", "latanie", "Astrid", "Berk"],
};

const forbiddenHintRules = [
  { match: ["Leia", "Han Solo", "Chewbacca", "Obi-Wan", "Anakin", "Kylo", "Rey", "Grogu", "Mandalorianin", "R2-D2", "C-3PO"], words: ["Gwiezdne wojny", "moc", "miecz", "kosmos", "Jedi", "statek"] },
  { match: ["Gimli", "Bilbo", "Sauron", "Galadriela", "Saruman"], words: ["pierścień", "hobbit", "Mordor", "elf", "czarodziej", "Śródziemie"] },
  { match: ["Hagrid", "Draco", "Sirius", "Zgredek", "Newt Scamander"], words: ["Hogwart", "różdżka", "Harry", "magia", "czarodziej", "zaklęcie"] },
  { match: ["Kapitan Ameryka", "Czarna Wdowa", "Doktor Strange", "Black Panther", "Deadpool", "Wolverine", "Venom", "Star-Lord", "Groot", "Rocket"], words: ["Marvel", "superbohater", "Avengers", "maska", "komiks", "moc"] },
  { match: ["Harley Quinn", "Aquaman", "Flash", "Catwoman", "Penguin", "Riddler"], words: ["DC", "Batman", "Gotham", "komiks", "maska", "złoczyńca"] },
  { match: ["Will Turner", "Elizabeth Swann", "Barbossa", "Davy Jones"], words: ["piraci", "Karaiby", "statek", "Jack Sparrow", "morze", "skarb"] },
  { match: ["Lara Croft"], words: ["Tomb Raider", "pistolety", "archeologia", "przygoda", "skarby", "warkocz"] },
  { match: ["Sherlock", "Watson", "Poirot", "Enola"], words: ["detektyw", "zagadka", "śledztwo", "Londyn", "morderstwo", "dedukcja"] },
  { match: ["Trinity", "Morpheus", "Agent Smith"], words: ["Matrix", "Neo", "pigułka", "kod", "okulary", "symulacja"] },
  { match: ["Ethan Hunt", "Jason Bourne"], words: ["agent", "pościg", "tajna misja", "szpieg", "ucieczka", "walka"] },
  { match: ["Dominic Toretto", "Brian O'Conner", "Hobbs", "Deckard Shaw"], words: ["szybcy", "samochody", "wyścig", "rodzina", "tuning", "pościg"] },
  { match: ["Sarah Connor", "John Connor"], words: ["Terminator", "robot", "przyszłość", "Skynet", "Arnold", "ucieczka"] },
  { match: ["Ellen Ripley"], words: ["Obcy", "kosmos", "statek", "potwór", "Sigourney", "kapsuła"] },
  { match: ["Apollo Creed", "Ivan Drago", "Adonis Creed"], words: ["Rocky", "boks", "ring", "rękawice", "walka", "trening"] },
  { match: ["Jenny Curran"], words: ["Forrest Gump", "bieganie", "ławka", "Tom Hanks", "miłość", "czekoladki"] },
  { match: ["Chuck Noland", "Wilson"], words: ["Cast Away", "wyspa", "piłka", "rozbitek", "samolot", "paczka"] },
  { match: ["Harry z Kevina", "Marv z Kevina"], words: ["Kevin", "sam w domu", "złodziej", "pułapki", "święta", "dom"] },
  { match: ["Elf Buddy", "Scrooge", "Święty Mikołaj"], words: ["święta", "prezenty", "choinka", "Boże Narodzenie", "kolędy", "śnieg"] },
  { match: ["Beetlejuice"], words: ["duch", "paski", "Tim Burton", "straszenie", "zaświaty", "imię"] },
  { match: ["Kapelusznik"], words: ["Alicja", "kapelusz", "herbata", "Kraina Czarów", "szalony", "królik"] },
  { match: ["Niania McPhee"], words: ["niania", "dzieci", "magia", "nos", "dyscyplina", "rodzina"] },
  { match: ["Alan Parrish", "Ruby Roundhouse"], words: ["Jumanji", "dżungla", "gra", "kostka", "zwierzęta", "plansza"] },
  { match: ["Lord Farquaad"], words: ["Shrek", "niski", "zamek", "Fiona", "Duloc", "zły"] },
  { match: ["Merida"], words: ["łuk", "rude włosy", "niedźwiedź", "Szkocja", "księżniczka", "odwaga"] },
  { match: ["Roszpunka"], words: ["włosy", "wieża", "Flynn", "patelnia", "latarnie", "księżniczka"] },
  { match: ["Myszka Miki", "Minnie", "Kaczor Donald", "Kaczka Daisy", "Goofy", "Pluto", "Sknerus", "Hyzio", "Dyzio", "Zyzio"], words: ["Disney", "mysz", "kaczka", "uszy", "rękawiczki", "kreskówka"] },
  { match: ["Bugs", "Daffy", "Tweety", "Sylwester", "Struś", "Kojot", "Taz", "Speedy", "Elmer"], words: ["Looney Tunes", "królik", "kaczka", "pościg", "kreskówka", "ACME"] },
  { match: ["Tom i Jerry", "Tom", "Jerry"], words: ["kot", "mysz", "pościg", "pułapka", "kreskówka", "dom"] },
  { match: ["Scooby", "Shaggy", "Velma", "Daphne", "Fred Jones"], words: ["zagadka", "pies", "duch", "potwór", "van", "kanapka"] },
  { match: ["Flintstone", "Wilma", "Barney Rubble", "Jetson", "Astro"], words: ["jaskinia", "kamień", "rodzina", "dinozaur", "samochód", "kreskówka"] },
  { match: ["Homer", "Marge", "Bart", "Lisa", "Maggie"], words: ["Simpsonowie", "żółty", "Springfield", "donut", "rodzina", "kanapa"] },
  { match: ["Smerf", "Gargamel", "Maruda", "Ważniak", "Osiłek"], words: ["niebieski", "wioska", "Papa Smerf", "Gargamel", "grzyb", "Azrael"] },
  { match: ["Asterix", "Obelix", "Idefix", "Panoramix"], words: ["Galowie", "Rzymianie", "mikstura", "wąsy", "siła", "wioska"] },
  { match: ["Kajko", "Kokosz"], words: ["Mirmiłowo", "komiks", "wojowie", "Łamignat", "Hegemon", "gród"] },
  { match: ["Krecik", "Reksio", "Bolek", "Lolek", "Miś Uszatek", "Kolargol"], words: ["dobranocka", "PRL", "kreskówka", "dzieciństwo", "telewizja", "Polska"] },
  { match: ["Muminek", "Włóczykij", "Mała Mi", "Panna Migotka", "Ryjek", "Paszczak"], words: ["Dolina Muminków", "troll", "włóczęga", "kapelusz", "książka", "rodzina"] },
  { match: ["Pszczółka Maja", "Gucio", "Filip"], words: ["pszczoła", "łąka", "ul", "skrzydła", "miód", "owad"] },
  { match: ["Koziołek Matołek"], words: ["Pacanów", "kozioł", "bajka", "wędrówka", "rogi", "komiks"] },
  { match: ["Kot Filemon", "Bonifacy"], words: ["kot", "biały", "czarny", "dobranocka", "podwórko", "miau"] },
  { match: ["Żwirek", "Muchomorek"], words: ["las", "czapka", "dobranocka", "Czechy", "grzyb", "przyjaciele"] },
  { match: ["Rumcajs", "Hanka", "Cypisek"], words: ["rozbójnik", "las", "broda", "Czechy", "rodzina", "kapelusz"] },
  { match: ["Wilk i Zając", "Zając z Wilka", "Wilk z Wilka"], words: ["wilk", "zając", "pościg", "Rosja", "kreskówka", "Nu pogodi"] },
  { match: ["Kubuś", "Prosiaczek", "Tygrysek", "Kłapouchy", "Królik z Kubusia", "Maleństwo"], words: ["miód", "Stumilowy Las", "miś", "Prosiaczek", "balonik", "Tygrysek"] },
  { match: ["Pinokio"], words: ["nos", "kłamstwo", "drewno", "Geppetto", "marionetka", "świerszcz"] },
  { match: ["Dumbo", "Bambi"], words: ["Disney", "zwierzę", "uszy", "las", "mama", "klasyka"] },
  { match: ["Piotruś Pan", "Dzwoneczek", "Kapitan Hak", "Wendy"], words: ["Nibylandia", "wróżka", "pirat", "latanie", "dzieci", "hak"] },
  { match: ["Mowgli", "Baloo", "Bagheera", "Shere Khan"], words: ["dżungla", "niedźwiedź", "pantera", "tygrys", "wilki", "Księga Dżungli"] },
  { match: ["Kopciuszek", "Śpiąca Królewna", "Królewna Śnieżka"], words: ["księżniczka", "zamek", "wróżka", "książę", "suknia", "Disney"] },
  { match: ["Sebastian", "Florek", "Urszula"], words: ["Ariel", "morze", "syrenka", "krab", "głos", "Disney"] },
  { match: ["Jasmine", "Abu", "Jafar"], words: ["Alladyn", "lampa", "pałac", "dywan", "Dżin", "Agrabah"] },
  { match: ["Gaston", "Lumiere", "Pani Imbryk"], words: ["Bella", "Bestia", "zamek", "róża", "Disney", "klątwa"] },
];

const knownPersonHintRules = [
  { match: ["Ariana Grande", "Ed Sheeran", "Bruno Mars", "Justin Bieber", "Katy Perry", "Dua Lipa", "Miley Cyrus", "Selena Gomez", "Whitney Houston", "Celine Dion", "Tina Turner", "Cher", "Sting", "Phil Collins", "George Michael", "Prince", "Alicia Keys", "Stevie Wonder", "Aretha Franklin", "Ray Charles", "Frank Sinatra"], words: ["piosenka", "koncert", "hit", "album", "mikrofon", "scena"] },
  { match: ["Drake", "Eminem", "Snoop Dogg", "Tupac Shakur", "Kanye West", "Jay-Z", "Kendrick Lamar", "Travis Scott", "Bad Bunny", "Rosalia"], words: ["rap", "mikrofon", "bit", "album", "koncert", "tekst"] },
  { match: ["Freddie Mercury", "Elvis Presley", "Bob Marley", "John Lennon", "Paul McCartney", "Mick Jagger", "David Bowie", "Bruce Springsteen", "Bono", "Ozzy Osbourne", "Slash", "Dave Grohl", "Kurt Cobain", "Axl Rose", "Chester Bennington", "Lenny Kravitz"], words: ["gitara", "scena", "zespół", "rock", "hit", "legenda"] },
  { match: ["Anthony Hopkins", "Morgan Freeman", "Robert De Niro", "Al Pacino", "Joaquin Phoenix", "Heath Ledger", "Christian Bale", "Harrison Ford", "Samuel L. Jackson", "Denzel Washington", "Matt Damon", "Ben Affleck", "George Clooney", "Ryan Reynolds", "Ryan Gosling", "Hugh Jackman", "Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Scarlett Johansson", "Jennifer Lawrence", "Emma Stone", "Natalie Portman", "Julia Roberts", "Sandra Bullock", "Nicole Kidman", "Cate Blanchett", "Kate Winslet", "Gal Gadot", "Zendaya", "Millie Bobby Brown", "Timothee Chalamet", "Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Benedict Cumberbatch", "Henry Cavill", "Jason Momoa", "Margot Robbie", "Anne Hathaway", "Gwyneth Paltrow", "Saoirse Ronan"], words: ["film", "aktor", "Hollywood", "rola", "kamera", "Oscar"] },
  { match: ["Greta Thunberg"], words: ["klimat", "protest", "ekologia", "Szwecja", "młodzież", "aktywistka"] },
  { match: ["Malala Yousafzai"], words: ["edukacja", "Pakistan", "Pokojowy Nobel", "dziewczynki", "prawa", "aktywistka"] },
  { match: ["Usain Bolt"], words: ["sprint", "Jamajka", "rekord", "100 metrów", "złoto", "błyskawica"] },
  { match: ["Michael Jordan", "LeBron James", "Kobe Bryant"], words: ["koszykówka", "NBA", "rzut", "mistrz", "parkiet", "numer"] },
  { match: ["Serena Williams", "Roger Federer", "Rafael Nadal", "Novak Djokovic"], words: ["tenis", "rakieta", "kort", "Wimbledon", "serwis", "turniej"] },
  { match: ["Mike Tyson", "Muhammad Ali"], words: ["boks", "ring", "cios", "rękawice", "mistrz", "walka"] },
  { match: ["Tiger Woods"], words: ["golf", "kij", "dołek", "green", "turniej", "mistrz"] },
  { match: ["Lewis Hamilton", "Max Verstappen", "Michael Schumacher", "Valentino Rossi"], words: ["wyścig", "bolid", "tor", "kask", "mistrz", "prędkość"] },
  { match: ["Zinedine Zidane", "Kylian Mbappe", "Neymar", "Erling Haaland", "Zlatan Ibrahimovic", "Wayne Rooney", "David Beckham", "Pele", "Diego Maradona"], words: ["piłka", "gol", "boisko", "reprezentacja", "napastnik", "mecz"] },
];

const extraCharacterHintRules = [
  { match: ["Yogi Bear"], words: ["miś", "koszyk", "piknik", "Jellystone", "Boo Boo", "strażnik"] },
  { match: ["Flintstonowie"], words: ["jaskinia", "kamień", "Fred", "Wilma", "dinozaur", "rodzina"] },
  { match: ["Jacek i Agatka"], words: ["kukiełki", "dobranocka", "dzieci", "telewizja", "Polska", "para"] },
  { match: ["Czerwony Kapturek"], words: ["wilk", "babcia", "koszyk", "las", "czerwony", "bajka"] },
  { match: ["Sowa", "Kangurzyca"], words: ["Stumilowy Las", "Kubuś", "miód", "Prosiaczek", "miś", "bajka"] },
  { match: ["Jiminy Cricket"], words: ["Pinokio", "świerszcz", "sumienie", "nos", "Disney", "marionetka"] },
  { match: ["Tuptuś"], words: ["Bambi", "królik", "las", "Disney", "zwierzątko", "przyjaciel"] },
  { match: ["Siedmiu Krasnoludków", "Grumpy"], words: ["Śnieżka", "krasnoludki", "kopalnia", "jabłko", "królowa", "Disney"] },
  { match: ["Bella", "Bestia"], words: ["róża", "zamek", "klątwa", "Disney", "Gaston", "książki"] },
  { match: ["Nala", "Skaza", "Rafiki"], words: ["Król Lew", "Simba", "lew", "sawanna", "Mufasa", "Hakuna Matata"] },
  { match: ["Pocahontas"], words: ["Indianie", "wiatr", "rzeka", "John Smith", "Disney", "natura"] },
  { match: ["Mushu"], words: ["Mulan", "smok", "Chiny", "honor", "wojna", "mały"] },
  { match: ["Herkules", "Hades", "Megara"], words: ["Grecja", "Zeus", "siła", "Olimp", "Disney", "mitologia"] },
  { match: ["Tarzan", "Jane"], words: ["dżungla", "małpy", "liany", "Disney", "las", "człowiek"] },
  { match: ["Quasimodo", "Esmeralda"], words: ["dzwonnik", "Notre Dame", "garb", "katedra", "Paryż", "Disney"] },
  { match: ["Kuzco", "Yzma"], words: ["lama", "cesarz", "Kronk", "Peru", "mikstura", "Disney"] },
  { match: ["Flynn Rider"], words: ["Roszpunka", "włosy", "wieża", "latarnie", "złodziej", "patelnia"] },
  { match: ["Maui"], words: ["Vaiana", "hak", "ocean", "półbóg", "tatuaże", "wyspa"] },
  { match: ["Sven", "Kristoff"], words: ["Kraina lodu", "Elsa", "Anna", "renifer", "lód", "sanie"] },
  { match: ["Ciastek"], words: ["Shrek", "piernik", "ludzik", "lukier", "Duloc", "bajka"] },
  { match: ["Król Julian", "Alex Lew", "Marty Zebra", "Gloria Hipopotam", "Melman"], words: ["Madagaskar", "zoo", "lemur", "lew", "Nowy Jork", "wyspa"] },
  { match: ["Skipper", "Kowalski", "Rico", "Szeregowy", "Pingwiny z Madagaskaru"], words: ["pingwiny", "Madagaskar", "komandos", "zoo", "tajna misja", "Kowalski"] },
  { match: ["Tygrysica", "Mistrz Shifu"], words: ["Kung Fu Panda", "Po", "panda", "kung fu", "Smoczy Wojownik", "Chiny"] },
  { match: ["Astrid"], words: ["Szczerbatek", "Czkawka", "smok", "wiking", "Berk", "latanie"] },
  { match: ["Jessie", "Pan Bulwa", "Rex", "Hamm", "Bo Peep"], words: ["Toy Story", "zabawka", "Chudy", "Buzz", "Andy", "pokój"] },
  { match: ["Boo"], words: ["potwory", "Sulley", "Mike", "drzwi", "dziewczynka", "strach"] },
  { match: ["Pan Iniemamocny", "Elastyna", "Violet", "Dash", "Jack-Jack"], words: ["Iniemamocni", "supermoc", "rodzina", "maska", "peleryna", "Pixar"] },
  { match: ["Marlin", "Bruce Rekin"], words: ["Nemo", "Dory", "ocean", "ryba", "rafa", "Australia"] },
  { match: ["Złomek", "Sally"], words: ["auta", "Zygzak", "wyścig", "samochód", "Radiator Springs", "Pixar"] },
  { match: ["Remy"], words: ["Ratatuj", "szczur", "kucharz", "Paryż", "restauracja", "Pixar"] },
  { match: ["EVE"], words: ["Wall-E", "robot", "kosmos", "roślina", "biała", "Ziemia"] },
  { match: ["Miguel z Coco"], words: ["Coco", "gitara", "Día de Muertos", "Meksyk", "rodzina", "muzyka"] },
  { match: ["Sid", "Maniek", "Diego", "Scrat"], words: ["Epoka lodowcowa", "lód", "mamut", "leniwiec", "orzech", "stado"] },
  { match: ["Drakula z Hotelu Transylwania", "Mavis"], words: ["Hotel Transylwania", "wampir", "zamek", "potwory", "córka", "Drakula"] },
  { match: ["Godzilla"], words: ["potwór", "Japonia", "miasto", "radioaktywność", "ryczenie", "kaiju"] },
  { match: ["King Kong"], words: ["goryl", "wieżowiec", "wyspa", "potwór", "Nowy Jork", "małpa"] },
  { match: ["Jurassic Park", "Alan Grant", "Ian Malcolm", "Owen Grady"], words: ["dinozaury", "park", "T-Rex", "raptor", "wyspa", "Spielberg"] },
  { match: ["Katniss Everdeen", "Peeta Mellark"], words: ["Igrzyska śmierci", "łuk", "arena", "kosogłos", "Kapitol", "trybut"] },
  { match: ["Vito Corleone", "Michael Corleone"], words: ["Ojciec chrzestny", "mafia", "rodzina", "Don", "Sycylia", "oferta"] },
  { match: ["Maximus"], words: ["Gladiator", "arena", "Rzym", "cesarz", "miecz", "zemsta"] },
  { match: ["William Wallace"], words: ["Braveheart", "Szkocja", "wolność", "miecz", "bitwa", "malowana twarz"] },
  { match: ["Robin Hood"], words: ["łuk", "Sherwood", "biedni", "bogaci", "strzały", "banita"] },
  { match: ["Mark Watney"], words: ["Marsjanin", "Mars", "ziemniaki", "astronauta", "NASA", "kosmos"] },
  { match: ["Wednesday Addams", "Morticia Addams", "Gomez Addams"], words: ["Addamsowie", "czarny", "rodzina", "gotyk", "ręka", "dziwna"] },
  { match: ["Geralt z Rivii", "Yennefer", "Ciri"], words: ["Wiedźmin", "potwory", "magia", "miecz", "Biały Wilk", "fantasy"] },
  { match: ["Leon Zawodowiec", "Matylda z Leona"], words: ["Leon", "zawodowiec", "roślina", "okulary", "dziewczynka", "Nowy Jork"] },
  { match: ["Amelia"], words: ["Paryż", "Montmartre", "kawiarnia", "uśmiech", "Francja", "romans"] },
  { match: ["Mr Bean"], words: ["Jaś Fasola", "miś", "Mini", "Rowan Atkinson", "komedia", "miny"] },
  { match: ["Elle Woods"], words: ["Legalna blondynka", "różowy", "Harvard", "prawo", "pies", "blondynka"] },
  { match: ["Regina George"], words: ["Mean Girls", "plastiki", "szkoła", "różowy", "wredna", "Burn Book"] },
];

const objectHintRules = [
  { match: ["Kubek"], words: ["kawa", "herbata", "ucho", "pić", "gorące", "porcelana"] },
  { match: ["Butelka", "Bidon", "Termos"], words: ["woda", "napój", "zakrętka", "pić", "plecak", "wycieczka"] },
  { match: ["Szklanka"], words: ["woda", "sok", "szkło", "przezroczysta", "pić", "kuchnia"] },
  { match: ["Talerz", "Widelec", "Nóż", "Łyżka", "Miska"], words: ["jedzenie", "obiad", "stół", "kuchnia", "sztućce", "zmywarka"] },
  { match: ["Garnek", "Patelnia", "Czajnik", "Ekspres do kawy", "Mikrofalówka", "Piekarnik", "Toster", "Blender", "Mikser", "Deska do krojenia", "Sitko", "Tarka"], words: ["gotowanie", "kuchnia", "jedzenie", "prąd", "ciepło", "przepis"] },
  { match: ["Nożyczki", "Taśma klejąca", "Klej"], words: ["ciąć", "papier", "klejenie", "biurko", "szkoła", "ręce"] },
  { match: ["Długopis", "Ołówek", "Gumka", "Temperówka", "Linijka", "Zeszyt", "Notes", "Kalendarz", "Koperta", "Znaczek", "Teczka", "Segregator", "Dziurkacz", "Zszywacz", "Spinacze", "Tablica", "Kreda", "Marker", "Gąbka"], words: ["szkoła", "biurko", "papier", "pisać", "lekcja", "notatki"] },
  { match: ["Drukarka", "Laptop", "Klawiatura", "Mysz komputerowa", "Monitor", "Głośnik", "Słuchawki", "Mikrofon", "Router", "Pendrive", "Dysk twardy", "Tablet", "Projektor"], words: ["komputer", "prąd", "ekran", "kabel", "internet", "biurko"] },
  { match: ["Zegarek", "Budzik"], words: ["czas", "godzina", "wskazówki", "alarm", "ręka", "tik-tak"] },
  { match: ["Termometr", "Waga"], words: ["mierzyć", "wynik", "liczby", "zdrowie", "skala", "dom"] },
  { match: ["Lustro", "Szczotka", "Grzebień", "Suszarka", "Ręcznik", "Mydło", "Szampon", "Pasta do zębów", "Szczoteczka", "Maszynka do golenia", "Perfumy", "Krem"], words: ["łazienka", "mycie", "rano", "włosy", "twarz", "czystość"] },
  { match: ["Plaster", "Bandaż", "Apteczka"], words: ["rana", "pomoc", "lekarz", "apteka", "skaleczenie", "zdrowie"] },
  { match: ["Młotek", "Śrubokręt", "Wiertarka", "Piła", "Klucz francuski", "Miarka", "Poziomica", "Gwoździe", "Śruby"], words: ["narzędzia", "naprawa", "warsztat", "majsterkowanie", "metal", "deska"] },
  { match: ["Żarówka", "Przedłużacz", "Kabel", "Gniazdko", "Bateria"], words: ["prąd", "energia", "gniazdko", "światło", "ładowanie", "dom"] },
  { match: ["Telewizor", "Radio", "Aparat", "Ramka na zdjęcie", "Obraz"], words: ["salon", "oglądać", "dźwięk", "zdjęcie", "ściana", "pilot"] },
  { match: ["Wazon", "Doniczka", "Kwiat", "Świeczka", "Zapałki", "Zapalniczka"], words: ["dekoracja", "dom", "ogień", "zapach", "stół", "pokój"] },
  { match: ["Kosz", "Wiadro", "Mop", "Miotła", "Szufelka", "Odkurzacz", "Żelazko", "Deska do prasowania", "Pralka", "Suszarka do ubrań", "Kosz na pranie"], words: ["sprzątanie", "dom", "brud", "pranie", "podłoga", "porządek"] },
  { match: ["Spinacz", "Wieszak", "Szafa", "Komoda", "Biurko", "Krzesło", "Stół", "Kanapa", "Fotel", "Łóżko", "Materac", "Poduszka", "Kołdra", "Koc", "Dywan", "Zasłona", "Roleta", "Lampa", "Lampka nocna", "Półka", "Drabina"], words: ["mebel", "pokój", "dom", "stać", "siedzieć", "wnętrze"] },
  { match: ["Walizka", "Torba", "Portfel", "Pasek", "Czapka", "Rękawiczki", "Szalik", "Kurtka", "Buty", "Kalosze", "Parasol", "Okulary przeciwsłoneczne", "Klucze", "Brelok", "Karta płatnicza", "Moneta", "Banknot"], words: ["wyjście", "kieszeń", "nosić", "ubranie", "pieniądze", "podróż"] },
  { match: ["Mapa", "Kompas", "Namiot", "Śpiwór", "Lina", "Kask"], words: ["wycieczka", "las", "turystyka", "kierunek", "bezpieczeństwo", "plecak"] },
  { match: ["Hulajnoga", "Deskorolka", "Rolki", "Narty", "Sanki", "Łyżwy", "Piłka nożna", "Piłka do kosza", "Rakieta tenisowa", "Hantle", "Skakanka"], words: ["sport", "ruch", "gra", "trening", "boisko", "zabawa"] },
  { match: ["Karty do gry", "Kostka do gry", "Puzzle", "Klocki", "Miś pluszowy", "Lalka", "Samochodzik", "Jojo", "Bączek", "Balon"], words: ["zabawa", "gra", "dzieciństwo", "kolory", "pokój", "prezent"] },
  { match: ["Kredki", "Farby", "Pędzel", "Plastelina"], words: ["rysować", "kolory", "papier", "plastyka", "dzieci", "obrazek"] },
  { match: ["Gitara", "Pianino", "Bęben", "Flet", "Skrzypce", "Trąbka"], words: ["muzyka", "instrument", "grać", "dźwięk", "koncert", "melodia"] },
  { match: ["Akwarium", "Karma", "Smycz", "Obroża", "Miska dla psa", "Klatka", "Siodło", "Wędka", "Haczyk"], words: ["zwierzę", "dom", "spacer", "ryba", "pies", "opieka"] },
];

const contextualForbiddenRules = [
  ...forbiddenHintRules,
  ...knownPersonHintRules,
  ...extraCharacterHintRules,
  ...objectHintRules,
];

function namesFrom(text) {
  return text
    .trim()
    .split("|")
    .map((name) => name.trim())
    .filter(Boolean);
}

function matchesPhrase(name, phrase) {
  const normalizedName = name.toLowerCase();
  const normalizedPhrase = phrase.toLowerCase();

  if (normalizedName === normalizedPhrase) return true;

  if (normalizedPhrase.length <= 3) {
    return normalizedName
      .split(/[^\p{L}\p{N}]+/u)
      .filter(Boolean)
      .includes(normalizedPhrase);
  }

  return normalizedName.includes(normalizedPhrase);
}

function specificForbidden(name) {
  if (forbiddenOverrides[name]) {
    return forbiddenOverrides[name];
  }

  const hint = contextualForbiddenRules.find((rule) => rule.match.some((phrase) => matchesPhrase(name, phrase)));
  return hint ? hint.words : null;
}

function generatedForbidden(name, pool, index, requireSpecific = false) {
  const specific = specificForbidden(name);
  if (specific) return specific;

  if (requireSpecific) return null;

  const words = [];
  let offset = (index * 5) % pool.length;
  while (words.length < 6) {
    const word = pool[offset % pool.length];
    if (!words.includes(word)) words.push(word);
    offset += 2;
  }

  return words.slice(0, 6);
}

function buildExtraCards(namesText, pool, existingCards, excludedNames = [], options = {}) {
  const { requireSpecific = false } = options;
  const excluded = new Set(excludedNames.map((name) => name.toLowerCase()));
  const existingNames = new Set(existingCards.map((card) => card.name.toLowerCase()));
  return namesFrom(namesText)
    .filter((name) => !excluded.has(name.toLowerCase()))
    .filter((name) => !existingNames.has(name.toLowerCase()))
    .map((name, index) => {
      const forbidden = generatedForbidden(name, pool, index, requireSpecific);
      return forbidden ? { name, forbidden } : null;
    })
    .filter(Boolean);
}

function deckOf200(baseCards, namesText, pool, excludedNames = [], options = {}) {
  const excluded = new Set(excludedNames.map((name) => name.toLowerCase()));
  const cleanBase = baseCards.filter((card) => !excluded.has(card.name.toLowerCase()));
  return [...cleanBase, ...buildExtraCards(namesText, pool, cleanBase, excludedNames, options)].slice(0, 200);
}

const classicExcludedNames = [
  "Andrzej Duda",
  "Donald Tusk",
  "Mateusz Morawiecki",
  "Sławomir Mentzen",
  "Mariusz Błaszczak",
  "Krystyna Pawłowicz",
  "Kamil Durczok",
  "Bracia Kacperczyk",
];

const cartoonExcludedNames = [
  "Bashful",
  "Doc",
  "Happy",
  "Sleepy",
  "Sneezy",
  "Dopey",
  "Klubowy Smerf",
  "Boo Boo",
  "Bamm-Bamm",
  "Pebbles",
  "Betty Rubble",
];

const movieExcludedNames = [
  "Boromir",
  "Thorin",
  "Gale Hawthorne",
  "Effie Trinket",
  "Hannibal",
  "Hannibal Lecter",
  "Clarice Starling",
  "Tony Montana",
  "Travis Bickle",
  "Bubba",
  "Wendy Torrance",
  "Danny Torrance",
  "Freddy Krueger",
  "Jason Voorhees",
  "Michael Myers",
  "Ghostface",
  "Chucky",
  "Annabelle",
  "Pennywise",
  "Regan MacNeil",
  "Carrie White",
  "Norman Bates",
  "Patrick Bateman",
  "Hans Landa",
  "Panna Młoda",
  "Mia Wallace",
  "Vincent Vega",
  "Jules Winnfield",
  "Tyler Durden",
  "Django",
  "Jordan Belfort",
  "Lisbeth Salander",
  "Edward Cullen",
  "Bella Swan",
  "Jacob Black",
  "Borat",
  "Austin Powers",
  "Hans Landa",
  "Jack Torrance",
  "Alien",
  "Predator",
  "Robocop",
  "Rambo",
  "Mutt Williams",
  "Short Round",
  "Harry Lime",
];

const strictDeckOptions = { requireSpecific: true };

const classicDeck = deckOf200(cards, knownPeopleNames, knownForbiddenPool, classicExcludedNames, strictDeckOptions);
const cartoonDeck = deckOf200(cartoonCards, classicCartoonNames, cartoonForbiddenPool, cartoonExcludedNames, strictDeckOptions);
const movieDeck = deckOf200(movieCards, iconicMovieNames, movieForbiddenPool, movieExcludedNames, strictDeckOptions);
const objectDeck = deckOf200(objectCards, objectNames, objectForbiddenPool, [], strictDeckOptions);

const decks = {
  classic: classicDeck,
  cartoons: cartoonDeck,
  movies: movieDeck,
  objects: objectDeck,
  mix: [...classicDeck, ...cartoonDeck, ...movieDeck, ...objectDeck],
};

window.__tenTegoDeckCounts = Object.fromEntries(Object.entries(decks).map(([key, deck]) => [key, deck.length]));

const setup = {
  mode: "1v1",
  deck: "classic",
  rounds: 12,
  time: 60,
};

const state = {
  mode: "1v1",
  totalRounds: 12,
  deckKey: "classic",
  currentTeam: "yellow",
  scores: { yellow: 0, red: 0 },
  round: 1,
  cardIndex: 0,
  seconds: 60,
  maxSeconds: 60,
  running: false,
  timerId: null,
  deck: shuffle([...decks.classic]),
};

const els = {
  body: document.body,
  personName: document.querySelector("#person-name"),
  forbiddenList: document.querySelector("#forbidden-list"),
  scoreYellow: document.querySelector("#score-yellow"),
  scoreRed: document.querySelector("#score-red"),
  turnTitle: document.querySelector("#turn-title"),
  turnSubtitle: document.querySelector("#turn-subtitle"),
  timerValue: document.querySelector("#timer-value"),
  timerRing: document.querySelector("#timer-ring"),
  roundNumber: document.querySelector("#round-number"),
  roundTotal: document.querySelector(".round-total"),
  roundDots: document.querySelector("#round-dots"),
  eventLog: document.querySelector("#event-log"),
  startPause: document.querySelector("#start-pause"),
  yellowSpeaker: document.querySelector("#yellow-speaker"),
  yellowGuesser: document.querySelector("#yellow-guesser"),
  redSpeaker: document.querySelector("#red-speaker"),
  redGuesser: document.querySelector("#red-guesser"),
  titleEnter: document.querySelector("#title-enter"),
};

function shuffle(list) {
  return list
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function currentCard() {
  if (state.cardIndex >= state.deck.length) {
    state.deck = shuffle([...decks[state.deckKey]]);
    state.cardIndex = 0;
  }
  return state.deck[state.cardIndex];
}

function renderCard() {
  const card = currentCard();
  els.personName.textContent = card.name;
  els.forbiddenList.innerHTML = card.forbidden
    .map(
      (word, index) => `
        <div class="forbidden-item">
          <span class="number">${index + 1}</span>
          <strong>${word}</strong>
        </div>
      `
    )
    .join("");
  fitAllText();
}

function teamPlayers(team) {
  if (state.mode === "1v1") {
    return team === "yellow"
      ? { speaker: els.yellowSpeaker.value || "Gracz 1", guesser: els.redSpeaker.value || "Gracz 2" }
      : { speaker: els.redSpeaker.value || "Gracz 2", guesser: els.yellowSpeaker.value || "Gracz 1" };
  }

  return team === "yellow"
    ? { speaker: els.yellowSpeaker.value || "Michał", guesser: els.yellowGuesser.value || "Anna" }
    : { speaker: els.redSpeaker.value || "Tomek", guesser: els.redGuesser.value || "Kasia" };
}

function renderTurn() {
  const isRed = state.currentTeam === "red";
  const teamName = isRed ? "Różowi" : "Niebiescy";
  const players = teamPlayers(state.currentTeam);
  els.body.classList.toggle("is-red-turn", isRed);
  els.turnTitle.textContent = teamName;
  els.turnSubtitle.textContent = "";
  fitAllText();
}

function renderScore() {
  els.scoreYellow.textContent = state.scores.yellow;
  els.scoreRed.textContent = state.scores.red;
  fitAllText();
}

function renderTimer() {
  els.timerValue.textContent = state.seconds;
  const progress = Math.max(0, Math.round((state.seconds / state.maxSeconds) * 100));
  els.timerRing.style.setProperty("--progress", progress);
  els.startPause.textContent = state.running ? "Pauza" : "Start";
  fitAllText();
}

function renderRounds() {
  els.roundNumber.textContent = state.round;
  els.roundTotal.textContent = `/${state.totalRounds}`;
  els.roundDots.innerHTML = Array.from({ length: state.totalRounds }, (_, index) => {
    const className = index < state.round ? "is-done" : "";
    return `<span class="${className}"></span>`;
  }).join("");
}

function render() {
  renderCard();
  renderTurn();
  renderScore();
  renderTimer();
  renderRounds();
  fitAllText();
}

function fitText(element, options = {}) {
  if (!element) return;

  element.style.fontSize = "";
  element.style.lineHeight = "";
  if (element.clientWidth === 0 || element.clientHeight === 0) return;

  const computed = getComputedStyle(element);
  const cssMax = parseFloat(computed.getPropertyValue("--fit-max")) || parseFloat(computed.fontSize);
  const cssMin = parseFloat(computed.getPropertyValue("--fit-min")) || 10;
  const cssLineHeight = parseFloat(computed.lineHeight) || cssMax * 1.05;
  const max = options.max !== undefined ? options.max : cssMax;
  const min = options.min !== undefined ? options.min : cssMin;
  const lineHeight = options.lineHeight !== undefined ? options.lineHeight : cssLineHeight;

  element.style.fontSize = `${max}px`;
  element.style.lineHeight = `${lineHeight / max}`;

  let size = max;
  const fits = () => element.scrollWidth <= element.clientWidth + 1 && element.scrollHeight <= element.clientHeight + 1;

  while (size > min && !fits()) {
    size -= 1;
    element.style.fontSize = `${size}px`;
    element.style.lineHeight = `${lineHeight / max}`;
  }
}

function fitAllText() {
  requestAnimationFrame(() => {
    fitText(els.personName);
    document.querySelectorAll(".forbidden-item strong").forEach((item) => fitText(item));
    document.querySelectorAll(".score strong").forEach((item) => fitText(item));
    fitText(els.timerValue);
    fitText(els.turnTitle);
    document.querySelectorAll(".mode-button strong").forEach((item) => fitText(item));
  });
}

function logEvent(text) {
  const li = document.createElement("li");
  li.textContent = text;
  els.eventLog.prepend(li);
  while (els.eventLog.children.length > 5) {
    els.eventLog.lastElementChild.remove();
  }
}

function nextTeam() {
  state.currentTeam = state.currentTeam === "yellow" ? "red" : "yellow";
  state.round = Math.min(state.totalRounds, state.round + 1);
  state.seconds = setup.time;
  state.maxSeconds = setup.time;
  state.running = false;
  clearInterval(state.timerId);
}

function nextCard() {
  state.cardIndex += 1;
  renderCard();
}

function finishTurn(reason) {
  const team = state.currentTeam === "yellow" ? "Niebiescy" : "Różowi";
  logEvent(`${team}: ${reason}`);
  nextCard();
  nextTeam();
  render();
}

function startTimer() {
  if (state.running) {
    state.running = false;
    clearInterval(state.timerId);
    renderTimer();
    return;
  }

  state.running = true;
  state.timerId = setInterval(() => {
    state.seconds -= 1;
    if (state.seconds <= 0) {
      finishTurn("czas minął");
      return;
    }
    renderTimer();
  }, 1000);
  renderTimer();
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    setup.mode = state.mode;
    document.querySelectorAll(".mode-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    logEvent(`Wybrano tryb ${state.mode}.`);
    renderTurn();
  });
});

document.querySelector("#correct").addEventListener("click", () => {
  state.scores[state.currentTeam] += 1;
  const team = state.currentTeam === "yellow" ? "Niebiescy" : "Różowi";
  logEvent(`${team}: poprawna odpowiedź, +1 punkt.`);
  nextCard();
  render();
});

document.querySelector("#skip").addEventListener("click", () => {
  logEvent("Karta pominięta bez punktu.");
  nextCard();
  renderCard();
});

document.querySelector("#foul").addEventListener("click", () => {
  finishTurn("zakazane słowo, koniec tury");
});

document.querySelector("#next-card").addEventListener("click", () => {
  nextCard();
  logEvent("Wylosowano następną kartę.");
});

document.querySelector("#new-round").addEventListener("click", () => {
  finishTurn("ręcznie rozpoczęto kolejną turę");
});

document.querySelector("#reset-game").addEventListener("click", () => {
  resetGame();
  logEvent("Gra zresetowana.");
  render();
});

function resetGame() {
  clearInterval(state.timerId);
  state.mode = setup.mode;
  state.deckKey = setup.deck;
  state.totalRounds = setup.rounds;
  state.currentTeam = "yellow";
  state.scores = { yellow: 0, red: 0 };
  state.round = 1;
  state.cardIndex = 0;
  state.seconds = setup.time;
  state.maxSeconds = setup.time;
  state.running = false;
  state.deck = shuffle([...decks[state.deckKey]]);
  els.eventLog.innerHTML = "";
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

els.startPause.addEventListener("click", startTimer);

document.querySelector("#add-time").addEventListener("click", () => {
  state.seconds += 15;
  state.maxSeconds = Math.max(state.maxSeconds, state.seconds);
  logEvent("Dodano 15 sekund.");
  renderTimer();
});

[els.yellowSpeaker, els.yellowGuesser, els.redSpeaker, els.redGuesser].forEach((input) => {
  input.addEventListener("input", renderTurn);
});

window.addEventListener("resize", fitAllText);

els.titleEnter.addEventListener("click", () => {
  document.body.classList.remove("is-title");
  document.body.classList.add("is-settings");
  fitAllText();
});

document.querySelectorAll(".setup-choice").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest(".setup-button");
    if (!button) return;
    const setting = group.dataset.setting;
    const value = button.dataset.value;

    setup[setting] = setting === "rounds" || setting === "time" ? Number(value) : value;
    group.querySelectorAll(".setup-button").forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
  });
});

document.querySelector("#start-game").addEventListener("click", () => {
  resetGame();
  document.body.classList.remove("is-settings");
  document.body.classList.add("is-playing");
  logEvent(`Start: ${setup.mode}, ${setup.rounds} rund, ${setup.time} sekund.`);
  render();
});

render();
logEvent("Wylosuj kartę i rozpocznij turę.");
