# Frontend Development Prüfung


## Bewertung & Niveaustufen

Die Bewertung erfolgt entlang der folgenden Niveaustufen:

### Beste Lösung
- Features im Wert von 40 Storypoints sind vollständig umgesetzt und funktionieren
- die Änderungen für die Features sind in der Commit Historie ersichtlich und verständlich erklärt
- alle Features sind gepusht
- der erzeugte Code zeigt, dass der Verfasser\*In ein sehr gutes Verständnis der zugrunde liegenden Technologien und Konzepte hat 
- die Änderungen wurden im Sinne der Projektstruktur in den passenden Dateien gemacht
- der erzeugte Code ist nachvollziehbar, selbsterklärend und effizient (semantisches HTML, Nutzung von Nesting & Custom Properties, robustes Javascript)

### Gute Lösung
- Features im Wert von 30 Storypoints sind vollständig umgesetzt und funktionieren
- die Änderungen für die Features sind in der Commit Historie ersichtlich
- alle Features sind gepusht
- die Änderungen wurden im Sinne der Projektstruktur in den passenden Dateien gemacht
- der erzeugte Code zeigt, dass der Verfasser\*In ein gutes Verständnis der zugrunde liegenden Technologien und Konzepte hat
- der erzeugte Code ist nachvollziehbar, selbsterklärend und effizient (semantisches HTML, Nutzung von Nesting & Custom Properties, robustes Javascript)

### Passable Lösung
- Features im Wert von 25 Storypoints sind vollständig umgesetzt und funktionieren mir kleinen Ausnahmen
- die Änderungen für die Features sind in der Commit Historie ersichtlich
- alle Features sind gepusht
- der erzeugte Code zeigt, dass der Verfasser\*In ein grundlegendes Verständnis der zugrunde liegenden Technologien und Konzepte hat

### Akzeptable Lösung
- Features im Wert von 20 Storypoints sind vollständig umgesetzt und funktionieren überwiegend
- die Änderungen für die Features sind in der Commit Historie ersichtlich
- die Änderungen sind gepusht
- der erzeugte Code zeigt, dass der Verfasser\*In die zugrunde liegenden Technologien und Konzepte in wesentlichen Teilen verstanden hat


## Hinweise zur Prüfung

Bitte beachten Sie folgende Punkte:

1. Lesen Sie die Aufgaben gründlich durch. Nicht nur kurz überfliegen, dann drauf los hacken und nachher feststellen, dass die Aufgabe ganz anders gemeint war oder gar schon einen Teil der Lösung enthielt ;)
2. Mergen Sie alle Änderungen in den *Main*-Branch, denn nur den schauen wir uns an.
3. Machen Sie einen Commit pro Aufgabe. Wenn es nicht anders geht, können es auch mehrere Commits pro Aufgabe sein, aber am Besten nur einer. Die ID der Aufgabe gehört in die Commit Message!
5. Beachten Sie die Zeitschätzungen bei den Aufgaben. Diese geben Ihnen auch ein Hinweis auf die Komplexität der Aufgabe.
7. Nehmen Sie sich Zeit um die Verzeichnisstruktur und bereits gegebenen Code zu erfassen.
9. Nutzen Sie so gut es geht die bereits definierten CSS Custom Properties (variables.css).
10. Achten Sie darauf, dass der finale Code valide ist. Nutzen Sie also den [W3C Validator](https://validator.w3.org/nu/#textarea). Und achten Sie auch darauf, dass Stylelint möglichst wenig bis keine Fehler ausgibt.

## Eigenständigkeit der Leistung

Wir möchten sicherstellen, dass Sie die Prüfung bestmöglich absolvieren können, daher möchten wir einige wichtige Regeln und Richtlinien hervorheben:

1. Eigenständige Leistung
Die Coding-Prüfung erfordert, dass Sie die Features eigenständig umsetzen. Externe Hilfe von Personen in Echtzeit ist nicht gestattet. Wir legen großen Wert darauf, Ihre individuellen Fähigkeiten und Ihr Wissen zu bewerten.

2. Externe Quellen und KI-gestützte Tools
Sie dürfen externe Quellen wie Online-Dokumentationen, Foren und Bücher sowie KI-gestützte Tools nutzen, um Informationen und Lösungsansätze zu finden. Wir ermutigen Sie, diese Ressourcen effektiv zu nutzen, um Ihre Lösungen zu verbessern.

3. Kennzeichnung von fremdem Code
Falls Sie Teile eines Codes von externen Quellen übernehmen, seien Sie transparent und kennzeichnen Sie diese Stellen eindeutig. Dies dient der Transparenz und ermöglicht es uns, Ihre Leistung fair zu bewerten. In der Regel erkennen wir fremden Code sehr schnell.

4. Kommunikation mit anderen Teilnehmern
Die Kommunikation mit anderen Teilnehmern während der Prüfung ist nicht gestattet. Dies schließt jegliche Form der Zusammenarbeit bei der Lösung der Features aus.

Wir vertrauen darauf, dass Sie diese Regeln respektieren und die Prüfung in Übereinstimmung mit den genannten Richtlinien absolvieren. Wir wünschen Ihnen viel Erfolg und hoffen, dass Sie Ihr Wissen und Ihre Fähigkeiten optimal präsentieren können.

Bei Fragen oder Unklarheiten stehen wir Ihnen gerne zur Verfügung.

## Inbetriebnahme

Klonen Sie das Repo und führen dann folgende Befehle im Verzeichnis des Repos aus:

```
npm install
npm run dev
```


## Material

- [Screenmovie Layouts large](https://youtu.be/31-8EFoqyMs)
- [Screenmovie Layouts small](https://youtu.be/Z7ArdKxvn2o)
- [Layouts als Bilder](https://th-koeln.sciebo.de/s/olezG7hycXgqlXh) pw: fd-2024

## Tasks


### 1: HTML auf Validität prüfen

Prüfen Sie mit dem [W3C Validator](https://validator.w3.org/nu/#textarea) ob die *index.html* valide ist. Falls nicht, passen Sie bitte die Datei entsprechend an. 

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML**

### 2: Ablauf einklappbar machen

Der Ablauf bei der Themenfindung (Vor der Arbeit, Während der Arbeit, Abschluss der Arbeit) soll einklappbar sein, damit die Seite nicht zu lang wird. Kleiner Tipp: das Details Element bringt fast alles erforderliche dafür mit.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS**

### 3: Kleine Anpssung des Farbschemas

Das Farbschema soll ein wenig angepasst werden, damit die Seite lebendiger ist. Alle Farben sind bereits in der `variabels.css` vorhanden.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**CSS**

### 4: Sektion «Thema vorschlagen» erstellen

Im unteren Bereich soll ein Formular zum Vorschlagen von Themen integriert werden. Nutzen Sie dabei auch folgenden Einleitungstext:

>  Haben Sie einen Themenwunsch oder -vorschlag? Ich suche vor allem nach Themen, die Interfaces im industriellen und musealen Kontext behandeln. Keine reinen Tech-Themen – Interfaces im Fokus! 

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS**

### 5: Sektion «Abgeschlossene Arbeiten» erstellen 

Über der Sektion «Thema vorschlagen» soll die Sektion «Abgeschlossene Arbeiten» erstellt werden. Hier gibt es zwei mögliche Varianten, eine mit Javascript und eine ohne. Entscheiden Sie sich für eine Variante.

#### Variante A: statisch für die ersten fünf Arbeiten.
Erzeugen Sie mit statischem HTML eine entsprechende Übersicht für die ersten fünf Einträge. Die Inhalte finden Sie in der JSON Datei unter Material.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS**

#### Variante B: Dynamisch via Javascript.
Erzeugen Sie die Übersicht mit allen Einträgen via Javascript. Die Inhalte finden Sie in der JSON Datei unter Material. Die URL für das JSON ist wie folgt:

```
URL
```

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS, JS**

## 6: Seite für eine abgeschlossene Arbeit erstellen

Erzeugen Sie eine Beispielseite für eine absgeschlossene Arbeit. Verlinken Sie diese aus der Übersicht. Nutzen Sie dabei die Arbeit "Can I CAI?" von Nils Polarek. Die Inhalte finden Sie unter Material.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS**

## 7: Leichte Designanpssung der aktuellen Themenvorschläge

Die Themenvorschläge ganz oben auf der Seite sollen gestalterisch leicht überarbeitet werden. 

@Volker: Dauer(??) Komplexität(??) 1 - 10

**CSS**

## 8: Icons zu den Hauptüberschriften hinzufügen

Fügen Sie zu den Überschriften auf der `index.html` Icons hinzu.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS**

## 9: Sektion «Abgeschlossene Arbeiten» ausklappbar machen

Bei der Übersicht in der Sektion «Abgeschlossene Arbeiten» sollen nur die ersten fünf Arbeiten gezeigt werden. Die weiteren Arbeiten sollen erst nach einem Klick auf den Button «Weitere Arbeiten anzeigen» angezeigt werden.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS, JS**


## 10: Bilder aus dem Projekt groß anzeigen

Auf der Seite für eine abgeschlossene Arbeit sind unten Bilder integriert. Diese sollen via Klick groß angezeigt werden.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS, JS**

## 11: Bilder aus dem Projekt als Slideshow anzeigen

Auf der Seite für eine abgeschlossene Arbeit sind unten Bilder integriert. Diese sollen in der großen Anzeige als Slideshow angezeigt werden, so dass Nutzer:innnen via Klick direkt zum nächsten Bild kommen können.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, CSS, JS**

## 12: YouTube Video responsive integrieren

Auf der Seite für eine abgeschlossene Arbeit soll unten ein YouTube Video integriert werden. Die Integration muss responsiv sein. Hier finden Sie das Video `https://www.youtube.com/watch?v=QXwDuePHw5U`

@Volker: Dauer(??) Komplexität(??) 1 - 10

**HTML, JS**

## 13: Adaptives Layout für Stammdaten bei fertigen Projekten

Die Stammdaten zu einem Projekt sollen bei kleinen und mittleren Viewports unter der Überschrift angezeigt werden. Bei sehr großen Viewports sollen diese nach rechts neben den Text verschoben werden.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**CSS**

## 14: Elegante Übergänge bei den Form Labels

Beim Formular in der Sektion «Thema vorschlagen» sollen die Label beim Klick in ein Formularfeld elegant animiert werden.

@Volker: Dauer(??) Komplexität(??) 1 - 10

**CSS**

