** Models **

User --- A user can have multiple orders, a user can have multiple teams
  - user id
  - first name
  - last name
  - email
  - password
  - phone number
  - gender?
  - self rating of 1-5

Team - a team can have many users
  - team id
  - name
  - players
  - captain (two for city league)
  - spirit captain (only for club teams)

(Possible addition depending on time)
Order - an order has one user
  - order id
  - first name
  - last name
  - email
  - items
  - price

*** Phone Number stored as string - will need to retrieve with paseInt


// How to add the admin role later //
gender: {
        type: DataTypes.STRING,
        allowNull: false
      },