# Czernin Custom Knives

seaaaaavaaas

## Installation
Mach ein Terminal-Fenster auf:  
*Kopfleiste/Terminal/Neues Terminal *
Beim ersten Ausführen eines Updates, musst du erst die folgenden 2 Kommandos ins Terminal kopieren und *Enter* drücken.  
`chmod +x ./install.sh`  
`./install.sh`  

## Updates
### 1. Web-Inhalte bearbeiten
* Fließtexte können im `index.html` bearbeitet werden. Bitte um Vorsicht!  
* Im Ordner `knives/images/gallery` können neue Bilder in die jeweiligen Ordner eingefügt werden.  
Falls möglich, bitte die Bilder klein halten (Größe reduzieren, DPI nicht größer als 150 ... 75 reichen wahrscheinlich).  
Wichtig: Dateinamen *ohne* Abstände und Umlaute.
Speichern vor upload   *command s*, nach allen Änderungen

### 2. Web-Inhalte hochladen
Mach ein Terminal-Fenster auf:  
*Kopfleiste/Terminal/New Terminal *  

Ab dann kannst du immer ein automatisches Update der Website durchführen, indem du das folgende Kommando ins Terminal einfügst und *Enter* drückst.  
`./update.sh`  
Beim ersten Mal wirst du nach dem FTP-Username und -Passwort gefragt. Diese sind im Easyname festgelegt (aber ich verrat's dir auch).  
Ab dann wirst du nur noch nach deinem Computer-Passwort gefragt. Das tippste ein und ciao!  
<br>
Folgende Frage wird dir beim Upload gestellt:  
`The remote file /html/knives already exists. Choose what action to take:`  
Darauf tippst du folgendes ins Terminal ein:  
`compare`  
Dann drückste *Enter* und der Uplaod wird durchgeführt.

### 3. Update prüfen
Browser speichern immer Inhalte kurzfristig, um nicht bei jedem Aufruf Laden alles neu laden müssen. Das nennt sich *Caching*. Drum sind Änderungen uU. nicht gleich sichtbar.  
Laden ohne Caches -> *SHIFT* gedrückt halten und neu laden

