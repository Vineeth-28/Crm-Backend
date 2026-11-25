# CRM Backend API

## Run the API

Set `DATABASE_URL` in `.env`, then start the development server:

```bash
npm run dev
```

The server listens on port `3005` by default. Set `PORT` in `.env` to use a
different port.

## API version 1

All version 1 user endpoints are under `/api/v1/users`.

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/v1/users` | Fetch all users |
| `GET` | `/api/v1/users/:id` | Fetch one user by its ID |

For example, with the server running locally:

```bash
curl http://localhost:3005/api/v1/users
curl http://localhost:3005/api/v1/users/USER_ID
```

Replace `USER_ID` with the user's ID. A successful response contains
`success: true` and the result in `data`; fetching an unknown ID returns HTTP
`404`.
