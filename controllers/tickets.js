//File: controllers/facturas.js
var mongoose = require('mongoose');  
var Ticket  = mongoose.model('Ticket');

//GET - Return all facturas in the DB
exports.findAllTickets = function(req, res) {  
    Ticket.find(function(err, ticket) {
        if(err) res.send(500, err.message);
        else {
            return res.render('../views/tickets/index', {title: 'Lista de Tickets', ticket: ticket});
        }
        console.log('GET /tickets');
            res.status(200).jsonp(ticket);
    });
};

//GET - Return a Facturas with specified ID
exports.findById = function(req, res) {  
    Ticket.findById(req.params.id, function(err, ticket) {
    if(err) return res.send(500, err.message);

    console.log('GET /ticket/' + req.params.id);
        res.status(200).jsonp(ticket);
    });
};

//POST - Insert a new Facturas in the DB
exports.addTicket = function(req, res, next) {  
    console.log('POST');
    console.log(req.body);

    var ticket = new Ticket({
        fecha:      req.body.fecha,
        origen:  req.body.origen,
        destino:  req.body.destino,
        precio:     req.body.precio,
        cedula:     req.body.cedula,
        puesto:    req.body.puesto,
        summary:  req.body.summary
    });

    factura.save(function(err, ticket) {
        if(err) return res.status(500).send( err.message);
        else res.redirect('/');
        
    });
};


exports.showEditTicket = function(req, res) {  
    Ticket.findById(req.params.id, function(err, ticket) {
        
        if(err) return res.status(500).send(err.message);
        else return res.render('../views/tickets/show', {put: true, title: 'Editar Tickets', act: '/ticket/'+req.params.id, ticket:ticket});
        res.status(200).jsonp(ticket);
        
    });
};

//PUT - Update a register already exists
exports.updateTicket = function(req, res, next) {  
    Ticket.findById(req.params.id, function(err, ticket) {
	fecha:      req.body.fecha;
        origen:  req.body.origen;
        destino:  req.body.destino;
        precio:     req.body.precio;
        cedula:     req.body.cedula;
        puesto:    req.body.puesto;
        summary:  req.body.summary;

        ticket.update( {
            fecha: fecha,
	    origen: origen,
            destino: destino,
            precio: precio,
            cedula: cedula,
            puesto: puesto,
        },function(err){
		if(err) res.send("No se puede actualizar la informacion: " +err);
		else res.redirect('/');    

        });
    });
};

//DELETE - Delete a Factura with specified ID
exports.deleteTicket = function(req, res) {  
    Ticket.remove({_id: req.params.id}, function(err) {

            if(err) res.send("Error al borrar un ticket.");
            else res.redirect('/')
                //res.status(200).send();
            
       
    });
};

exports.create = function (req, res) {
    
  return res.render('../views/facturas/show', {put: false, title: 'Nueva Ticket', act: '/tickets', ticket: {}})
}
