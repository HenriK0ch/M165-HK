const alterskategorie1Id = new ObjectId();
const alterskategorie2Id = new ObjectId();
const alterskategorie3Id = new ObjectId();

const player1Id = new ObjectId();
const player2Id = new ObjectId();
const player3Id = new ObjectId();

const club1Id = new ObjectId();
const club2Id = new ObjectId();

const tennisplatz1Id = new ObjectId();
const tennisplatz2Id = new ObjectId();

db.Alterskategorie.insertMany([
  { _id: alterskategorie1Id, Name: "Junior", Mindest_alter: 10 },
  { _id: alterskategorie2Id, Name: "Senior", Mindest_alter: 18 },
  { _id: alterskategorie3Id, Name: "Veteran", Mindest_alter: 35 }
]);

db.Player.insertMany([
  { _id: player1Id, Name: "Alice", Alter: 15, Rank: "A", Alterskategorie: alterskategorie1Id, ClubId: club1Id },
  { _id: player2Id, Name: "Bob", Alter: 20, Rank: "B", Alterskategorie: alterskategorie2Id, ClubId: club1Id },
  { _id: player3Id, Name: "Charlie", Alter: 40, Rank: "C", Alterskategorie: alterskategorie3Id, ClubId: club2Id }
]);

db.Club.insertMany([
  { _id: club1Id, Name: "City Club"},
  { _id: club2Id, Name: "Country Club"}
]);

const reservation1Id = new ObjectId();
const reservation2Id = new ObjectId();

db.Reservation.insertMany([
  { _id: reservation1Id, PlayerId: player1Id, TennisplatzId: tennisplatz1Id },
  { _id: reservation2Id, PlayerId: player2Id, TennisplatzId: tennisplatz2Id }
]);

print("Data inserted successfully!");
