# RDelivery

A delivery website created with ReactJS for online ordering.

## Demo

View project in production: https://danielmafra.github.io/rdelivery/

#### Desktop demo:

![RDelivery](https://i.imgur.com/LOGjGji.gif)

#### Smartphone demo:

![RDelivery](https://i.imgur.com/BLBDuYr.gif)

## Run Locally

Clone the project

```bash
  git clone https://github.com/DanielMafra/RDelivery-frontend-ReactJS.git
```

Go to the project directory

```bash
  cd RDelivery-frontend-ReactJS
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## Deployment

To deploy this project run

```bash
  yarn build
```

## API

- This project uses a fake My JSON Server API for list products.

If you want to register your own products, just clone this repository, modify and upload it to GitHub: https://github.com/DanielMafra/api.git

After that, just follow the instructions that are in https://my-json-server.typicode.com/

- The project also uses the ViaCEP API to get the address more dynamically.

You can find out more about at https://viacep.com.br/

## Features

- Consume data through API
- Breakpoints for Desktop and Smartphone
- Increment and decrement products in the cart
- Add note to product
- Form data validation
- ContextAPI and custom Hooks
- Phone field mask
- Get address via API through zip code
- Save the address used in localStorage
- Use the address in localStorage as default

## Authors

This project was coded by [@danielmafra](https://www.github.com/danielmafra) using a UI Design created by [@isadorastan](https://github.com/isadorastan). 
