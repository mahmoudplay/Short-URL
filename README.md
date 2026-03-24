
# Short-URL

An open source web and api to short links



## Run Api Locally

Clone the project

```bash
  git clone https://github.com/mahmoudplay/Short-URL.git
```

Go to the project directory

```bash
  cd my-project/api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this api, you will need to add the following environment variables to your .env file inside api directory

`PORT` - Localhost port (default: 3000)

`AUTH` - Auth code for see all urls

`MONGODB_LINK` - Your mongodb link


## API Reference

#### Get all shorted urls

```http
  GET /
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `authorization` | `string` | **Required**. Your API key |

#### Get url shorted

```http
  POST /
```

| body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{ "redirUrl": url }`  | `JSON` | **Required**. Url as string and should be vaild |



## Authors

- [@mahmoudplay](https://www.github.com/mahmoudplay)
- [@Ali Essam](https://github.com/aliessam-dev)


## Feedback

If you have any feedback, contact me in discord _mp1

