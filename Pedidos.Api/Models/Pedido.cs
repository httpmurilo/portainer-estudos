using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Pedidos.Api.Models
{
    public class Pedido
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public string Preco { get; set; }
        public bool Ativo { get; set; }
    }
}