# Microserviço de autenticação com Nodejs

Este é um projeto desenvolvido durante algumas lives para dissiminação de conhecimento dentro da [DIO](https://digitalinnovation.one/), uma plataforma de cursos gratuíta que todo DEV deveria conhecer! :wink:

Neste projeto criei um **microserviço de autenticação** que poderá compor a sua caixinha de ferramentas e que se tornará muito útil para o dia a dia. :hammer::wrench:

## Composição do projeto

Neste projeto Temos alguns **Endpoints Base** que podem ser extendidos da forma mais adequada para cada contexto. 

São eles:

### Usuários

* GET /users
* GET /users/:uuid
* POST /users
* PUT /users/:uuid
* DELETE /users/:uuid

### Autenticação

* POST /token
* POST /token/validate
