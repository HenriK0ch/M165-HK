// Skript zum Löschen aller Collections

db.Alterskategorie.drop();
db.Player.drop();
db.Club.drop();
db.Reservation.drop();

print("Alle Collections wurden erfolgreich gelöscht!");


const exampleId1 = new ObjectId();
const exampleId2 = new ObjectId();
const exampleId3 = new ObjectId();

db.Player.insertMany([
  { _id: exampleId1, Name: "Beispiel Spieler 1", Alter: 25, Rank: "A", Alterskategorie: exampleId1, ClubId: exampleId1 },
  { _id: exampleId2, Name: "Beispiel Spieler 2", Alter: 30, Rank: "B", Alterskategorie: exampleId2, ClubId: exampleId2 },
  { _id: exampleId3, Name: "Beispiel Spieler 3", Alter: 35, Rank: "C", Alterskategorie: exampleId3, ClubId: exampleId3 }
]);

db.Player.deleteOne({ _id: exampleId1 });
print(`Ein Datensatz mit _id: ${exampleId1} wurde erfolgreich gelöscht.`);

db.Player.deleteMany({
  $or: [
    { _id: exampleId2 },
    { _id: exampleId3 }
  ]
});
print(`Mehrere Datensätze mit _id: ${exampleId2} oder _id: ${exampleId3} wurden erfolgreich gelöscht.`);
