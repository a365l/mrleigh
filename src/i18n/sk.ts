// Slovak copy for the unlisted /sk version of the site. The components keep
// their English text inline and only read from here when the Slovak pages
// provide this object through LangContext (see ./lang.ts), so this file is
// only ever downloaded by visitors to /sk.
//
// It is a hand translation: when the English copy changes, change it here too.

export const sk = {
  meta: {
    title: 'Alfred Leigh, budúci letecký a kozmický inžinier',
  },

  layout: {
    skip: 'Preskočiť na hlavný obsah',
    logo: 'Portfólio',
    openMenu: 'Otvoriť menu',
    closeMenu: 'Zavrieť menu',
    nav: {
      journey: 'Cesta',
      projects: 'Projekty',
      skills: 'Zručnosti',
      education: 'Vzdelanie',
      contact: 'Kontakt',
      tutoring: 'Doučovanie',
    },
    sections: [
      { id: 'hero', name: 'Domov' },
      { id: 'journey', name: 'Cesta' },
      { id: 'projects', name: 'Projekty' },
      { id: 'skills', name: 'Zručnosti' },
      { id: 'education', name: 'Vzdelanie' },
      { id: 'contact', name: 'Kontakt' },
    ],
    rights: 'Všetky práva vyhradené.',
    english: 'English version',
    loading: 'Načítava sa...',
  },

  hero: {
    title: 'Ahoj, som Alfred',
    subtitle: 'Budúci letecký a kozmický inžinier',
    meta: '12. ročník: matematika, vyššia matematika, fyzika a informatika · 9 skúšok GCSE, z toho štyri so známkou 8',
    description:
      'Navrhujem a staviam skutočné stroje od základných princípov. Práve teraz je to kvadrokoptéra navrhnutá úplne od nuly a elektrická enduro motorka na 72 V. Najviac ma baví riešiť ťažké problémy čistými a spoľahlivými systémami, ktoré fungujú aj v skutočnom svete.',
    cv: 'Stiahnuť životopis (v angličtine)',
  },

  journey: {
    heading: 'Moja cesta',
    intro:
      'Inžinierstvo pre mňa nikdy nebolo len predmetom v škole. Je to záľuba, ktorú som nikdy neodložil. Takto to rástlo, od malého chlapca, ktorý rozoberal elektronickú stavebnicu, až po projekty, ktoré sú dnes na tejto stránke.',
    showEvidence: 'Ukázať fotky',
    hideEvidence: 'Skryť fotky',
    showMore: (count: number) => `Ešte pár menších projektov (${count})`,
    hideMore: 'Skryť menšie projekty',
    milestones: {
      'first-spark': {
        age: '5 rokov',
        title: 'Prvá iskra',
        description:
          'Na zemi som rozoberal elektronickú stavebnicu, roky predtým, než som tušil, čo ktorá súčiastka znamená. Keď sa obzriem späť, tu sa to naozaj začalo.',
        captions: ['Najstarší dôkaz, aký som našiel: elektronická stavebnica, celá zapojená.'],
      },
      'first-build': {
        age: '6 rokov',
        title: 'Prvá stavba',
        description:
          'S ockom a bratom som postavil svoj prvý počítač. Bola to moja prvá skutočná inžinierska práca vlastnými rukami.',
        captions: ['Ten prvý počítač, s ockom a bratom.'],
      },
      'family-business': {
        age: '7 rokov',
        title: 'Učenie remesla',
        description:
          'Pomáhal som na ockovom dvore, odkiaľ vyváža stroje. Rozoberal som stavebné stroje a obsluhoval priemyselné zariadenia, roky predtým, než som vôbec mohol šoférovať.',
        captions: ['Práca na motore bagra na dvore.', 'S vysokotlakovým čističom na dvore.'],
      },
      'first-code': {
        age: '11 rokov',
        title: 'Prvý kód',
        description:
          'Dokončil som kurz programovania v jazyku C++ na Codecademy a získal svoj prvý certifikát. Čoskoro nasledoval Python, HTML/CSS a základy Kotlinu.',
        captions: [],
      },
      'first-solder': {
        age: '13 rokov',
        title: 'Prvé spájkovanie',
        description:
          'Začal som spájkovať lacnou neznačkovou spájkovačkou a základy som sa učil sám, jeden popálený prst za druhým.',
        captions: ['Lacná spájkovačka, zväčšovacie okuliare a pochybná technika.'],
      },
      'linux-networking': {
        age: '13 rokov',
        title: 'Linux a počítačové siete',
        description:
          'Sám som sa naučil základy Linuxu a kybernetickej bezpečnosti, so zameraním na počítačové siete.',
        captions: [
          'Prechádzam sadu nástrojov na preverovanie bezdrôtových sietí a postupne odškrtávam, čo treba doinštalovať.',
        ],
      },
      'real-tools': {
        age: '14 rokov',
        title: 'Poriadne náradie',
        description:
          'Prešiel som na spájkovaciu stanicu Weller WE a osvojil si mikrospájkovanie a prácu s mikrokontrolérmi ako ESP32 a Pi Pico.',
        captions: ['Mikrospájkovanie základnej dosky notebooku pod lupou.'],
      },
      roboscan: {
        age: '14 až 15 rokov',
        title: 'Roboscan',
        description:
          'Môj prvý poriadny projekt: viacúčelové zariadenie pre rádiové signály, NFC a infračervené ovládanie. Naučil som sa na ňom, ako sa v praxi zabezpečujú siete a signály.',
        captions: [
          'Všetky súčiastky pokope: Pi Pico, kontaktné pole, LCD displej a prepojovacie káble.',
          'Ožilo to na kontaktnom poli: na displeji beží úvodné menu.',
          'Funguje a zobrazuje úvodné menu. Rodinná fotka na stole je rozmazaná z dôvodu súkromia.',
        ],
      },
      'gcse-results': {
        age: '16 rokov',
        title: 'Výsledky skúšok GCSE',
        description:
          'Deväť skúšok GCSE, z toho osem so známkou 7 alebo vyššou, vrátane osmičiek z matematiky, fyziky, chémie a informatiky. Stačilo to na to, aby som mohol ďalej študovať matematiku, vyššiu matematiku, fyziku a informatiku.',
        captions: [],
      },
      'first-principles': {
        age: 'Dnes',
        title: 'Inžinierstvo od základných princípov',
        description:
          'Teraz navrhujem a staviam modulárnu kvadrokoptéru a elektrickú enduro motorku na 72 V. Popri tom sa sám učím postupy profesionálnych inžinierov: špecifikácie výrobku, porovnávacie štúdie a záznamy o poruchách.',
        captions: [],
      },
    } as Record<string, { age: string; title: string; description: string; captions: string[] }>,
    sideProjects: {
      'pc-building': {
        title: 'Stavba počítačov',
        description:
          'Vyhľadávam a opravujem chybné súčiastky v počítačoch a inovujem ich novým vnútrom - stavám a chladím vodou kompletné zostavy, od holej skrinky až po hotové RGB zostavy.',
        captions: ['Uprostred stavby: chladič, ventilátory a uloženie káblov.', 'Hotový podsvietený počítač na stole.'],
      },
      'hardware-repair': {
        title: 'Opravy hardvéru',
        description: 'Hľadám poruchy a opravujem notebooky až na úroveň základnej dosky.',
        captions: [
          'Základná doska notebooku vybratá na kontrolu.',
          'Notebook rozobratý až na kostru.',
          'Uprostred opravy, so zväčšovacími okuliarmi.',
        ],
      },
      'automation-bots': {
        title: 'Automatizácia a boty',
        description:
          'Píšem programy v Pythone na automatizáciu a algoritmické obchodovanie. Jeden z nich bežal naživo so skutočnými trhovými dátami.',
        captions: ['Obchodovací program vo vývoji.'],
      },
      'web-apps': {
        title: 'Webové stránky a aplikácie',
        description: 'Vytvoril som malé webové aplikácie a stránky, len aby som zistil, či to dokážem.',
        captions: ['Malá aplikácia na sledovanie cieľov, ktorú som si urobil.'],
      },
      'diy-assembly': {
        title: 'Skladanie nábytku a zariadení',
        description:
          'Skladanie nábytku a zariadení z krabice, len ako cvičenie v tom, ako si prečítať návod a urobiť to správne.',
        captions: ['Skladanie poschodovej postele.', 'Skladanie vonkajšej posilňovacej zostavy.'],
      },
    } as Record<string, { title: string; description: string; captions: string[] }>,
  },

  projects: {
    heading: 'Vybrané projekty',
    viewCaseStudy: 'Zobraziť celý projekt',
    items: {
      quadcopter: {
        title: 'Modulárna kvadrokoptéra: návrh a stavba od základných princípov',
        subtitle:
          'Rozpracovaný inžiniersky projekt: fyzikálne rovnice a porovnávacie štúdie vedú stavbu, ktorá smeruje k výrobe z hliníka na CNC stroji a z uhlíkových vlákien a k overeniu letovými skúškami. Všetko dokumentujem od začiatku do konca, od špecifikácie a porovnávacích štúdií cez výpočty a záznamy o poruchách až po namerané dáta.',
        techStack: ['Analýza konštrukcie', 'Návrh pohonu', 'Výroba kompozitov', 'Systémové inžinierstvo', 'Vstavaný softvér'],
      },
      'enduro-motorcycle': {
        title: 'Elektrická enduro motorka: stavba vlastnými rukami',
        subtitle:
          'Kompletná stavba elektrickej enduro motorky na 72 V od nuly: batéria na mieru, motor QS205 v náboji kolesa, riadiaca jednotka Fardriver ND72450, ručne krimpované vysokonapäťové káble a tri fázy vylepšovania, od prvého funkčného pokusu až po výkonný pohon.',
        techStack: [
          'Vysokonapäťová elektronika',
          'Riadenie BLDC motora',
          'Fardriver ND72450',
          'QS Motor QS205',
          'Vysokonapäťové káble a krimpovanie',
          'Batériové systémy',
        ],
      },
    } as Record<string, { title: string; subtitle: string; techStack: string[] }>,
  },

  skills: {
    heading: 'Zručnosti a skúsenosti',
    // Same order as skillCategories in Skills.tsx.
    categories: [
      {
        title: 'Softvér a systémy',
        skills: [
          { name: 'Python', description: 'Skripty, automatizácia, inžinierske výpočty, rýchle prototypy' },
          { name: 'C/C++', description: 'Programy pre mikrokontroléry ESP32 a Pi Pico' },
          { name: 'JavaScript', description: 'Táto stránka: React, TypeScript, Vite' },
          { name: 'Linux', description: 'Vývojové prostredia, siete, hľadanie chýb v systéme' },
        ],
      },
      {
        title: 'Hardvér a elektronika',
        skills: [
          { name: 'Elektronika', description: 'Roboscan: zapojenie, hľadanie porúch a spájanie častí do celku' },
          { name: 'Napájacie systémy', description: '72 V batéria, jej ochranná elektronika a bezpečnosť pri vysokých prúdoch na motorke' },
          { name: 'Mikro\nkontroléry', description: 'ESP32 a Pi Pico: programy, vstupy a výstupy, obmedzenia skutočného sveta' },
          { name: 'Diagnostika', description: 'Najprv multimeter: skratovanú riadiacu jednotku som odhalil ešte pred zapnutím' },
        ],
      },
      {
        title: 'Systémy a inžinierstvo',
        skills: [
          { name: 'Návrh systémov', description: 'Špecifikácia s 15 merateľnými požiadavkami, napísaná ešte pred kreslením' },
          { name: 'Hľadanie chýb', description: 'Hľadanie porúch v hardvéri aj v softvéri' },
          { name: 'Spoľahlivosť', description: 'Vibrácie, počasie a dlhodobé používanie na skutočných vozidlách' },
          { name: 'Testovanie', description: 'Každú predpoveď overím meraním a zapíšem rozdiel' },
        ],
      },
    ],
  },

  education: {
    heading: 'Vzdelanie',
    intro:
      'Skúšky GCSE som robil v júni 2026 na škole Debden Park High School. Osmičky mám z matematiky, fyziky, chémie a informatiky, teda zo štyroch predmetov, na ktorých stojí celá táto stránka.',
    // Not on the English page: Slovak school marks run the other way (1 is
    // best), so without this line an 8 reads as a bad grade.
    gradeNote:
      'Pozor, v Anglicku je to naopak ako na Slovensku: skúšky GCSE sa známkujú od 1 do 9 a najlepšia známka je 9.',
    statExams: 'Skúšok GCSE',
    statEights: 'Známky 8',
    statSevenPlus: 'Známka 7 a viac',
    stemTitle: 'Prírodné vedy a technika',
    otherTitle: 'Humanitné a ostatné predmety',
    subjects: {
      Mathematics: 'Matematika',
      Physics: 'Fyzika',
      Chemistry: 'Chémia',
      'Computer Science': 'Informatika',
      Biology: 'Biológia',
      Geography: 'Geografia',
      'English Literature': 'Anglická literatúra',
      'English Language': 'Anglický jazyk',
      'Physical Education': 'Telesná výchova',
    } as Record<string, string>,
    notes: {
      'Spoken Language: Merit': 'Ústny prejav: Merit (s pochvalou)',
    } as Record<string, string>,
    nowTitle: 'Teraz: A-levels, 12. ročník (2026 až 2028)',
    nowText:
      'Matematika, vyššia matematika, fyzika a informatika. Vybral som si ich tak, aby sedeli k štúdiu leteckého a kozmického inžinierstva na univerzite a aby som ich hneď využil pri stavbách na tejto stránke. A-levels sú posledné dva roky školy pred univerzitou.',
    footnote: 'Známky podľa môjho výpisu výsledkov z 20. augusta 2026.',
  },

  strip: {
    lead: 'Aj doučujem.',
    text: 'Matematiku, fyziku a informatiku na skúšky GCSE, cez internet alebo osobne v okolí Eppingu. Prvá hodina je zadarmo. Stránka o doučovaní je v angličtine.',
    link: 'Doučovanie →',
  },

  contact: {
    heading: 'Napíšte mi',
    text: 'Vždy rád počujem o nových projektoch a príležitostiach. Či už máte otázku, alebo ma chcete len pozdraviť, pokojne sa ozvite!',
  },

  projectDetail: {
    back: 'Späť na projekty',
    highlights: 'Hlavné body',
    tech: 'Technológie a odbory',
    phases: 'Fázy projektu',
    phase: 'Fáza',
    challenges: 'Problémy a riešenia',
    challenge: 'Problém',
    solution: 'Riešenie',
    outcome: 'Výsledok',
    github: 'Zdrojové súbory na GitHube',
    logHeading: 'Inžiniersky denník',
    logNote:
      'Podrobný denník projektu s výpočtami, rozhodnutiami a dôkazmi ku každému kroku je zatiaľ len v angličtine.',
    logLink: 'Otvoriť denník v angličtine',
    projects: {
      quadcopter: {
        title: 'Modulárna kvadrokoptéra',
        tagline: 'Návrh a stavba od základných princípov',
        summary:
          'Rozpracovaný inžiniersky projekt: navrhujem kvadrokoptéru (dron so štyrmi vrtuľami) z fyzikálnych rovníc a porovnávacích štúdií. Smerujem k výrobe z hliníka na CNC stroji a z uhlíkových vlákien a k overeniu letovými skúškami. Všetko dokumentujem od začiatku do konca: od špecifikácie cez výpočty a výrobu až po letové skúšky.',
        stats: [
          { label: 'Stav', value: 'Fáza výpočtov, letové skúšky na jeseň 2026' },
          { label: 'Metóda návrhu', value: 'Od základných princípov' },
          { label: 'Plánovaná výroba', value: 'CNC hliník a uhlíkové vlákna' },
          { label: 'Odbor', value: 'Letectvo a strojárstvo' },
        ],
        techStack: ['Analýza konštrukcie', 'Návrh pohonu', 'Výroba kompozitov', 'Systémové inžinierstvo', 'Vstavaný softvér'],
        highlights: [
          'Ešte predtým, než som začal kresliť v CAD programe, som napísal úplnú špecifikáciu výrobku s 15 merateľnými požiadavkami (stabilita vo visení, pomer ťahu k hmotnosti, celková hmotnosť, rezerva voči rezonancii ramien).',
          'Pripravil som sadu výpočtov od základných princípov: hybnostná teória pohonu, rezonancia ramien, predpätie skrutiek, ťažisko a zotrvačnosť, ohyb sendvičových panelov. Každý z nich počas stavby overím meraním.',
          'Robím prvé porovnávacie štúdie (kedy zadať CNC výrobu, orientácia vrtúľ, priemer rámu oproti veľkosti vrtúľ, materiál svoriek), aby som znížil riziko skôr, než miniem rozpočet.',
          'Stretol som sa s výskumníkmi z Imperial College London, aby preverili, či je projekt uskutočniteľný, skôr než ho rozšírim.',
        ],
        timeline: [
          {
            phase: '01',
            title: 'Koncept a požiadavky',
            description:
              'Hotovo. Špecifikácia s 15 merateľnými požiadavkami je napísaná, uskutočniteľnosť som prebral s výskumníkmi z Imperial College London a stanovil som rozpočet (približne 700 libier) a časový plán na 10 týždňov.',
          },
          {
            phase: '02',
            title: 'Výpočty a návrh',
            description:
              'Prebieha. Začínam dimenzovaním pohonu podľa hybnostnej teórie a štúdiou, ktorá spolu rieši priemer rámu a veľkosť vrtúľ (rozhodnutie č. 1).',
          },
          {
            phase: '03',
            title: 'Výroba',
            description:
              'Zatiaľ nezačatá. CNC obrábanie a laminovanie kompozitov sú naplánované na neskoršiu časť stavby.',
          },
          { phase: '04', title: 'Montáž a skúšky na stole', description: 'Zatiaľ nezačaté.' },
          { phase: '05', title: 'Letové skúšky a úpravy', description: 'Zatiaľ nezačaté.' },
        ],
        challenges: [],
      },
      'enduro-motorcycle': {
        title: 'Elektrická enduro motorka',
        tagline: 'Stavba vlastnými rukami od nuly',
        summary:
          'Kompletná stavba elektrickej enduro motorky na 72 V od nuly: batéria na mieru, motor QS205 v náboji kolesa, riadiaca jednotka Fardriver ND72450, ručne krimpované vysokonapäťové káble a tri fázy vylepšovania, od prvého funkčného pokusu až po výkonný pohon.',
        stats: [
          { label: 'Napätie systému', value: '72 V' },
          { label: 'Motor', value: 'QS Motor QS205 v náboji kolesa' },
          { label: 'Riadiaca jednotka', value: 'Fardriver ND72450' },
          { label: 'Fázy stavby', value: '3 verzie' },
        ],
        techStack: [
          'Vysokonapäťová elektronika',
          'Riadenie BLDC motora',
          'Fardriver ND72450',
          'QS Motor QS205',
          'Vysokonapäťové káble a krimpovanie',
          'Batériové systémy',
        ],
        highlights: [
          'Navrhol a poskladal som vlastnú 72 V batériu od jednotlivých článkov.',
          'Spojil som motor QS205 s riadiacou jednotkou Fardriver ND72450, aby mala motorka ťah potrebný do terénu.',
          'Všetky vysokonapäťové káble som ručne nakrimpoval a zaizoloval na profesionálnej bezpečnostnej úrovni.',
          'Prešiel som tromi fázami stavby, od prvého funkčného pokusu až po vyladený výkonný pohon.',
        ],
        timeline: [
          {
            phase: '01',
            title: 'Fáza 0: overenie, že to pôjde',
            description:
              'Máj až august 2025. Zohnal som lacný motor do náboja kolesa, obyčajnú 80 A riadiacu jednotku a batériu NBPower 72 V 30 Ah 100 A na mieru. Rám som staval od holého kovu, zavesený na popruhoch zo stropu, každý spoj som ručne spájkoval a motorku som rozbehol na prvú jazdu.',
          },
          {
            phase: '02',
            title: 'Fáza 1: darcovské bicykle a opravy',
            description:
              'September až december 2025. Kúpil som dva havarované elektrobicykle, aby som ich rozobral na diely a predal, a k tomu pokazený motor a batériu na opravu a ďalší predaj, aby som z toho zaplatil ďalšie vylepšenie. Zohnal som aj použitú riadiacu jednotku Sabvaton, ktorá však prišla nefunkčná.',
          },
          {
            phase: '03',
            title: 'Fáza 2: prechod na QS205 a Fardriver',
            description:
              'Jún 2026. Lacný motor a riadiacu jednotku som vymenil za motor QS Motor QS205 a jednotku Fardriver ND72450 (200 A trvalo, 450 A v špičke). Všetky spoje som zmenil zo spájkovaných na krimpované, nastavil som plyn na novú jednotku a dokončil jej automatickú kalibráciu s motorom.',
          },
        ],
        challenges: [
          {
            challenge:
              'Obyčajná 80 A riadiaca jednotka z fázy 0 celú prvú stavbu brzdila batériu NBPower, ktorá zvládne 100 A. Batéria nikdy nebola slabým miestom.',
            solution:
              'Zistil som, že úzkym hrdlom je riadiaca jednotka, a vo fáze 2 som ju vymenil za Fardriver ND72450 (200 A trvalo, 450 A v špičke). Batéria tak konečne môže ukázať, čo vie.',
          },
          {
            challenge:
              'Použitá riadiaca jednotka Sabvaton prišla so skratom priamo na svorkách batérie. Mala skratované výkonové tranzistory a k motorke som ju ani nepripojil.',
            solution:
              'Chybu som odhalil multimetrom ešte pred prvým zapnutím. Pokúsil som sa tranzistory opraviť, a keď oprava nevydržala, odpísal som ju a rovno zohnal Fardriver.',
          },
          {
            challenge: 'Vodiče palcového plynu zo Surronu nesedeli so vstupom pre plyn na jednotke Fardriver.',
            solution:
              'Každý vodič som si ručne zmapoval, skôr než som čokoľvek krimpoval, a potom som vyrobil malý prepojovací kábel, ktorý ich spája.',
          },
        ],
        outcomeText:
          'Hotová motorka: batéria na mieru, motor v náboji kolesa a riadiaca jednotka sú plne prepojené. Je vyskúšaná na stojane a podľa mojich výpočtov od základných princípov by mala dosiahnuť približne 55 míľ za hodinu (asi 89 km/h) a zrýchliť z 0 na 30 míľ za hodinu (asi 48 km/h) približne za 3,6 sekundy. Je pripravená na prvú jazdu v teréne s meracími prístrojmi.',
      },
    } as Record<
      string,
      {
        title: string;
        tagline: string;
        summary: string;
        stats: { label: string; value: string }[];
        techStack: string[];
        highlights: string[];
        timeline: { phase: string; title: string; description: string }[];
        challenges: { challenge: string; solution: string }[];
        outcomeText?: string;
      }
    >,
  },
};

export type SkCopy = typeof sk;
