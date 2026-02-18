export interface Artist {
  id: string;
  name: string;
  alias: string;
  roles: string[];
  origin: string;
  bio: string;
  knownFor?: string[];
  associatedActs: string[];
  bookingEmail?: string;
  bookingPhone: string[];
  generalEmail?: string;
  image: string;
  imageCasual?: string;
  mediaKitPages?: string[];
}

export const artists: Artist[] = [
  {
    id: "eeque",
    name: "Leago Sinclair Moganedi",
    alias: "EeQue",
    roles: ["Singer", "Vocalist", "Rapper", "Song-Writer"],
    origin: "Limpopo, Lebowakgomo",
    bio: "EeQue is a vocalist and writer born in Limpopo, Lebowakgomo. Coming from a family that loves music — with memories of his dad playing Phil Collins and a high school playlist dominated by Chris Brown — he recorded his first song in 2012. Starting off in Hip Hop with his biggest collaboration being Kid X, he later transitioned into becoming a versatile artist, bringing his artistry to every genre and giving him a huge edge in the music industry. Beyond music, EeQue has a passion for cooking and acting, positioning him for food-related shows and TV features.",
    associatedActs: [
      "DJ Maphorisa",
      "DBN Gogo",
      "Nkosazana Daughter",
      "Kamo Mphela",
      "Kwesta",
      "Xduppy",
      "AlXapo",
      "Benzoo",
      "Pcee",
      "Royal Musiq",
      "Ch'cco",
      "Focalistic",
      "Anatii",
    ],
    bookingEmail: "eeQuebookings@gmail.com",
    bookingPhone: ["+27 71 544 3654", "+27 67 727 3004"],
    image: "/artists/eeque/photo-main.jpg",
    imageCasual: "/artists/eeque/photo-casual.jpg",
    mediaKitPages: Array.from({ length: 10 }, (_, i) => `/media-kits/eeque/page-${i + 1}.jpg`),
  },
  {
    id: "masterpiece-yvk",
    name: "Thabang Kgotso Kganaka",
    alias: "Masterpiece YVK",
    roles: ["Vocalist", "Performer", "Artist", "Song-Writer"],
    origin: "Delmas · Raised in Tembisa",
    bio: "Masterpiece YVK started making music in 2018 after being convinced by Leehleza to use his skills as an MC in the studio. After being introduced to Kabza De Small, he recorded his first single. An MC since 2012 across formal events, festivals, and private parties, he is well known for his captivating chants and catchy lyrics. Through meeting various artists he expanded his catalog, delivering hits like Superman and the crowd favourite Manzi Nte. A full creative who believes in storytelling rooted in kasi tales, Masterpiece also produces vlogs, behind-the-scenes content, and lifestyle videos.",
    knownFor: ["Superman", "Manzi Nte"],
    associatedActs: [
      "Tyleri Cu",
      "Young Stunna",
      "DJ Stokie",
      "Kabza De Small",
      "DJ Maphorisa",
      "Toss",
      "Mr JazziQ",
      "Kamo Mphela",
      "Ntsika",
      "Kwesta",
      "Diamond Platnumz",
    ],
    bookingEmail: "bookings@yvkrecords.co.za",
    bookingPhone: ["081 460 3827", "073 680 5050"],
    generalEmail: "info@yvkrecords.co.za",
    image: "/artists/masterpiece-yvk/photo-main.jpg",
    imageCasual: "/artists/masterpiece-yvk/photo-fun.jpg",
    mediaKitPages: Array.from({ length: 6 }, (_, i) => `/media-kits/masterpiece-yvk/page-${i + 1}.jpg`),
  },
  {
    id: "chcco",
    name: "Shiko Matlebjane",
    alias: "Ch'cco",
    roles: ["Musical Artist", "Vocalist", "Performer"],
    origin: "Soweto, Gauteng · Raised in Pimville & Mamelodi, Pretoria",
    bio: "Shiko Matlebjane, professionally known as Ch'cco, is a multi-platinum South African artist celebrated for his dynamic presence in the Amapiano music scene. Born in February 2000 in Soweto, his diverse upbringing across Pimville and Mamelodi has profoundly influenced his musical style, blending traditional African rhythms with contemporary Amapiano. His meteoric rise began in 2021 with chart-topping hits and has since expanded internationally, touring Europe and collaborating with renowned artists across Africa.",
    knownFor: ["Nkao Tempela", "Pele Pele", "Banyana Ke Bafana"],
    associatedActs: [
      "Mellow & Sleazy",
      "Focalistic",
      "Pabi Cooper",
      "Teni",
      "Marioo",
    ],
    bookingEmail: "chiccoalot@gmail.com",
    bookingPhone: ["+27 62 155 6038"],
    image: "/artists/chcco/photo-main.jpg",
    mediaKitPages: Array.from({ length: 7 }, (_, i) => `/media-kits/chcco/page-${i + 1}.jpg`),
  },
  {
    id: "al-xapo",
    name: "Al Xapo",
    alias: "Al Xapo",
    roles: ["Producer", "Beatmaker", "Artist", "DJ"],
    origin: "South Africa",
    bio: "Al Xapo is a young, dynamic, and versatile producer, beatmaker, artist, and DJ who has rapidly established himself as one of the most influential forces in modern Amapiano. Starting on the DJ decks at just 15, he evolved into a multifaceted creative powerhouse — fusing soulful textures, dance energy, and smooth melodic palettes into a sound instantly recognisable yet impossible to imitate. Co-producer of global smashes 'Ebasini' (60M+ streams) and 'Manzi Nte', he solidified his reputation further with the critically acclaimed EP 'Secret Bounce' alongside Tyler ICU in 2025. With a rebellious Public Enemy persona and a hood-rich aesthetic, Al Xapo is the industry's villain and one of the most powerful originators shaping the next era of African music.",
    knownFor: ["Ebasini", "Manzi Nte", "Secret Bounce EP"],
    associatedActs: [
      "Tyler ICU",
      "Mellow & Sleazy",
      "Musa Keys",
      "DJ Maphorisa",
      "Masterpiece YVK",
      "Leemckrazy",
      "Tman Xpress",
      "Ceeka RSA",
      "Visca",
      "Sjavas DaDeejay",
    ],
    bookingEmail: "aobstudios@gmail.com",
    bookingPhone: ["074 731 9913"],
    image: "/artists/al-xapo/photo-main.jpg",
    imageCasual: "/artists/al-xapo/photo-casual.jpg",
    mediaKitPages: Array.from({ length: 10 }, (_, i) => `/media-kits/al-xapo/page-${i + 1}.jpg`),
  },
  {
    id: "chley",
    name: "Siphesihle Nkosi",
    alias: "Chley",
    roles: ["Vocalist", "Singer", "Song-Writer", "Performer"],
    origin: "East Rand, South Africa",
    bio: "Siphesihle Nkosi, affectionately known as Chley, is a South African Amapiano prodigy hailing from the East Rand. Known for her versatile vocal abilities, she effortlessly blends melodic raps and soulful singing across various tempos and genres. Her dancing, personality, unique style, and creativity have placed her atop many 'ones-to-watch' lists in the Amapiano genre — a true rising force in South African music.",
    knownFor: ["Komasava (Comment Ça Va)", "Asambe", "Bopha"],
    associatedActs: [
      "Uncle Waffles",
      "Diamond Platnumz",
      "Kelvin Momo",
      "Jason Derulo",
      "Musa Keys",
      "DJ Maphorisa",
    ],
    bookingPhone: ["+27 79 981 1025", "+27 74 235 3508"],
    image: "/artists/chley/photo-main.png",
    imageCasual: "/artists/chley/photo-casual.png",
    mediaKitPages: Array.from({ length: 6 }, (_, i) => `/media-kits/chley/page-${i + 1}.jpg`),
  },
];
