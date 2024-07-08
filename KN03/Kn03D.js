db.Alterskategorie.drop();
db.Player.drop();
db.Club.drop();
db.Reservation.drop();

print("Alle Collections wurden gelöscht.");

const alterskategorie1Id = ObjectId();
const alterskategorie2Id = ObjectId();
const alterskategorie3Id = ObjectId();

db.Alterskategorie.insertMany([
  { _id: alterskategorie1Id, Name: "Junior", Mindest_alter: 10 },
  { _id: alterskategorie2Id, Name: "Senior", Mindest_alter: 18 },
  { _id: alterskategorie3Id, Name: "Veteran", Mindest_alter: 35 }
]);

const player1Id = ObjectId();
const player2Id = ObjectId();
const player3Id = ObjectId();

db.Player.insertOne({ _id: player1Id, Name: "Alice", Alter: 15, Rank: "A", Alterskategorie: alterskategorie1Id, ClubId: ObjectId() });
db.Player.insertOne({ _id: player2Id, Name: "Bob", Alter: 20, Rank: "B", Alterskategorie: alterskategorie2Id, ClubId: ObjectId() });
db.Player.insertOne({ _id: player3Id, Name: "Charlie", Alter: 40, Rank: "C", Alterskategorie: alterskategorie3Id, ClubId: ObjectId() });

const club1Id = ObjectId();
const club2Id = ObjectId();

db.Club.insertMany([
  { _id: club1Id, Name: "City Club", Players: [player1Id, player2Id] },
  { _id: club2Id, Name: "Country Club", Players: [player3Id] }
]);

const reservation1Id = ObjectId();
const reservation2Id = ObjectId();

db.Reservation.insertMany([
  { _id: reservation1Id, PlayerId: player1Id, TennisplatzId: ObjectId(), Datum: ISODate("2024-06-24T08:00:00Z") },
  { _id: reservation2Id, PlayerId: player2Id, TennisplatzId: ObjectId(), Datum: ISODate("2024-06-25T10:00:00Z") }
]);

print("Daten wurden erfolgreich hinzugefügt.");

db.Player.updateOne(
  { _id: player1Id },
  { $set: { Rank: "B" } }
);

db.Club.updateMany(
  { $or: [{ _id: club1Id }, { _id: club2Id }] },
  { $addToSet: { Players: player3Id } }
);

db.Alterskategorie.replaceOne(
  { _id: alterskategorie1Id },
  { _id: alterskategorie1Id, Name: "Junior Player", Mindest_alter: 12 }
);

print("Daten wurden erfolgreich verändert.");
