# phrank.io

Webseite von phrank (Philipp Frank): Webseiten und Local SEO für Betriebe vor Ort.

Gebaut mit [Astro](https://astro.build), gehostet bei Netlify.

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

1. In Netlify: **Add new site → Import from GitHub →** dieses Repo wählen. Die Einstellungen kommen aus `netlify.toml`.
2. **Domain:** In Netlify unter *Domain management* `phrank.io` hinzufügen und beim Domain-Anbieter die DNS-Einträge setzen, die Netlify anzeigt. HTTPS richtet Netlify automatisch ein.
3. **Formular:** Unter *Forms* die Formularerkennung aktivieren und unter *Form notifications* eine E-Mail-Benachrichtigung an hello@phrank.io anlegen.
4. **Auftragsverarbeitung:** Den Vertrag zur Auftragsverarbeitung (DPA) von Netlify abschließen, auf den die Datenschutzerklärung verweist.
5. Danach die Seite in der [Google Search Console](https://search.google.com/search-console) anmelden und `https://phrank.io/sitemap-index.xml` einreichen.
