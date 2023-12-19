var express = require('express');
var path = require('path');
var app = express();
app.get('/services', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json'); //specifico che invio dati JSON
    res.send(JSON.stringify([
        {'nome': 'Rinnovo patente con visita medica in sede'},
        {'nome': 'Conversioni di patenti militari'},
        {'nome': 'Patente internazionale'},
        {'nome': 'Prenotazione revisione'},
        {'nome': 'Duplicato della patente (per smarrimento, furto, deterioramento)'},
        {'nome': 'Conversioni di patenti estere'}
    ]))
});
app.get('/info', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json'); //specifico che invio dati JSON
    res.send(JSON.stringify([
        {'nome':'Patente AM', 'descrizione':'Ciclomotori a due ruote (categoria L1e), veicoli a tre ruote (categoria L2e)'},
        {'nome':'Patente A1', 'descrizione':'Motocicli di cilindrata massima di 125 cm³'},
        {'nome':'Patente B', 'descrizione':'Autoveicoli la cui massa massima autorizzata non supera 3500 kg.'},
        {'nome':'Patente C1', 'descrizione':'Autoveicoli diversi da quelli delle categorie D1 o D'},
        {'nome':'Patente D', 'descrizione':'Autoveicoli progettati e costruiti per il trasporto di più di otto persone'}
    ]))
});
app.get('/contacts', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json'); //specifico che invio dati JSON
    res.send(JSON.stringify([
        {'nome':'Telefono', 'valore':'3458671298'},
        {'nome':'Email', 'valore':'patentipotenti@gmail.com'},
        {'nome':'Indirizzo', 'valore':'viale degli automobilisti, 12'}
    ]))
});
app.listen(3000, function() {
    console.log("OK");
});