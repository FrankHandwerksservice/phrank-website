export type Service = {
  slug: string;
  name: string;
  more: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  // Kurzfassung für die Startseite
  teaser: string;
  bullets: string[];
  intro: string[];
  checks: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  reference?: string;
};

export const services: Service[] = [
  {
    slug: 'webseite',
    name: 'Webseite',
    more: 'Mehr zur Webseite',
    title: 'Webseite erstellen lassen für Betriebe vor Ort | phrank',
    description:
      'Schnelle Webseiten für lokale Betriebe: für das Handy gebaut, in unter einer Sekunde geladen, ohne Cookie-Banner. Von Philipp Frank aus Grevenbroich.',
    h1: 'Deine neue Webseite.',
    lead: 'Schnell, für das Handy gebaut und so aufgebaut, dass Google versteht, was du anbietest und wo.',
    teaser:
      'Modern, für das Handy gebaut und in unter einer Sekunde geladen. Mit Speisekarte oder Leistungen, Öffnungszeiten und einem Knopf zum Anrufen.',
    bullets: ['Ohne Cookie-Banner, DSGVO-sauber', 'Öffnungszeiten selbst ändern'],
    intro: [
      'Die meisten Kunden sehen deine Webseite zuerst auf dem Handy, oft direkt nach einer Google-Suche. Dann zählen Sekunden: Lädt die Seite schnell, sieht man sofort, was du anbietest, und kann man mit einem Tipp anrufen?',
      'Ich baue jede Webseite selbst, ohne Baukasten und ohne schwere Plugins. Das Ergebnis lädt in unter einer Sekunde, braucht keinen Cookie-Banner und ist von Anfang an für Google vorbereitet.',
    ],
    checks: [
      { title: 'Für das Handy gebaut', text: 'Große Knöpfe, gut lesbare Texte und ein Anruf mit einem Tipp.' },
      { title: 'Unter einer Sekunde Ladezeit', text: 'Schlanker Code ohne Baukasten. Ziel bei Google PageSpeed: 95 und mehr.' },
      { title: 'Ohne Cookie-Banner, DSGVO-sauber', text: 'Keine Tracker, keine eingebundenen Fremddienste, Schriften direkt vom eigenen Server.' },
      { title: 'Öffnungszeiten selbst ändern', text: 'Kleine Änderungen machst du selbst. Oder du schickst mir eine Nachricht.' },
      { title: 'Für Google vorbereitet', text: 'Saubere Seitentitel, Beschreibungen und strukturierte Daten, damit Google Ort, Leistungen und Öffnungszeiten versteht.' },
      { title: 'Texte, die verkaufen', text: 'Ich helfe dir bei den Texten, damit Kunden schnell verstehen, warum sie zu dir kommen sollten.' },
    ],
    faqs: [
      { q: 'Wie lange dauert es?', a: 'Meist zwei bis drei Wochen. Das hängt vor allem davon ab, wie schnell Texte und Fotos da sind.' },
      { q: 'Reicht ein Onepager?', a: 'Für viele Cafés, Bars und kleine Läden ja. Wer mehrere Leistungen oder Orte hat, profitiert von eigenen Unterseiten, weil jede für eigene Suchbegriffe gefunden werden kann.' },
      { q: 'Ich habe schon eine Domain. Was passiert damit?', a: 'Die bleibt. Die neue Webseite zieht einfach auf deine bestehende Domain um.' },
    ],
    reference: 'mbody-ergotherapie',
  },
  {
    slug: 'google-profil',
    name: 'Google-Profil',
    more: 'Mehr zum Google-Profil',
    title: 'Google-Unternehmensprofil einrichten und pflegen | phrank',
    description:
      'Dein Schaufenster in Google und Google Maps: Ich richte dein Google-Unternehmensprofil vollständig ein und halte es aktuell, für mehr Anrufe und Anfragen.',
    h1: 'Dein Google-Profil.',
    lead: 'Dein Schaufenster in Google und Google Maps. Oft das Erste, was Kunden von dir sehen, noch vor deiner Webseite.',
    teaser:
      'Dein Schaufenster in Google und Google Maps. Komplett eingerichtet, mit Fotos, passenden Kategorien und regelmäßigen Beiträgen.',
    bullets: ['Kategorien, Leistungen, Fotos', 'Antworten auf Bewertungen', 'Mehr Bewertungen sammeln'],
    intro: [
      'Wer „Bäckerei in der Nähe“ oder „Elektriker Neuss“ sucht, sieht zuerst die Karte mit drei Betrieben. Wer dort steht, bekommt die meisten Anrufe. Welche drei das sind, hängt stark davon ab, wie vollständig und aktiv ein Profil gepflegt ist.',
      'Ich richte dein Profil komplett ein und halte es aktuell, damit Google und deine Kunden immer die richtigen Infos sehen.',
    ],
    checks: [
      { title: 'Kategorien und Leistungen', text: 'Die richtigen Kategorien entscheiden mit, bei welchen Suchen du überhaupt auftauchst.' },
      { title: 'Fotos, die Lust machen', text: 'Von deinem Betrieb, deinem Team und deiner Arbeit. Regelmäßig neue.' },
      { title: 'Öffnungszeiten, auch an Feiertagen', text: 'Damit niemand vor verschlossener Tür steht.' },
      { title: 'Antworten auf Bewertungen', text: 'Freundlich und zeitnah, auch auf die kritischen.' },
      { title: 'Mehr Bewertungen sammeln', text: 'Ein einfacher Weg für zufriedene Kunden, dich zu bewerten, zum Beispiel per QR-Code an der Kasse.' },
      { title: 'Regelmäßige Beiträge', text: 'Angebote, Neuigkeiten und Aktionen. Das zeigt Google, dass dein Betrieb aktiv ist.' },
    ],
    faqs: [
      { q: 'Ich habe schon ein Profil. Bringt das trotzdem etwas?', a: 'Ja. Die meisten Profile sind angelegt, aber kaum gepflegt. Genau da liegt meist das größte Potenzial.' },
      { q: 'Kaufst du Bewertungen?', a: 'Nein. Gekaufte Bewertungen verstoßen gegen die Regeln von Google und können dich dein Profil kosten. Ich helfe dir, echte Bewertungen zu sammeln.' },
      { q: 'Wie schnell wirkt das?', a: 'Ein gut gepflegtes Profil zeigt oft schon nach wenigen Wochen mehr Aufrufe und Anrufe.' },
    ],
    reference: 'dein-trocknungsteam',
  },
  {
    slug: 'local-seo',
    name: 'Local SEO',
    more: 'Mehr zu Local SEO',
    title: 'Local SEO: lokal bei Google gefunden werden | phrank',
    description:
      'Local SEO für Betriebe in Neuss, Grevenbroich, Düsseldorf und Umgebung: oben stehen, wenn in deiner Gegend jemand sucht, was du anbietest.',
    h1: 'Local SEO.',
    lead: 'Damit du oben stehst, wenn in deiner Gegend jemand sucht, was du anbietest.',
    teaser:
      'Damit du bei Suchen wie „Elektriker Neuss“ oben stehst. Mit Einträgen in Branchenverzeichnissen und eigenen Seiten für Leistungen und Orte.',
    bullets: ['Suchbegriffe mit Ort', '15 bis 25 Verzeichniseinträge', 'Seiten für Leistungen und Orte'],
    intro: [
      'Deine Kunden suchen nicht nach deinem Namen, sondern nach dem, was sie brauchen: „Bautrocknung Neuss“, „Friseur Grevenbroich“ oder „Pizza in der Nähe“. Local SEO sorgt dafür, dass Google dich für genau diese Suchen als gute Antwort sieht.',
      'Dafür schaue ich mir an, was in deiner Gegend wirklich gesucht wird, und richte Webseite, Google-Profil und deine Einträge im Netz darauf aus.',
    ],
    checks: [
      { title: 'Suchbegriffe mit Ort', text: 'Ich finde heraus, wonach deine Kunden in deiner Gegend tatsächlich suchen.' },
      { title: 'Seiten für Leistungen und Orte', text: 'Eigene Seiten für deine wichtigsten Leistungen und Orte, jede mit eigenem Inhalt.' },
      { title: '15 bis 25 Verzeichniseinträge', text: 'Überall derselbe Name, dieselbe Adresse und dieselbe Telefonnummer. Das schafft Vertrauen bei Google.' },
      { title: 'Lokale Links', text: 'Erwähnungen und Links von Seiten aus deiner Region.' },
      { title: 'Platzierungen messen', text: 'Ich prüfe regelmäßig, wo du bei deinen wichtigsten Suchbegriffen stehst.' },
      { title: 'Technik im Griff', text: 'Ladezeit, strukturierte Daten und saubere Seitentitel.' },
    ],
    faqs: [
      { q: 'Wie schnell sehe ich Ergebnisse?', a: 'Ein gepflegtes Google-Profil wirkt oft schon nach wenigen Wochen. Stabile Platzierungen weit oben brauchen meist drei bis sechs Monate.' },
      { q: 'Garantierst du Platz 1?', a: 'Nein, das kann seriös niemand. Ich garantiere dir klare Leistungen und zeige dir jeden Monat, wo du stehst.' },
    ],
    reference: 'frank-handwerksservice',
  },
  {
    slug: 'betreuung',
    name: 'Betreuung',
    more: 'Mehr zur Betreuung',
    title: 'Monatliche Betreuung für Webseite und Google-Profil | phrank',
    description:
      'Ich bleibe jeden Monat dran: Google-Profil pflegen, Platzierungen messen, Änderungen auf Zuruf und ein Monatsbericht ohne Fachchinesisch.',
    h1: 'Betreuung.',
    lead: 'Sichtbar werden ist kein einmaliges Projekt. Ich bleibe jeden Monat dran, damit du es nicht musst.',
    teaser:
      'Jeden Monat dranbleiben: Profil pflegen, Platzierungen messen und dir in einem kurzen Bericht zeigen, was sich getan hat.',
    bullets: ['Monatsbericht ohne Fachchinesisch', 'Änderungen auf Zuruf'],
    intro: [
      'Google belohnt Betriebe, die aktiv sind: neue Fotos, frische Beiträge, beantwortete Bewertungen und aktuelle Öffnungszeiten. Das kostet Zeit, die im Alltag oft fehlt. Darum übernehme ich das für dich.',
      'Einmal im Monat bekommst du einen kurzen Bericht: wie oft du gefunden wurdest, wie oft Kunden angerufen oder nach dem Weg gefragt haben und wo du bei deinen wichtigsten Suchbegriffen stehst.',
    ],
    checks: [
      { title: 'Monatsbericht ohne Fachchinesisch', text: 'Die wichtigsten Zahlen auf einen Blick, verständlich erklärt.' },
      { title: 'Änderungen auf Zuruf', text: 'Neue Öffnungszeiten, ein Angebot, ein neues Foto: Schick es mir per WhatsApp, ich kümmere mich.' },
      { title: 'Profil-Pflege', text: 'Beiträge, Fotos und Antworten auf Bewertungen, jeden Monat.' },
      { title: 'Ein Ansprechpartner', text: 'Du hast immer mich am Telefon, keinen wechselnden Kundenberater.' },
    ],
    faqs: [
      { q: 'Wie erreiche ich dich?', a: 'Per WhatsApp, Telefon oder E-Mail. Innerhalb von 24 Stunden bekommst du eine Antwort.' },
      { q: 'Muss ich mich selbst um etwas kümmern?', a: 'Nur, wenn du willst. Am meisten hilft es, wenn du mir ab und zu Fotos oder Neuigkeiten aus deinem Betrieb schickst.' },
    ],
    reference: 'frank-handwerksservice',
  },
];
