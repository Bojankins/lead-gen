/* global __dirname:true */
/* jshint unused:false */

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

(function(){
  'use strict';

  $(document).ready(init);



  function init(){
    $('#btnSubmitModel').click(submitModel);
    // $('#btnSubmitPrice').click(submitPrice);
  }

  function submitModel(){
    console.log('hi');
//     var width = $('#width').value;
//     var length = $('#length').value;
//     var eave = ('#eave').value;
//     var zip = $('zip').value;
//     var bays = $('bays').value;
//     var standingSeam = $('StandingSeam').value;

//         $.getJSON('ToolshedApiImpl.svc/GetQuotes/' + zip + '/' + length + '/' + width + '/' + eave + '/' + bays + '/' + standingSeam, function (data) {
//             var tablist = [];

//             /* loop through array */
//             // do this if we want to show the results to a table... probably not for a typical user
            
//             $.each(data.Quotes, function (index, d) {
//                 tablist.push({ QUOTE: d.QNum, WEIGHT: d.Weight, PRICE: d.Price, DISTRICT: d.District });
//             });
            
//             var tdiv = $('quoteResults');
//             tdiv.innerHTML =
//                 '<br />' +
//                 'Get Quotes Results: ' + data.Answer + '<br/>' +
//                 'Average price: $' + data.Average + '<br/>' +
//                 'High price: $' + data.Hi + '<br/>' +
//                 'Low price: $' + data.Lo + '<br/>' +
//                 'Sales Contact: <a href='mailto:' + data.Contact.Email + ''>' + data.Contact.Name + '</a><br/>' +
//                 'Sample Quotes:<br/>' + tableData;
//   });
};

    // function submitPrice(){
    //     var qnum = $('Quote').value;

    //     $.getJSON('ToolshedApiImpl.svc/RunPricing/' + qnum, function (data) {

    //         var tablist = [];

    //         /* loop through array */                    
    //         $.each(data.Parts, function (index, d) {
    //             tablist.push({ PART: d.Name, LENGTH: d.Length, WIDTH: d.Width, QTY: d.Qty, PRICE: d.Price });
    //         });
            
    //         var tdiv = $('quoteResults');
    //         tdiv.innerHTML =
    //             '<br />' +
    //             'Re-Price Results: ' + data.ServiceResults.Success + '<br/>' +
    //             'Quote Number: ' + data.QNum + '<br/>' +
    //             'Total Price: $' + data.TotalPrice + '<br/>' +
    //             'Secondary Price: $' + data.SecondaryPrice + '<br/>' +
    //             'Part BOM<br/>' + tableData;

    //     });
    // }

    })();