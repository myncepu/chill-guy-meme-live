import { filters } from "fabric"

export const recommendedFonts = [
  "Impact",
  "Comic Sans MS",
  "Alfa Slab One",
  "Anton",
  "Bangers",
  "Bebas Neue",
  "Black Ops One",
  "Chewy",
  "Creepster",
  "Fredoka One",
  "Gloria Hallelujah",
  "Lobster",
  "Luckiest Guy",
  "Oswald",
  "Press Start 2P",
  "Rubik",
  "Shrikhand",
  "Staatliches",
]

export const otherFonts = [
  "Arial",
  "Helvetica",
  "Times New Roman",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Georgia",
  "Courier New",
  "Lucida Sans",
  "Palatino Linotype",
  "Garamond",
  "Bookman",
  "Candara",
  "Comic Neue",
  "Montserrat",
  "ABeeZee",
  "Abel",
  "Abril Fatface",
  "Acme",
  "Alata",
  "Albert Sans",
  "Alegreya",
  "Alice",
  "Almarai",
  "Amatic SC",
  "Amiri",
  "Antic Slab",
  "Architects Daughter",
  "Archivo",
  "Arimo",
  "Arsenal",
  "Arvo",
  "Asap",
  "Asap Condensed",
  "Assistant",
  "Barlow",
  "Be Vietnam Pro",
  "Bitter",
  "Bodoni Moda",
  "Bree Serif",
  "Bungee",
  "Cabin",
  "Cairo",
  "Cantarell",
  "Cardo",
  "Catamaran",
  "Caveat",
  "Chakra Petch",
  "Changa",
  "Chivo",
  "Cinzel",
  "Comfortaa",
  "Commissioner",
  "Concert One",
  "Cookie",
  "Cormorant",
  "Courgette",
  "Crete Round",
  "Crimson Pro",
  "Cuprum",
  "DM Sans",
  "Dancing Script",
  "Didact Gothic",
  "Domine",
  "Dosis",
  "EB Garamond",
  "Eczar",
  "El Messiri",
  "Electrolize",
  "Encode Sans",
  "Exo",
  "Figtree",
  "Fira Sans",
  "Fjalla One",
  "Francois One",
  "Frank Ruhl Libre",
  "Fraunces",
  "Gelasio",
  "Gothic A1",
  "Great Vibes",
  "Gruppo",
  "Heebo",
  "Hind",
  "IBM Plex Sans",
  "Inconsolata",
  "Indie Flower",
  "Inter",
  "Josefin Sans",
  "Jost",
  "Kalam",
  "Kanit",
  "Karla",
  "Kaushan Script",
  "Khand",
  "Lato",
  "League Spartan",
  "Lexend",
  "Libre Baskerville",
  "Lilita One",
  "Lora",
  "M PLUS 1p",
  "M PLUS Rounded 1c",
  "Macondo",
  "Manrope",
  "Marcellus",
  "Martel",
  "Mate",
  "Maven Pro",
  "Merienda",
  "Merriweather",
  "Mukta",
  "Mulish",
  "Nanum Gothic",
  "Nanum Gothic Coding",
  "Nanum Myeongjo",
  "Neuton",
  "Noticia Text",
  "Noto Sans",
  "Old Standard TT",
  "Oleo Script",
  "Open Sans",
  "Orbitron",
  "Outfit",
  "Overpass",
  "Oxygen",
  "PT Sans",
  "Pacifico",
  "Passion One",
  "Pathway Gothic One",
  "Patua One",
  "Paytone One",
  "Permanent Marker",
  "Philosopher",
  "Play",
  "Playfair Display",
  "Plus Jakarta Sans",
  "Poppins",
  "Prata",
  "Prompt",
  "Public Sans",
  "Quattrocento",
  "Quattrocento Sans",
  "Questrial",
  "Quicksand",
  "Rajdhani",
  "Raleway",
  "Readex Pro",
  "Red Hat Display",
  "Righteous",
  "Roboto",
  "Rokkitt",
  "Rowdies",
  "Russo One",
  "Sacramento",
  "Saira",
  "Saira Condensed",
  "Sarabun",
  "Satisfy",
  "Sawarabi Gothic",
  "Sawarabi Mincho",
  "Sen",
  "Shadows Into Light",
  "Signika",
  "Signika Negative",
  "Silkscreen",
  "Six Caps",
  "Slabo 27px",
  "Sora",
  "Source Sans 3",
  "Space Grotesk",
  "Space Mono",
  "Special Elite",
  "Spectral",
  "Tajawal",
  "Tangerine",
  "Teko",
  "Tinos",
  "Titan One",
  "Titillium Web",
  "Ubuntu",
  "Unbounded",
  "Unna",
  "Urbanist",
  "Varela Round",
  "Vollkorn",
  "Work Sans",
  "Yanone Kaffeesatz",
  "Yantramanav",
  "Yellowtail",
  "Yeseva One",
  "Zen Kaku Gothic New",
  "Zeyada",
  "Zilla Slab",
]

export const filterNames = [
  null,
  "greyscale",
  "polaroid",
  "sepia",
  "kodachrome",
  "contrast",
  "brightness",
  "brownie",
  "vintage",
  "technicolor",
  "pixelate",
  "invert",
  "blur",
  "convolute",
  "removecolor",
  "blacknwhite",
  "vibrance",
  "blendcolor",
  "huerotate",
  "resize",
  "gamma",
  "saturation",
]

export function getFilter(name: string | null) {
  const {
    Grayscale,
    Polaroid,
    Sepia,
    Kodachrome,
    Contrast,
    Brightness,
    Brownie,
    Vintage,
    Technicolor,
    Pixelate,
    Invert,
    Blur,
    Convolute,
    RemoveColor,
    BlackWhite,
    Vibrance,
    BlendColor,
    HueRotation,
    Resize,
    Gamma,
    Saturation,
  } = filters

  switch (name) {
    case "greyscale":
      return new Grayscale()
    case "polaroid":
      return new Polaroid()
    case "sepia":
      return new Sepia()
    case "kodachrome":
      return new Kodachrome()
    case "contrast":
      return new Contrast({ contrast: 0.3 })
    case "brightness":
      return new Brightness({ brightness: 0.8 })
    case "brownie":
      return new Brownie()
    case "vintage":
      return new Vintage()
    case "technicolor":
      return new Technicolor()
    case "pixelate":
      return new Pixelate()
    case "invert":
      return new Invert()
    case "blur":
      return new Blur()
    case "sharpen":
      return new Convolute({
        matrix: [0, -1, 0, -1, 5, -1, 0, -1, 0],
      })
    case "emboss":
      return new Convolute({
        matrix: [1, 1, 1, 1, 0.7, -1, -1, -1, -1],
      })
    case "removecolor":
      return new RemoveColor({
        threshold: 0.2,
        distance: 0.5,
      })
    case "blacknwhite":
      return new BlackWhite()
    case "vibrance":
      return new Vibrance({ vibrance: 1 })
    case "blendcolor":
      return new BlendColor({
        color: "#00ff00",
        mode: "multiply",
      })
    case "huerotate":
      return new HueRotation({ rotation: 0.5 })
    case "resize":
      return new Resize()
    case "gamma":
      return new Gamma({ gamma: [1, 0.5, 2.1] })
    case "saturation":
      return new Saturation({ saturation: 0.7 })
    default:
      return null
  }
}
