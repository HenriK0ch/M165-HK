# A
![ConnectionFailed](ConnectionFailed.png)

```
use TennisCLubDB

db.createUser({
    user: 'Koch',
    pwd: '1234',
    roles: [
        {role: "read", db: "TennisClubDB"}
    ]
})
db.createUser({
    user: 'Henri',
    pwd: '1234',
    roles: [
        {role: 'readWrite', db: 'TennisClubDB'}
    ]
})

```
![ConnectionFailed](SnapshotErstellt.png)
![ConnectionFailed](BeforeDelete.png)
![ConnectionFailed](DroppedCollection.png)
![ConnectionFailed](BothVolumes.png)
![ConnectionFailed](Restored.png)

# B

### 1

![ConnectionFailed](KochLoggedIn.png)
![ConnectionFailed](KochNotAuthorized.png)
![ConnectionFailed](HenriLoggedIn.png)
![ConnectionFailed](HenriCreate.png)


Ich habe das alte volumen getrennt und aus dem snapshot ein Volumen gemacht und dann angeheangt.

### 2

![ConnectionFailed](Before.png)
![ConnectionFailed](DumpShell.png)
![ConnectionFailed](Deleted.png)
![ConnectionFailed](Restore.png)
![ConnectionFailed](After.png)


# C
### Replication
Dabei wird die gesamte Datenbank auf mehreren Servern gespiegelt, sodass bei Ausfall eines Servers die Daten noch von anderen Servern abgerufen werden können. Meistens gibt es einen Master Server und dann die Slave Server die die Daten speigeln.
![Replication](https://webimages.mongodb.com/_com_assets/cms/lly2dso5vg9pytd6i-image5.jpg?auto=format%252Ccompress)
### Sharding
Sharding  ist eine Methode zur Skalierung von Datenbanken, bei der der gesamte Datenbestand horizontal auf mehrere unabhängige Datenbankinstanzen (Shards) aufgeteilt wird. Wir der Name schon sagt werden die Daten wie Splitter aufgeteilt auf mehreren servern. Man hat also nicht alle daten nur auf einem Server.
![Sharding](https://webimages.mongodb.com/_com_assets/cms/lly1yiwh4ydk2oy7b-image3.png?auto=format%252Ccompress)

### Meine Firma (Google)
Fuer Google wuerde ich Sharding empfehlen, das sie mit extrem viel Daten arbeiten und alle Daten auf nur einen Server zu bekommen auch sehr schwierig ist. So ist es auch leistungsfeahiger weil die last auf mehrere server vertielt wird.
