# Exposé  
## Barrierefreiheit in Frontend-Frameworks - Eine systematische Evaluierung anhand der WCAG 2.1 Standards am Beispiel von Vuetify  
## Problemfeld und Kontext 
Moderne Web-Frameworks wie Vuetify ermöglichen eine schnelle und einheitliche UI-Entwicklung, vor allem für komplexe Frontends mit Vue.js. Dennoch ist nicht sichergestellt, dass die damit erstellten Anwendungen automatisch barrierefrei sind. Die Einhaltung von Richtlinien wie den WCAG 2.1 (Web Content Accessibility Guidelines) bleibt oft in der Verantwortung der Entwickler*innen.  Gerade bei komplexen Frameworks mit vielen Komponenten ist nicht transparent, welche Elemente barrierefrei sind und wo nachgearbeitet werden muss. Aus Entwicklersicht ist die Einhaltung der WCAG 2.1 Standards besonders durch das am 28. Juni 2025 in Kraft tretende Barrierefreiheitsstärkungsgesetz (BFSG) kritisch.  
## Forschungsstand 
Barrierefreiheit im Web ist umfassend durch die WCAG 2.1 geregelt, die auf internationaler Ebene weitgehend als Standard anerkannt ist ([W3C](https://www.w3.org/mission/accessibility/)).  Während es zahlreiche Beiträge zu allgemeiner Barrierefreiheit im Web oder zu Accessibility Testing gibt, ist der spezifische Bezug auf komponentengestützte Frameworks wie Vuetify bisher kaum untersucht. Einige Analysen existieren zu komponentenbasierter Entwicklung im Framework React, aber für Vue und insbesondere Vuetify fehlen strukturierte, komponentenbezogene Bewertungen nach WCAG.  Vuetify selbst verweist zwar auf Accessibility-Best Practices, jedoch meist allgemein oder auf Ebene einzelner Beispiele ([vuetifyjs.com](vuetifyjs.com/en/features/accessibility/)). Eine quellenbasierte, systematische Komponentenanalyse nach WCAG 2.1 für Vuetify liegt derzeit nicht vor und soll hier erstmals geleistet werden.  
## Fragestellung und Zielsetzung 
- Wie barrierefrei sind die Standardkomponenten des Vuetify-Frameworks in ihrer Grundkonfiguration gemäß den Anforderungen der WCAG 2.1?
- Welche Barrieren bestehen bei der Nutzung von Vuetify-Komponenten in Bezug auf die WCAG 2.1, und welche Maßnahmen müssen Entwickler ergreifen, um diese zu beseitigen?
In der vorliegenden Arbeit wird eine Auswahl an Vuetify-Komponenten systematisch im Hinblick auf ihre Barrierefreiheit analysiert. Die gewonnenen Erkenntnisse werden in Form einem praxisorientierten Poster für Entwickler aufbereitet. Dieses soll aufzeigen, bei welchen Komponenten zusätzliche Maßnahmen erforderlich sind, um Barrierefreiheit sicherzustellen, und welche Aspekte bei der Nutzung spezifischer Vuetify-Komponenten besonders beachtet werden müssen.
## Methodik
- Systematische Klassifikation und Vorauswahl der zu betrachtenden Komponenten
- Erstellen einer Kriterienliste pro Komponente nach WCAG
- Aufbau einer lokalen Testumgebung
- Dokumentiertes Testen der Komponenten mit automatisierten Browser-Tools wie Axe und Lighthouse sowie manuelle Tests mit Screenreader NVDA 
- Erstellen einer praxisorientierten Barrierefreiheits-Checkliste für Vuetify-Entwickler  
## Zeitplanung 
- Woche 1: Literaturrecherche und -auswertung 
- Woche 2-3: Vorbereitung der Analyse (Auswahl der Komponenten sowie der zu erfüllenden Kriterien) 
- Woche 4-5: Durchführung und Auswertung der Analyse, Rohfassung der Poster 
- Woche 6: Fertigstellen der Poster 
- Woche 7-8: Anfertigung der schriftlichen Ausarbeitung
