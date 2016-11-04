
Initial draft

**Home View**
- Buttons: Start, Impressum, Kontakt
- Falls mit Highscore: die Top Ten jeweils: Total, Month, Week, Today

**Invasion Setup View**
- Tutorial wird angezeigt, bestehend aus mehreren Popups die mit Pfeilen und Text beschreiben was zu tun ist. Das Tutorial hat next, prev,  sowie einen „cancel and do not show again“ Buttons. 
    1. drag invaders from the armory to the grid (Pfeil von Armory auf Grid)
	2. invaders cost credits, unused credits are kept for the next level (Pfeil auf vorhandenes Gold und Ausgaben)
	3. once finished, press the „invade“ button to initiate the invasion. (Pfeil auf den Invade Button)
	4. surrender, give up on invading the planet (Pfeil auf den Cancel Invasion Button)
		- Der Spieler setzt nun seine Invasions-Streitmacht zusammen, und kann sich Infos über die zur Verfügung stehenden Invaders durchlesen.
		- Idee: ein „random“ Button der ein zufälliges Setup zusammensetzt. Das zufällig zusammengesetzte Setup hat einen Discount, kostet also weniger, kann aber auch nicht mehr manipuliert werden, außer durch wiederholtes Klicken auf „random“, was jedesmal Credits kostet. Könnte man „Panic Attack“ nennen.
		- Vielleicht auch kaufbar: Buffs. Kosten Credits, können je einmal während der Version aktiviert werden, machen dann die Invader schneller, unzerstörbar usw.
		- Der Spieler klickt auf „Invade“ wenn er zufrieden ist.

		**Invasion Battle View**
		- von oben nach unten: Invader, Schilde, verteidigende Geschütze
		- Buttons: einen für Invasionsabbruch, weitere für einsetzbare Buffs
		- großer „launch“ Button in der Mitte, der nach Klick einen Countdown von 3 runterzählt
		- nach Ablauf des Countdowns bewegen sich die Invader als Block wie erwartet horizontal hin und her, rutschen bei Berührung einer Seite einen Schritt nach unten.
		- Manche Invader ballern nach unterschiedlichen Regeln auf die Verteidiger.
		- Als Verteidigungsanlagen gibt es unterschiedliche Formen und Materialien: Beton, Schutzfelder, Stahl usw, die alle gegen unterschiedliche Waffen der Invader unterschiedlich empfindlich (oder immun) sind. Manche anlagen sind auch breiter, dicker, schmaler oder wie auch immer.
		- Die AI-Geschütze gibt es auch in unterschiedlichster Form: stationär oder beweglich, unterschiedliche Geschwindigkeiten, unterschiedliche Waffen, intelligent (Schüssen ausweichend, auf bestimmte Stellen zielend), auf die Invader oder nur deren Schüsse zielend, unzerstörbar uswusf.
		- Die Invasion ist erfolgreich wenn entweder alle AI-Geschütze vernichtet wurden oder ein Invader für eine Landung tief genug ist.
		- Bei Niederlage: Popup mit Infos sowie einen Button mit dem man zurück zum Invasion Setup View kommt. Falls man die Mission abgebrochen hat behält man die geflohenen Invader. Credits bekommt man für jene die gefallen sind nicht wieder.
		- Bei Sieg: identisch, aber man kommt eben zum Invasion Setup View des nächsten Levels. Außerdem muss der Spieler eine von drei Belohnungen auswählen. Beispiele: Bonus Credits, eine neue Invader-Klasse, neue Buffs, ein größeres Grid, permanente Schiff-Verbesserungen (Geschwindigkeit, größere Sprünge nach unten bei Berührung des Randes, größerer Abstand für die Landung möglich, schnellere Schussgeschwindigkeit, einen Teil der Credits von bei Niederlage verlorenen Schiffen gibt es zurück, uswusf).
		- Falls zutreffend gibt es zwischendurch Hinweise auf geschaffte Achievements

		**Highscore View**
		- Zunächst gibt es eine Statistiken-Ansicht. Invader gekauft, Level geschafft, teuerste Invasionsarmee in einem Level usw.
		- Bei Klick auf next kann man entweder einen Namen angeben oder sich mit Facebook / Steam oder ähnlichen Zeugs einloggen
		- Bei Klick auf „next“ kommt man zum eigentlichen Highscore View. Dort sieht man die Top 10 oder Top 20 von: überhaupt, monat, woche, tag. Hat der User sich angemeldet oder einen Namen angegeben sieht man auch die Spieler die ungefähr so gut waren wie man selbst. Bei Anmeldung von Facebook wird der Name verwendet, bei Steam der Nick und Avatar.
		- im Hintergrund sieht man jubelnde verteidiger und fliehende schiffe
		- bei Klick auf „home“ (oder next oder was auch immer) geht’s wieder zum Home View

