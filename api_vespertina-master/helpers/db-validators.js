const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Animal = require('../models/animal');

const esRoleValido = async (role = '') => {
    const existeRol = await Role.findOne({ role });
    if (!existeRol) {
        throw new Error(`El rol ${role} no existe en la base de datos`);
    }
}

const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya esta registrado`);
    }
}

const existeUsuarioById = async (id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error(`El usuario con el ${ id } no existe`)
    }
}

const existeAnimalById = async (id = '') => {
    const existeAnimal = await Animal.findOne({id});
    if(existeAnimal){
        throw new Error(`La Mascota con el ${ id } no existe`)
    }
}


module.exports ={
    esRoleValido,
    existenteEmail,
    existeUsuarioById,
    existeAnimalById
}