export interface FilterCategory {
  categoryName: string;
  options: {
    label: string;
  }[];
}

export const categories: FilterCategory[] = [
  {
    categoryName: "Dle konstrukce",
    options: [
      { label: "Křídlo" },
      { label: "Pianino" }
    ]
  },
  {
    categoryName: "Stav",
    options: [
      { label: "Nové" },
      { label: "Renovované" }
    ]
  },
  {
    categoryName: "Značky",
    options: [
      { label: "Petrof" },
      { label: "August Förster" },
      { label: "Kawai" },
      { label: "Yamaha" },
      { label: "Rösler" },
      { label: "Samick" },
      { label: "Pearl River" },
      { label: "Scholze" },
      { label: "Weinbach" },
      { label: "Hellas" },
      { label: "Ostatní" },
    ]
  },
  {
    categoryName: "Provedení",
    options: [
      { label: "Černé" },
      { label: "Bílé" },
      { label: "Hnědé" },
      { label: "Dub" },
      { label: "Ořech" },
      { label: "Exotické dřevo" },
      { label: "Kombinace" },
      { label: "Barevné" },
      { label: "Ostatní" },
    ]
  }
];