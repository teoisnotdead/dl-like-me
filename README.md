# Modulo

Desafío - Like Me

## Descripción
Se crea un proyecto de Node.js con Express, el cual permite realizar operaciones CRUD sobre posts con conexion a base de datos postgresql.

## Instalación
Para levantar el proyecto, se debe ejecutar los sgtes comandos:
```
npm install
npm run dev
```

## Endpoints
### `GET /posts`
```
[
    {
        "id": 1,
        "titulo": "Primer Post",
        "img": "https://placehold.co/600x400",
        "descripcion": "Este es un post de prueba",
        "likes": 0
    },
    {
        "id": 2,
        "titulo": "Picky Blinders",
        "img": "https://cdn.webshopapp.com/shops/268192/files/433182622/tommy-shelby.jpg",
        "descripcion": "Picky Blinders desde el front ",
        "likes": 0
    }
]
```

### `POST /posts`
```
{
    "titulo": "Primer Post",
    "url": "https://placehold.co/600x400",
    "descripcion": "Este es un post de prueba",
    "likes": 0
}
```