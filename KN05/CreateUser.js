use TennisCLubDB

db.createUser({
    user: 'Koch',
    pwd: '1234',
    roles: [
        {role: "read", db: "TennisClubDB"}
    ]
})
use admin

db.createUser({
    user: 'Henri',
    pwd: '1234',
    roles: [
        {role: 'readWrite', db: 'TennisClubDB'}
    ]
})

