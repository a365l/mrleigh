// Slovak content for the unlisted /sk page (a readable one-page version of
// the site for family in Slovakia). Nothing on the English site links here
// and the page is marked noindex, so edits here cannot affect anything else.
import droneImg from '../assets/droneimg.png';
import ebikeImg from '../assets/ebikeimg.jpg';
import enduroFinalImg from '../assets/enduro-final.jpg';
import firstSparkImg from '../assets/journey-first-spark.jpg';
import firstBuildImg from '../assets/journey-first-build.jpg';
import firstSolderImg from '../assets/journey-first-solder.jpg';
import linuxNetworkingImg from '../assets/journey-linux-networking.jpg';
import realToolsImg from '../assets/journey-real-tools.jpg';
import roboscanPartsImg from '../assets/journey-roboscan-parts.jpg';
import roboscanDeviceImg from '../assets/journey-roboscan-device.jpg';
import roboscanAliveImg from '../assets/journey-roboscan-alive.jpg';
import familyYard1Img from '../assets/journey-family-yard-1.jpg';
import familyYard2Img from '../assets/journey-family-yard-2.jpg';
import pcBuild1Img from '../assets/journey-pc-build-1.jpg';
import pcBuild2Img from '../assets/journey-pc-build-2.jpg';
import repair1Img from '../assets/journey-repair-1.jpg';
import repair2Img from '../assets/journey-repair-2.jpg';
import repair3Img from '../assets/journey-hardware-repair-3.jpg';
import cryptoBotImg from '../assets/journey-crypto-bot.jpg';
import webAppImg from '../assets/journey-webapp.jpg';
import diyAssembly1Img from '../assets/journey-diy-assembly-1.jpg';
import diyAssembly2Img from '../assets/journey-diy-assembly-2.jpg';

export const skMeta = {
  title: 'Alfred Leigh, budúci letecký a kozmický inžinier',
  email: 'alfie@alfred-leigh.co.uk',
};

export const skHero = {
  greeting: 'Ahoj, som Alfred',
  role: 'Budúci letecký a kozmický inžinier',
  meta: '12. ročník: matematika, vyššia matematika, fyzika a informatika · 9 skúšok GCSE, z toho štyri so známkou 8',
  intro:
    'Navrhujem a staviam skutočné stroje od základných princípov. Práve teraz je to kvadrokoptéra navrhnutá úplne od nuly a elektrická enduro motorka na 72 V. Najviac ma baví riešiť ťažké problémy čistými a spoľahlivými systémami, ktoré fungujú aj v skutočnom svete.',
  cvLabel: 'Stiahnuť životopis (v angličtine)',
};

export interface SkPhoto {
  src: string;
  caption: string;
}

export interface SkMilestone {
  age: string;
  title: string;
  text: string;
  photos?: SkPhoto[];
}

export const skJourney = {
  heading: 'Moja cesta',
  intro:
    'Inžinierstvo pre mňa nikdy nebolo len predmetom v škole. Je to záľuba, ktorú som nikdy neodložil. Takto to rástlo, od malého chlapca, ktorý rozoberal elektronickú stavebnicu, až po dnešné projekty.',
  sideHeading: 'Menšie projekty popri tom',
};

export const skMilestones: SkMilestone[] = [
  {
    age: '5 rokov',
    title: 'Prvá iskra',
    text: 'Na zemi som rozoberal elektronickú stavebnicu, roky predtým, než som tušil, čo ktorá súčiastka znamená. Keď sa obzriem späť, tu sa to naozaj začalo.',
    photos: [
      { src: firstSparkImg, caption: 'Najstarší dôkaz, aký som našiel: elektronická stavebnica, celá zapojená.' },
    ],
  },
  {
    age: '6 rokov',
    title: 'Prvá stavba',
    text: 'S ockom a bratom som postavil svoj prvý počítač. Bola to moja prvá skutočná inžinierska práca vlastnými rukami.',
    photos: [{ src: firstBuildImg, caption: 'Ten prvý počítač, s ockom a bratom.' }],
  },
  {
    age: '7 rokov',
    title: 'Učenie remesla',
    text: 'Pomáhal som na ockovom dvore, odkiaľ vyváža stroje. Rozoberal som stavebné stroje a obsluhoval priemyselné zariadenia, roky predtým, než som vôbec mohol šoférovať.',
    photos: [
      { src: familyYard1Img, caption: 'Práca na motore bagra na dvore.' },
      { src: familyYard2Img, caption: 'S vysokotlakovým čističom na dvore.' },
    ],
  },
  {
    age: '11 rokov',
    title: 'Prvý kód',
    text: 'Dokončil som kurz programovania v jazyku C++ na Codecademy a získal svoj prvý certifikát. Čoskoro nasledoval Python, HTML/CSS a základy Kotlinu.',
  },
  {
    age: '13 rokov',
    title: 'Prvé spájkovanie',
    text: 'Začal som spájkovať lacnou neznačkovou spájkovačkou a základy som sa učil sám, jeden popálený prst za druhým.',
    photos: [
      { src: firstSolderImg, caption: 'Lacná spájkovačka, zväčšovacie okuliare a pochybná technika.' },
    ],
  },
  {
    age: '13 rokov',
    title: 'Linux a počítačové siete',
    text: 'Sám som sa naučil základy Linuxu a kybernetickej bezpečnosti, so zameraním na počítačové siete.',
    photos: [
      {
        src: linuxNetworkingImg,
        caption: 'Prechádzam sadu nástrojov na preverovanie bezdrôtových sietí a postupne odškrtávam, čo treba doinštalovať.',
      },
    ],
  },
  {
    age: '14 rokov',
    title: 'Poriadne náradie',
    text: 'Prešiel som na spájkovaciu stanicu Weller WE a osvojil si mikrospájkovanie a prácu s mikrokontrolérmi ako ESP32 a Pi Pico.',
    photos: [{ src: realToolsImg, caption: 'Mikrospájkovanie základnej dosky notebooku pod lupou.' }],
  },
  {
    age: '14 až 15 rokov',
    title: 'Roboscan',
    text: 'Môj prvý poriadny projekt: viacúčelové zariadenie pre rádiové signály, NFC a infračervené ovládanie. Naučil som sa na ňom, ako sa v praxi zabezpečujú siete a signály.',
    photos: [
      { src: roboscanPartsImg, caption: 'Všetky súčiastky pokope: Pi Pico, kontaktné pole, LCD displej a prepojovacie káble.' },
      { src: roboscanDeviceImg, caption: 'Ožilo to na kontaktnom poli: na displeji beží úvodné menu.' },
      { src: roboscanAliveImg, caption: 'Funguje a zobrazuje úvodné menu.' },
    ],
  },
  {
    age: '16 rokov',
    title: 'Výsledky skúšok GCSE',
    text: 'Deväť skúšok GCSE, z toho osem so známkou 7 alebo vyššou, vrátane osmičiek z matematiky, fyziky, chémie a informatiky. Stačilo to na to, aby som mohol ďalej študovať matematiku, vyššiu matematiku, fyziku a informatiku.',
  },
  {
    age: 'Dnes',
    title: 'Inžinierstvo od základných princípov',
    text: 'Teraz navrhujem a staviam modulárnu kvadrokoptéru a elektrickú enduro motorku na 72 V. Popri tom sa sám učím postupy profesionálnych inžinierov: špecifikácie výrobku, porovnávacie štúdie a záznamy o poruchách.',
  },
];

export interface SkSideProject {
  title: string;
  text: string;
  photos: SkPhoto[];
}

export const skSideProjects: SkSideProject[] = [
  {
    title: 'Stavba počítačov',
    text: 'Staviam si vlastné počítače s vodným chladením, od holej skrinky až po plne podsvietené zostavy.',
    photos: [
      { src: pcBuild1Img, caption: 'Uprostred stavby: chladič, ventilátory a uloženie káblov.' },
      { src: pcBuild2Img, caption: 'Hotový podsvietený počítač na stole.' },
    ],
  },
  {
    title: 'Opravy hardvéru',
    text: 'Hľadám poruchy a opravujem notebooky až na úroveň základnej dosky.',
    photos: [
      { src: repair1Img, caption: 'Základná doska notebooku vybratá na kontrolu.' },
      { src: repair2Img, caption: 'Notebook rozobratý až na kostru.' },
      { src: repair3Img, caption: 'Uprostred opravy, so zväčšovacími okuliarmi.' },
    ],
  },
  {
    title: 'Automatizácia a boty',
    text: 'Píšem programy v Pythone na automatizáciu a algoritmické obchodovanie. Jeden z nich bežal naživo so skutočnými trhovými dátami.',
    photos: [{ src: cryptoBotImg, caption: 'Obchodovací program vo vývoji.' }],
  },
  {
    title: 'Webové stránky a aplikácie',
    text: 'Vytvoril som malé webové aplikácie a stránky, len aby som zistil, či to dokážem.',
    photos: [{ src: webAppImg, caption: 'Malá aplikácia na sledovanie cieľov, ktorú som si urobil.' }],
  },
  {
    title: 'Skladanie nábytku a zariadení',
    text: 'Skladanie nábytku a zariadení z krabice, len ako cvičenie v tom, ako si prečítať návod a urobiť to správne.',
    photos: [
      { src: diyAssembly1Img, caption: 'Skladanie poschodovej postele.' },
      { src: diyAssembly2Img, caption: 'Skladanie vonkajšej posilňovacej zostavy.' },
    ],
  },
];

export interface SkProject {
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  summary: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  phasesHeading: string;
  phases: { title: string; text: string }[];
  problems?: { problem: string; solution: string }[];
  outcomeImage?: string;
  outcomeText?: string;
  githubUrl: string;
}

export const skProjectsHeading = 'Projekty';

export const skProjects: SkProject[] = [
  {
    title: 'Modulárna kvadrokoptéra',
    tagline: 'Návrh a stavba od základných princípov',
    image: droneImg,
    imageAlt: 'Návrh kvadrokoptéry',
    summary:
      'Rozpracovaný inžiniersky projekt: navrhujem kvadrokoptéru (dron so štyrmi vrtuľami) z fyzikálnych rovníc a porovnávacích štúdií. Smerujem k výrobe z hliníka na CNC stroji a z uhlíkových vlákien a k overeniu letovými skúškami. Všetko dokumentujem od začiatku do konca: od špecifikácie cez výpočty a výrobu až po letové skúšky.',
    stats: [
      { label: 'Stav', value: 'Fáza výpočtov, letové skúšky na jeseň 2026' },
      { label: 'Metóda návrhu', value: 'Od základných princípov' },
      { label: 'Plánovaná výroba', value: 'CNC hliník a uhlíkové vlákna' },
      { label: 'Odbor', value: 'Letectvo a strojárstvo' },
    ],
    highlights: [
      'Ešte predtým, než som začal kresliť v CAD programe, som napísal úplnú špecifikáciu výrobku s 15 merateľnými požiadavkami (stabilita vo visení, pomer ťahu k hmotnosti, celková hmotnosť, rezerva voči rezonancii ramien).',
      'Pripravil som sadu výpočtov od základných princípov: hybnostná teória pohonu, rezonancia ramien, predpätie skrutiek, ťažisko a zotrvačnosť, ohyb sendvičových panelov. Každý z nich počas stavby overím meraním.',
      'Robím prvé porovnávacie štúdie (kedy zadať CNC výrobu, orientácia vrtúľ, priemer rámu oproti veľkosti vrtúľ, materiál svoriek), aby som znížil riziko skôr, než miniem rozpočet.',
      'Stretol som sa s výskumníkmi z Imperial College London, aby preverili, či je projekt uskutočniteľný, skôr než ho rozšírim.',
    ],
    phasesHeading: 'Fázy projektu',
    phases: [
      {
        title: 'Koncept a požiadavky',
        text: 'Hotovo. Špecifikácia s 15 merateľnými požiadavkami je napísaná, uskutočniteľnosť som prebral s výskumníkmi z Imperial College London a stanovil som rozpočet (približne 700 libier) a časový plán na 10 týždňov.',
      },
      {
        title: 'Výpočty a návrh',
        text: 'Prebieha. Začínam dimenzovaním pohonu podľa hybnostnej teórie a štúdiou, ktorá spolu rieši priemer rámu a veľkosť vrtúľ (rozhodnutie č. 1).',
      },
      {
        title: 'Výroba',
        text: 'Zatiaľ nezačatá. CNC obrábanie a laminovanie kompozitov sú naplánované na neskoršiu časť stavby.',
      },
      { title: 'Montáž a skúšky na stole', text: 'Zatiaľ nezačaté.' },
      { title: 'Letové skúšky a úpravy', text: 'Zatiaľ nezačaté.' },
    ],
    githubUrl: 'https://github.com/a365l/quadcopter-project',
  },
  {
    title: 'Elektrická enduro motorka',
    tagline: 'Stavba vlastnými rukami od nuly',
    image: ebikeImg,
    imageAlt: 'Elektrická enduro motorka počas stavby',
    summary:
      'Kompletná stavba elektrickej enduro motorky na 72 V od nuly: batéria na mieru, motor QS205 v náboji kolesa, riadiaca jednotka Fardriver ND72450, ručne krimpované vysokonapäťové káble a tri fázy vylepšovania, od prvého funkčného pokusu až po výkonný pohon.',
    stats: [
      { label: 'Napätie systému', value: '72 V' },
      { label: 'Motor', value: 'QS Motor QS205 v náboji kolesa' },
      { label: 'Riadiaca jednotka', value: 'Fardriver ND72450' },
      { label: 'Fázy stavby', value: '3' },
    ],
    highlights: [
      'Navrhol a poskladal som vlastnú 72 V batériu od jednotlivých článkov.',
      'Spojil som motor QS205 s riadiacou jednotkou Fardriver ND72450, aby mala motorka ťah potrebný do terénu.',
      'Všetky vysokonapäťové káble som ručne nakrimpoval a zaizoloval na profesionálnej bezpečnostnej úrovni.',
      'Prešiel som tromi fázami stavby, od prvého funkčného pokusu až po vyladený výkonný pohon.',
    ],
    phasesHeading: 'Fázy stavby',
    phases: [
      {
        title: 'Fáza 0: overenie, že to pôjde',
        text: 'Máj až august 2025. Zohnal som lacný motor do náboja kolesa, obyčajnú 80 A riadiacu jednotku a batériu NBPower 72 V 30 Ah 100 A na mieru. Rám som staval od holého kovu, zavesený na popruhoch zo stropu, každý spoj som ručne spájkoval a motorku som rozbehol na prvú jazdu.',
      },
      {
        title: 'Fáza 1: darcovské bicykle a opravy',
        text: 'September až december 2025. Kúpil som dva havarované elektrobicykle, aby som ich rozobral na diely a predal, a k tomu pokazený motor a batériu na opravu a ďalší predaj, aby som z toho zaplatil ďalšie vylepšenie. Zohnal som aj použitú riadiacu jednotku Sabvaton, ktorá však prišla nefunkčná.',
      },
      {
        title: 'Fáza 2: prechod na QS205 a Fardriver',
        text: 'Jún 2026. Lacný motor a riadiacu jednotku som vymenil za motor QS Motor QS205 a jednotku Fardriver ND72450 (200 A trvalo, 450 A v špičke). Všetky spoje som zmenil zo spájkovaných na krimpované, nastavil som plyn na novú jednotku a dokončil jej automatickú kalibráciu s motorom.',
      },
    ],
    problems: [
      {
        problem:
          'Obyčajná 80 A riadiaca jednotka z fázy 0 celú prvú stavbu brzdila batériu NBPower, ktorá zvládne 100 A. Batéria nikdy nebola slabým miestom.',
        solution:
          'Zistil som, že úzkym hrdlom je riadiaca jednotka, a vo fáze 2 som ju vymenil za Fardriver ND72450 (200 A trvalo, 450 A v špičke). Batéria tak konečne môže ukázať, čo vie.',
      },
      {
        problem:
          'Použitá riadiaca jednotka Sabvaton prišla so skratom priamo na svorkách batérie. Mala skratované výkonové tranzistory a k motorke som ju ani nepripojil.',
        solution:
          'Chybu som odhalil multimetrom ešte pred prvým zapnutím. Pokúsil som sa tranzistory opraviť, a keď oprava nevydržala, odpísal som ju a rovno zohnal Fardriver.',
      },
      {
        problem:
          'Vodiče palcového plynu zo Surronu nesedeli so vstupom pre plyn na jednotke Fardriver.',
        solution:
          'Každý vodič som si ručne zmapoval, skôr než som čokoľvek krimpoval, a potom som vyrobil malý prepojovací kábel, ktorý ich spája.',
      },
    ],
    outcomeImage: enduroFinalImg,
    outcomeText:
      'Hotová motorka: batéria na mieru, motor v náboji kolesa a riadiaca jednotka sú plne prepojené. Je vyskúšaná na stojane a podľa mojich výpočtov od základných princípov by mala dosiahnuť približne 55 míľ za hodinu (asi 89 km/h) a zrýchliť z 0 na 30 míľ za hodinu (asi 48 km/h) približne za 3,6 sekundy. Je pripravená na prvú jazdu v teréne s meracími prístrojmi.',
    githubUrl: 'https://github.com/a365l/enduro-emotorcycle-build',
  },
];

export interface SkResult {
  subject: string;
  grade: number;
  note?: string;
}

export const skEducation = {
  heading: 'Vzdelanie',
  intro:
    'Skúšky GCSE som robil v júni 2026 na škole Debden Park High School. Osmičky mám z matematiky, fyziky, chémie a informatiky, teda zo štyroch predmetov, na ktorých stojí celá táto stránka.',
  // Not on the English page: Slovak school marks run the other way (1 is best),
  // so without this line an 8 reads as a bad grade.
  gradeNote:
    'Pozor, v Anglicku je to naopak ako na Slovensku: skúšky GCSE sa známkujú od 1 do 9 a najlepšia známka je 9.',
  stemHeading: 'Prírodné vedy a technika',
  otherHeading: 'Humanitné a ostatné predmety',
  nowHeading: 'Teraz: A-levels, 12. ročník (2026 až 2028)',
  nowText:
    'Matematika, vyššia matematika, fyzika a informatika. Vybral som si ich tak, aby sedeli k štúdiu leteckého a kozmického inžinierstva na univerzite a aby som ich hneď využil pri stavbách na tejto stránke. A-levels sú posledné dva roky školy pred univerzitou.',
  tutoring:
    'Popri škole ponúkam aj doučovanie matematiky, fyziky a informatiky pre žiakov, ktorí sa pripravujú na skúšky GCSE.',
  footnote: 'Známky podľa môjho výpisu výsledkov z 20. augusta 2026.',
};

export const skStemResults: SkResult[] = [
  { subject: 'Matematika', grade: 8 },
  { subject: 'Fyzika', grade: 8 },
  { subject: 'Chémia', grade: 8 },
  { subject: 'Informatika', grade: 8 },
  { subject: 'Biológia', grade: 7 },
];

export const skOtherResults: SkResult[] = [
  { subject: 'Geografia', grade: 7 },
  { subject: 'Anglická literatúra', grade: 7 },
  { subject: 'Anglický jazyk', grade: 7, note: 'ústny prejav: Merit (s pochvalou)' },
  { subject: 'Telesná výchova', grade: 6 },
];

export const skSkillsHeading = 'Čo viem';

export const skSkills: { title: string; items: { name: string; text: string }[] }[] = [
  {
    title: 'Softvér a systémy',
    items: [
      { name: 'Python', text: 'skripty, automatizácia, inžinierske výpočty, rýchle prototypy' },
      { name: 'C/C++', text: 'programy pre mikrokontroléry ESP32 a Pi Pico' },
      { name: 'JavaScript', text: 'táto stránka (React, TypeScript, Vite)' },
      { name: 'Linux', text: 'vývojové prostredia, siete, hľadanie chýb v systéme' },
    ],
  },
  {
    title: 'Hardvér a elektronika',
    items: [
      { name: 'Elektronika', text: 'Roboscan: zapojenie, hľadanie porúch a spájanie častí do celku' },
      { name: 'Napájacie systémy', text: '72 V batéria, jej ochranná elektronika a bezpečnosť pri vysokých prúdoch na motorke' },
      { name: 'Mikrokontroléry', text: 'ESP32 a Pi Pico: programy, vstupy a výstupy, obmedzenia skutočného sveta' },
      { name: 'Diagnostika', text: 'najprv multimeter: skratovanú riadiacu jednotku som odhalil ešte pred zapnutím' },
    ],
  },
  {
    title: 'Systémy a inžinierstvo',
    items: [
      { name: 'Návrh systémov', text: 'špecifikácia s 15 merateľnými požiadavkami, napísaná ešte pred kreslením' },
      { name: 'Hľadanie chýb', text: 'v hardvéri aj v softvéri' },
      { name: 'Spoľahlivosť', text: 'vibrácie, počasie a dlhodobé používanie na skutočných vozidlách' },
      { name: 'Testovanie', text: 'každú predpoveď overím meraním a zapíšem rozdiel' },
    ],
  },
];

export const skContact = {
  heading: 'Kontakt',
  text: 'Vždy rád počujem o nových projektoch a príležitostiach. Či už máte otázku, alebo ma chcete len pozdraviť, pokojne mi napíšte!',
  github: 'Moje projekty na GitHube',
  linkedin: 'Môj profil na LinkedIn',
  english: 'Pôvodná stránka v angličtine',
};
