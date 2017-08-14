var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var ticketSchema = new Schema({  
  fecha:    { type: String },
  origen:     { type: String, enum:
  ['Guayaquil', 'Quito', 'Cuenca', 'Ambato', 'Portoviejo' ] 
		},
  destino:     { type: String, enum:
  ['Guayaquil', 'Quito', 'Cuenca', 'Ambato', 'Portoviejo' ] 
		},
		
  precio:  { type: Number },
  cedula:   { type: Number },
  puesto:  { type: String  },
  summary:  { type: String }
});

module.exports = mongoose.model('Ticket', ticketSchema);  
