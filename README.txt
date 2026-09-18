TAVERN CLASH — TEST PWA

Obsah:
- index.html — aktuální TAVERN CLASH (10K + 30)
- manifest.webmanifest — instalace jako aplikace
- sw.js — offline cache
- icons/ — ikony aplikace

TEST NA TELEFONU:
1. Nahraj CELOU tuto složku na HTTPS webhosting. Soubory musí zůstat vedle sebe ve stejné struktuře.
2. Otevři adresu index.html v Chrome na Androidu.
3. V menu Chrome zvol „Přidat na plochu“ / „Instalovat aplikaci“.
4. Po prvním načtení by aplikace měla fungovat i offline.

DŮLEŽITÉ:
PWA instalace a service worker nefungují správně při prostém otevření index.html jako lokálního souboru (file://).
Toto je testovací build, nikoli finální verze.


v0.5.1 FIX: Opraven JavaScript komentátora hry 30; výběr hráčů a spuštění hry znovu fungují. PWA cache bump.
