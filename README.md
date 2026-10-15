# phrank.io

Webseite von phrank (Philipp Frank): Webseiten und Local SEO für Betriebe vor Ort.

Gebaut mit [Astro](https://astro.build), gehostet bei IONOS (Deploy Now).

## Lokal starten

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # fertige Seite in dist/
```

## Inhalte ändern

| Was | Wo |
| --- | --- |
| Kontaktdaten, Adresse, Einzugsgebiet | `src/data/site.ts` |
| Leistungen (Startseite und Unterseiten) | `src/data/services.ts` |
| Referenzen, Kennzahlen, Screenshots | `src/data/references.ts`, Bilder in `src/assets/referenzen/` |
| Startseite | `src/pages/index.astro` |
| Impressum, Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| Design (Farben, Schriften, Abstände) | `src/styles/global.css` |

Bei Referenzen können `before` (Ausgangslage), `work` (Umsetzung) und `quote` (Kundenzitat) ergänzt werden. Sie erscheinen automatisch, sobald sie gesetzt sind.

## Livegang

1. In [IONOS Deploy Now](https://ionos.space) ein neues Projekt aus diesem GitHub-Repo anlegen. Projektart **PHP** wählen (damit `kontakt.php` läuft), Build-Befehl `npm run build`, Ausgabeordner `dist`. Deploy Now legt seine Workflow-Dateien selbst im Repo an.
2. **Domain:** In Deploy Now `phrank.io` verbinden. Da die Domain im selben IONOS-Konto liegt, setzt IONOS die DNS-Einträge selbst. Die MX-Einträge für hello@phrank.io bleiben unverändert.
3. **Formular testen:** Einmal eine Anfrage abschicken und prüfen, dass sie bei hello@phrank.io ankommt. Das Postfach muss bei IONOS existieren, weil es auch als Absender dient.
4. **Auftragsverarbeitung:** Den AV-Vertrag im IONOS-Kundenkonto abschließen (Verträge & Datenschutz), auf den die Datenschutzerklärung verweist.
5. Danach die Seite in der [Google Search Console](https://search.google.com/search-console) anmelden und `https://phrank.io/sitemap-index.xml` einreichen.
