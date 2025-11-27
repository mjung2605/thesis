# Exposé

## Verbesserung der Screenreader-Unterstützung in Vuetify: Eine komponentenbasierte Analyse und Optimierung der Accessibility-Implementierung nach WCAG 2.1 


## Problemfeld und Kontext 
Moderne UI-Frameworks wie Vuetify ermöglichen eine schnelle Entwicklung komplexer Frontends mit Vue.js. Dabei abstrahieren sie viele HTML- und DOM-Strukturen hinter wiederverwendbaren Komponenten. Diese Architektur erhöht jedoch die Gefahr, dass die semantische Bedeutung von Elementen und die korrekte Screenreader-Unterstützung verloren gehen.


Trotz vorhandener Accessibility-Richtlinien und ARIA-Spezifikationen wird in der Praxis deutlich, dass selbst weit verbreitete Frameworks Barrieren für Screenreader-Nutzer*innen aufweisen. Im offiziellen Vuetify-Repository finden sich zahlreiche Issues zu unvollständigen ARIA-Attributen, inkonsistentem Fokus-Management oder nicht erkannten Rollen.


Gerade im Hinblick auf gesetzliche Anforderungen wie das Barrierefreiheitsstärkungsgesetz (BFSG) ab Juni 2025 ist eine verlässliche Umsetzung der WCAG 2.1-Standards auch auf Framework-Ebene relevant. Die Arbeit untersucht deshalb, wie Vuetify-Komponenten aktuell mit Screenreader-Technologien interagieren und wie die Accessibility durch gezielte Optimierungen im Code verbessert werden kann.


## Forschungsstand 
Barrierefreiheit im Web ist durch die WCAG 2.1 des W3C umfassend definiert. Sie beschreibt unter anderem Anforderungen an semantische Struktur, Tastaturzugänglichkeit und Screenreader-Kompatibilität.  Während es zahlreiche Beiträge zu allgemeiner Web-Accessibility und automatisierten Tests (z. B. mit axe-core oder Lighthouse) gibt, fehlt eine systematische Untersuchung der Screenreader-Implementierung in komponentenbasierten Frameworks. Arbeiten zu React existieren vereinzelt, für Vue und Vuetify jedoch nicht. 


Vuetify selbst verweist in seiner Dokumentation auf Accessibility-Best-Practices, bietet aber keine durchgehende Bewertung der eigenen Komponenten. Die Kombination aus automatisierter Analyse und praktischer Optimierung im Open-Source-Repo stellt somit einen neuen Beitrag zur systematischen A11y-Verbesserung in Vue-Frameworks dar.  


## Fragestellung und Zielsetzung 

- Wie gut lassen sich ausgewählte Vuetify-Komponenten mit Screenreadern bedienen, und welche typischen Barrieren treten dabei auf?
- Welche Code-Anpassungen sind notwendig, um die Screenreader-Unterstützung zu verbessern, ohne die bestehende Architektur zu beeinträchtigen? 


Ziel der Arbeit ist eine komponentenbasierte Analyse und Optimierung der Screenreader-Kompatibilität in Vuetify. Die Ergebnisse werden dokumentiert und in Form von Pull-Requests  in das öffentliche Repository eingebracht. Zudem werden die Verbesserungen in Bezug auf ihre Wirkung durch erneutes Testen evaluiert. 


## Methodik 
- **Vorbereitung:** Einarbeitung in Vuetify-Architektur (Monorepo-Struktur) und Sichtung der Dokumentation/Contributing-Guidelines, Auswahl relevanter Komponenten auf Basis der GitHub-Issues (Label a11y). 
- **Analyse:** Durchführung von Accessibility-Tests (automatisiert (Lighthouse, a11y-Tree), manuell und mit Hilfswerkzeugen (Screenreader)) auf basis des Praxisprojekts
- **Implementierung:** Ergänzen oder Korrigieren von ARIA-Attributen, Fokus-Management und semantischen Rollen in ausgewählten Komponenten.
- **Evaluation:** Vergleich der Testergebnisse vor/nach den Anpassungen, qualitative Einschätzung der Screenreader-Nutzung.  
- **Praxisbeitrag:** Bereitstellen der optimierten Komponenten als Pull-Request im Vuetify-Repository 


## Zeitplanung  
- **Woche 1:** Literatur- und Dokumentationsrecherche (WCAG 2.1, ARIA, Vuetify-Architektur). 
- **Woche 2–3:** Auswahl der Komponenten, Aufbau der Testumgebung, Definition der Bewertungskriterien. 
- **Woche 4–5:** Durchführung der Screenreader- und ARIA-Analysen. 
- **Woche 6–7:** Umsetzung und Test der Verbesserungen, Erstellung von Pull-Requests. 
- **Woche 8–9:** Evaluation, Diskussion, Fertigstellung der schriftlichen Ausarbeitung.  


## Erwarteter Beitrag 
Die Arbeit liefert eine erste dokumentierte Analyse der Screenreader-Tauglichkeit ausgewählter Vuetify-Komponenten. Sie zeigt strukturiert auf, welche Barrieren aktuell bestehen und wie diese technisch gelöst werden können. Dadurch entsteht sowohl ein praktischer Mehrwert (konkrete Verbesserungen im Vuetify-Ökosystem) als auch ein wissenschaftlicher Beitrag zur Diskussion, wie moderne Komponentenframeworks Accessibility konsequent umsetzen können.