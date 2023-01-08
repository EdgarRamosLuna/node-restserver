const { response, request } = require('express');

const usersGet = (req = request, res = response)  =>{
    const {q, nombre = 'No Name', apikey, page = 1, limit} = req.query;
    res.json({
        //ok:true,
        message: 'Hello World! 1 - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usersPut = (req, res)  =>{
    const {id} = req.params;
    //console.log(req.params.id);
    res.json({
        //ok:true,
        message: 'Put se actualizao ',
        id
    });
}

const usersPost = (req, res)  =>{
    const {nombre, edad} = req.body;
    res.json({
        //ok:true,
        message: 'api - post request',
        nombre,
        edad
    });
}

const usersDelete = (req, res)  =>{
    res.json({
        //ok:true,
        message: 'Hello World! 4'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete

}