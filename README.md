<p align="center">
  <a href="https://github.com/criscue93" target="blank"><img src="src/img/logo.png" width="200" alt="KodeMain Logo" /></a>
</p>

<p align="center"></p><p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

## Description

SMS - API, microservice for sending sms.

## Installation

```bash
$ npm install
```

## .ENV

In the .env.example file are the environment variables to be used to run the project.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Steps

Ingresar [Twilio](https://www.twilio.com)

Se tiene que crear una cuenta en Twilio y configurar el número para el envio de los mensajes, además de obtener el SID y el TOKEN para poder hacer el envío correspondiente

### Envio de SMSs

```bash
EndPoint: POST - url/api/v1/send
{
  "numero": "Número de celular al cual se enviará el SMS, empezando con el codigo del país",
  "mensaje": "Mensaje a enviar",
  "funcionarioId": id del funcionario que envia el sms,
  "aplicacion": "codigo de la aplicación de la que se envia el mensaje"
  "guardar": truo or false,
}
```

## Stay in touch

- Author - Ing. Cristian Cueto V.
- Developer - Ing. Cristian Cueto V.

## License

SMS - API [MIT licensed](LICENSE).
