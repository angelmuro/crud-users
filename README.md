# API  crud-users
           {
               first_name: "String",
               last_name: "String",
               email: "String",
               password: "String",
               birthday: 'YYYY/MM/DD'
            }
get /api/v1/users -> obtener todos los usuarios
post /api/v1/users -> crear un nuevo usuario
get /api/v1/users/:id -> obtener el usuario con el ID en especifico que recibes desde parametros
            
