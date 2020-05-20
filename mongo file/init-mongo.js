db.createUser(
    {
        user : "root",
        pwd : "root2020",
        roles : [
            {
                role : "readWrite",
                db : "master"
            }
        ]
    }
)