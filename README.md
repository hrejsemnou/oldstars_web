# Jak přidávat nový content

## Inscenace
- ve složce `public/productions` vytvoř soubor ve formátu `nazev-inscenace/index.md` (Ve složce productions klikni na Add File > Create New File, napiš název a potom dole klikni na Commit changes)
- vzorový index soubor pro inscenaci vypadá třeba takhle:
```
---
title: 'Margaritě...'
writer: 'Carlos Be'
translation: 'Iveta Gonzálezová'
director: 'Tomáš Staněk'
production: 'Lucie Gabrovská'
actors: 'Ljuba Krbová'
premiere: '10.4.2018'
tag: monodrama
reruns:
  -
    date: '20.10.2021'
    time: '20:00'
    place: 'Werichova vila'
    ticket: 'https://goout.net/cs/margarite/szhmdrr/'
  -
    date: '23.11.2021'
    time: '20:00'
    place: 'Werichova vila'
    ticket: 'https://goout.net/cs/margarite/szkeccs/'
  -
    date: '07.12.2021'
    time: '20:00'
    place: 'Werichova vila'
    ticket: 'https://goout.net/cs/margarite/szjeccs/'
---
Jak bojovat s nepřízní osudu? Nejlépe s humorem, nevadí, že je občas drsný. A hlavně se nenechat v průšvihu utopit.Nadechnout se lze i jednou nosní dírkou. Margarita má dnes narozeniny a nikdo z jejích dětí, natož bývalý manžel si na ni ani nevzpomněl. Jen od svého lékaře dostává nečekaný dárek. Monolog pro jednu herečku je jakýmsi deníkovým průletem 180 dny. Dojemná i silná hra se dostala mezi finálové texty španělské soutěže tvůrčího psaní Premi Born de Teatre 2013. V rámci letošního ročníku Měsíce autorského čtení, který byl věnován španělským autorům, absolvoval Carlos Be s touto hrou velmi úspěšná a divácky hojně navštívená scénická čtení v Brně, Ostravě, Košicích, polské Vratislavi a Lvově.

[www.margarite.cz](http://www.margarite.cz)

Vstupenky k dispozici přes předprodejní server GOOUT. Zakoupením vstupenky přispějete na Bellis Young & Cancer - projekt Aliance žen s rakovinou prsu.

**Mediální ohlasy:**

"Naturelu Ljuby Krbové hra přesně sedí. Herečka nevystoupí z role, jakoby příběh opravdu odžila. Navíc v malém podkroví Werichovy vily dokáže blízko sedící diváky doslova vtáhnout." Pavel Širmer, i-divadlo.cz, 11. 4. 2018

Autorská práva zastupuje AURA PONT
```
- Nahoře jsou metadata a reprízy (reruns), pod čarou potom popis, který podporuje [Markdownové formátování](https://www.markdownguide.org/cheat-sheet)
- Podporovaná metadata (povinný je jen název a autor, zbytek se dá vypsat i v popisku dole v markdownu)
  - title: Název inscenace
  - writer: Autor
  - tag: archive / monodrama / guests
  - translation: Překladatel
  - director: Režie
  - dramaturgy: Dramaturgie
  - production: Produkce
  - actors: Hraje
  - videoart: Videoart
  - art: Výtvarné řešení
  - scenography: Scénografie
  - photography: Fotografie
  - edit: Úprava
  - music: Hudba
  - length: Délka představení
  - premiere: Premiéra
  - reruns: Reprízy
- pro nahrání fotek je momentálně nutné u sebe na počítači vytvořit složku `images`, do ní vložit fotky (nezáleží na jejich názvu ani formátu) a celou složku poté přetáhnout do složky inscenace `public/productions/nazev-inscenace` (Ve složce inscenace klikni na Add File -> Upload Files, přetáhni složku s fotkami a klikni na Commit changes).
