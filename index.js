function mercator(x, y) {
  return [x, Math.log(Math.tan(Math.PI / 4 + y / 2))];
}

/* D3 Inteface of structure gene (https://bitbucket.org/Andre_T)
 * 
 * Copyright (C) 2014 Andrea Tornaghi
 * Licensed under GPLv3 (http://www.gnu.org/licenses/gpl.html)
 */


//margini
var margin_isoform = {top: 100, right: 15, bottom: 15, left: 10};

//dimensione della finestra di visualizzazione dell'isoforma
var height = window.innerHeight + 100 - margin_isoform.top - margin_isoform.bottom;
var width = window.innerWidth;
var width_isoform = 300;
var height_isoform = 250;

//dimensioni fisse della finestra degli elementi selezionati (struttura espansa)
var s_w = width - margin_isoform.left - margin_isoform.right;
var s_h = 300;

//flag per segnalare l'attivazione della struttura, dello zoom e 
//della presenza della sequenza nucleotidica
var flag_structure = false, flag_zoom = false, flag_sequence = false, flag_exon = true;

//stringa per il nome del gene da visualizzare
var string_gene = "ATP6AP1";
//stringa per il pathname del file json
var default_structure = "ATP6AP1example2.json";
