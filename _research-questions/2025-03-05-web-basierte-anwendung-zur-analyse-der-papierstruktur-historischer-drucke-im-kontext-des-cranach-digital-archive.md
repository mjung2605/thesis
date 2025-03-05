---
layout: work
title: Web-basierte Anwendung zur Analyse der Papierstruktur historischer Drucke
  im Kontext des Cranach Digital Archive
datum: 05.03.2025
status: proposal
keywords: Web, Cranach Digital Archive, UX, Frontend
---
In diesem Projekt sollen die Ergebnisse der Arbeit [ChainLineNet: Deep-Learning-Based Segmentation and Parameterization of Chain Lines in Historical Prints](https://www.mdpi.com/2313-433X/7/7/120) nutzbar gemacht werden. Die Papierstruktur historischer Drucke ist eine Art einzigartiger Fingerabdruck. Papier mit gleicher Herkunft weist ähnliche Kettenlinienabstände auf. Die manuelle Messung von Kettenlinienabständen jedoch extrem zeitaufwendig.

Im Rahmen der Arbeit wurde **ChainLineNet** entwickelt, eine Deep-Learning-Methode zur automatisierten Erkennung und Parametrisierung von Kettenlinien in historischen Drucken des 16. Jahrhunderts. Dafür wurde ein end-to-end trainierbares neuronales Netzwerk auf Basis eines **konditionalen generativen adversarialen Netzwerks (cGAN)** erstellt, das sowohl die Segmentierung als auch die präzise Messung der Linien vornimmt. Mit ChainLineNet ist es möglich, Kettenlinienmuster systematisch zu analysieren und miteinander zu vergleichen, um Rückschlüsse auf die Herkunft von Papier zu ziehen. Damit können Museen und Archive effizienter arbeiten und beispielsweise Drucke identifizieren, die aus derselben Papierform stammen ("Moldmates"). Die Methode bietet somit eine wertvolle Unterstützung für die Untersuchung und Authentifizierung historischer Dokumente.

Leider fehlt hierbei noch die Brücke zu den Endnutzer:innen. Im Rahmen dieses Projekts soll diese Lücke geschlossen werden und auf Basis des ChainLineNets eine nutzbare Anwendung für Museen und Archive entwickelt werden, mit der konkrete Fragestellungen und Workflows abgebildet werden.

## Weiteres Material
- [ChainLineNet: Deep-Learning-Based Segmentation and Parameterization of Chain Lines in Historical Prints (Paper)](https://www.mdpi.com/2313-433X/7/7/120)
- [Differentiable RANSAC: Learning Robust Line Fitting](https://github.com/vislearn/DSACLine)
