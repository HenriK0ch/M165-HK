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

db.Player.insertMany([
  { _id: player1Id, Name: "Alice", Alter: 15, Rank: "A", Alterskategorie: alterskategorie1Id, ClubId: ObjectId() },
  { _id: player2Id, Name: "Bob", Alter: 20, Rank: "B", Alterskategorie: alterskategorie2Id, ClubId: ObjectId() },
  { _id: player3Id, Name: "Charlie", Alter: 40, Rank: "C", Alterskategorie: alterskategorie3Id, ClubId: ObjectId() }
]);

const club1Id = ObjectId();
const club2Id = ObjectId();

db.Club.insertMany([
  { _id: club1Id, Name: "City Club"},
  { _id: club2Id, Name: "Country Club"}
]);

const reservation1Id = ObjectId();
const reservation2Id = ObjectId();

db.Reservation.insertMany([
  { _id: reservation1Id, PlayerId: player1Id, TennisplatzId: ObjectId(), Datum: ISODate("2024-06-24T08:00:00Z") },
  { _id: reservation2Id, PlayerId: player2Id, TennisplatzId: ObjectId(), Datum: ISODate("2024-06-25T10:00:00Z") }
]);

print("Daten wurden erfolgreich hinzugefügt.");

db.Alterskategorie.find({}, { _id: 1, Name: 1 }).forEach(doc => printjson(doc));

db.Player.find({ Name: { $regex: /Bob/ } }, { _id: 0, Name: 1, Alter: 1 }).forEach(doc => printjson(doc));

db.Club.find({
  $or: [
    { _id: club1Id },
    { Name: "Country Club" }
  ],
  Players: { $size: 1 }
}, { _id: 1, Name: 1, Players: 1 }).forEach(doc => printjson(doc));

db.Reservation.find({
  Datum: { $gte: ISODate("2024-06-24T00:00:00Z"), $lt: ISODate("2024-06-25T00:00:00Z") }
}, { _id: 1, PlayerId: 1, TennisplatzId: 1, Datum: 1 }).forEach(doc => printjson(doc));
