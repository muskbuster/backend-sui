## Bet API Documentation

### Create a New Bet Entry

- **URL:** `/bets/newbet`
- **Method:** `POST`
- **Description:** Create a new bet entry in the AllBets collection.

#### Request Body

Type: JSON Object

Properties:

- `address` (String, required): The address associated with the bet.
- `global_bet_id` (Number, required): The global ID of the bet.
- `bet_id` (Number, required): The ID of the bet.
- `bet_team1` (String, required): The name of team 1 involved in the bet.
- `bet_team1_amount` (Number, required): The amount bet on team 1.
- `bet_team2` (String, required): The name of team 2 involved in the bet.
- `bet_team2_amount` (Number, required): The amount bet on team 2.
- `bet_description` (String, required): A description of the bet.
- `bet_name` (String, required): The name of the bet.

#### Response

Status Code: 201 Created

Body: JSON Object representing the created bet entry.

### Create a New User Bet Entry

- **URL:** `/bets/userbets`
- **Method:** `POST`
- **Description:** Create a new user bet entry in the UserBets collection.

#### Request Body

Type: JSON Object

Properties:

- `bet_id` (Number, required): The ID of the bet associated with the user bet.
- `global_bet_id` (Number, required): The global ID of the bet associated with the user bet.
- `amount_deposited` (Number, required): The amount deposited for the user bet.
- `team_deposited_to` (String, required): The team the amount was deposited to.

#### Response

Status Code: 201 Created

Body: JSON Object representing the created user bet entry.

### Update an Existing Bet Entry

- **URL:** `/bets/allbets/:id`
- **Method:** `PATCH`
- **Description:** Update an existing bet entry in the AllBets collection.

#### URL Parameters

- `id`: The ID of the bet to update.

#### Request Body

Type: JSON Object

Properties:

- /* Define properties of the updated bet object here */

#### Response

Status Code: 200 OK

Body: JSON Object representing the updated bet entry.

### Get All Bet Entries

- **URL:** `/bets/allbets`
- **Method:** `GET`
- **Description:** Retrieve all bet entries from the AllBets collection.

#### Response

Status Code: 200 OK

Body: Array of JSON Objects representing bet entries.

#### Example Response

```json
[
  {
    "address": "Sui address",
    "global_bet_id": 1,
    "bet_id": 101,
    "bet_team1": "Team A",
    "bet_team1_amount": 500,
    "bet_team2": "Team B",
    "bet_team2_amount": 300,
    "bet_description": "Bet on the match between Team A and Team B",
    "bet_name": "Team A vs Team B"
  },
]

```

## Get Bet Details by ID

- **URL:** `/bets/allbets/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a specific bet entry from the AllBets collection.

### URL Parameters

- `id`: The ID of the bet.

### Response

- **Status Code:** 200 OK
- **Body:** JSON Object representing the bet entry.

#### Example Response

```json
{
  "address": "sui_address",
  "global_bet_id": 1,
  "bet_id": 101,
  "bet_team1": "Team A",
  "bet_team1_amount": 500,
  "bet_team2": "Team B",
  "bet_team2_amount": 300,
  "bet_description": "Bet on the match between Team A and Team B",
  "bet_name": "Team A vs Team B"
}
```
## Get Bet Details by ID

- **URL:** `/bets/allbets/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a specific bet entry from the AllBets collection.

### URL Parameters

- `id`: The ID of the bet.

### Response

- **Status Code:** 200 OK
- **Body:** JSON Object representing the bet entry.

#### Example Response

```json
{
  "address": "sui_address",
  "global_bet_id": 1,
  "bet_id": 101,
  "bet_team1": "Team A",
  "bet_team1_amount": 500,
  "bet_team2": "Team B",
  "bet_team2_amount": 300,
  "bet_description": "Bet on the match between Team A and Team B",
  "bet_name": "Team A vs Team B"
}
```
## Get All User Bet Entries

- **URL:** `/bets/userbets`
- **Method:** `GET`
- **Description:** Retrieve all user bet entries from the UserBets collection.

### Response

- **Status Code:** 200 OK
- **Body:** Array of JSON Objects representing user bet entries.

#### Example Response

```json
[
  {
    "bet_id": 101,
    "global_bet_id": 1,
    "amount_deposited": 100,
    "team_deposited_to": "Team A"
  },
  
]
```
## Get User Bet Details by ID

- **URL:** `/bets/userbets/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a specific user bet entry from the UserBets collection.

### URL Parameters

- `id`: The ID of the user bet.

### Response

- **Status Code:** 200 OK
- **Body:** JSON Object representing the user bet entry.

#### Example Response

```json
{
  "bet_id": 101,
  "global_bet_id": 1,
  "amount_deposited": 100,
  "team_deposited_to": "Team A"
}
```
