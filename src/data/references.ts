import dtt from '../assets/referenzen/dein-trocknungsteam.jpg';
import fhs from '../assets/referenzen/frank-handwerksservice.jpg';
import mbody from '../assets/referenzen/mbody-ergotherapie.jpg';

export type Reference = {
  slug: string;
  name: string;
  nameHtml: string;
  kicker: string;
  cardMeta: string;
  domain: string;
  url: string;
  shot: ImageMetadata;
  headline: string;
  chips: string[];
  result: string;
  kpis: { value: string; label: string }[];
  // Ausgangslage, Umsetzung und Zitat folgen, sobald Philipp sie liefert
  before?: string;
  work?: string;
  quote?: { text: string; author: string };
};

export const references: Reference[] = [
  {
    slug: 'dein-trocknungsteam',
    name: 'Dein Trocknungsteam',
    nameHtml: 'Dein Trocknungs&shy;team',
    kicker: 'Leckortung und Bautrocknung, Neuss',
    cardMeta: 'Leckortung und Bautrocknung, Neuss · dein-trocknungsteam.de',
    domain: 'dein-trocknungsteam.de',
    url: 'https://www.dein-trocknungsteam.de/',
    shot: dtt,
    headline: 'Top 2 in Google Maps',
    chips: ['Webseite', 'Google-Profil', 'Local SEO'],
    result:
      'Vorher in Google Maps nicht zu finden, heute unter den ersten zwei im Kartenbereich. Über 27.000 Impressionen in den letzten drei Monaten.',
    kpis: [
      { value: '27.000+', label: 'Impressionen bei Google in drei Monaten' },
      { value: 'Top 2', label: 'im Kartenbereich bei Google Maps, vorher nicht sichtbar' },
    ],
  },
  {
    slug: 'frank-handwerksservice',
    name: 'Frank Handwerksservice GmbH',
    nameHtml: 'Frank Handwerks&shy;service GmbH',
    kicker: 'Sanierung und Handwerk, Neuss',
    cardMeta: 'Sanierung und Handwerk, Neuss · frank-handwerksservice.de',
    domain: 'frank-handwerksservice.de',
    url: 'https://www.frank-handwerksservice.de/',
    shot: fhs,
    headline: 'Platz 23 → Platz 2',
    chips: ['Webseite', 'Google-Profil', 'Local SEO', 'Betreuung'],
    result:
      'Für „Bautrocknung Neuss“ von Platz 23 auf Platz 2. Über 45.000 Impressionen in den letzten drei Monaten.',
    kpis: [
      { value: '45.000+', label: 'Impressionen bei Google in drei Monaten' },
      { value: '23 → 2', label: 'Platz bei Google für „Bautrocknung Neuss“' },
    ],
  },
  {
    slug: 'mbody-ergotherapie',
    name: 'mBody Ergotherapie',
    nameHtml: 'mBody Ergotherapie',
    kicker: 'Praxis für Ergotherapie, Neuss',
    cardMeta: 'Ergotherapie, Neuss · mbody-therapy.de',
    domain: 'mbody-therapy.de',
    url: 'https://mbody-therapy.de/ergo',
    shot: mbody,
    headline: 'ca. 25 Anrufe im Monat',
    chips: ['Webseite', 'Google-Profil'],
    result:
      'Rund 25 Anrufe im Monat kommen direkt über Google. Über 20.000 Impressionen in den letzten drei Monaten.',
    kpis: [
      { value: '20.000+', label: 'Impressionen bei Google in drei Monaten' },
      { value: '≈ 25', label: 'Anrufe pro Monat über Google' },
    ],
  },
];
