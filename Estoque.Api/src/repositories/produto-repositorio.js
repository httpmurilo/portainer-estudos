'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');


exports.get = async() => {
   const res = await Produto.find({
            ativo:true
            }, 'titulo preco ');
        return res;
}

exports.create = async (data) => {
    var produto = new Produto(data);
    await produto.save();
}

exports.update = async (id,data) => {
   await  Produto
        .findByIdAndUpdate(req.params.id,{
            $set:{
            titulo: data.titulo,
            descricao: data.descricao,
            preco: data.preco,
        }
    });
}
exports.delete = async (id) =>{
    await Produto
        .findOneAndRemove(id)
}