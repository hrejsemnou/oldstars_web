# Jak přidávat nový content

## Inscenace
- ve slozce `public/productions` vytvorit soubor ve formatu `<nazev-inscenace>/index.md`
- vzorový index soubor pro inscenaci vypadá takhle:
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

mediální ohlasy:

"Naturelu Ljuby Krbové hra přesně sedí. Herečka nevystoupí z role, jakoby příběh opravdu odžila. Navíc v malém podkroví Werichovy vily dokáže blízko sedící diváky doslova vtáhnout." Pavel Širmer, i-divadlo.cz, 11. 4. 2018

Autorská práva zastupuje AURA PONT
```
Nahoře jsou metadata a reprízy (reruns), pod čarou potom popis, který podporuje [Markdownové formátování](https://www.markdownguide.org/cheat-sheet)
- pro nahrání fotek je momentálně nutné u sebe na počítači vytvořit složku `images`, do ní vložit fotky (nezáleží na jejich názvu ani formátu) a celou složku poté přetáhnout do složky inscenace (Ve složce inscenace Add Files -> Upload Files)
