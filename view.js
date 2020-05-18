let $ = require('jquery')  // jQuery now loaded and assigned to $
let count = 0
var target= "" , destiny="" , CUR_CODE="";
var jsonresponse;


var Currency = {

  "United States Dollar":"USD",
  "Canadian Dollar" : "CAD",
  "Hong Kong Dollar" : "HKD",
  "Icelandic Króna" : "ISK" ,
  "Philippine peso" : "PHP" ,
  "Hungarian forint" : "HUF" ,
  "Danish krone" : "DFK" ,
  "Czech koruna" : "CZK" ,
  "Australian dollar" : "AUD" ,
  "Romanian leu" : "RON" ,
  "Swedish krona" : "SEK" ,
  "Indonesian Rupiah" : "IDR" ,
  "Brazilian real" : "BRL" ,
  "Indian rupee" : "INR" ,
  "Russian Rouble" : "RUB" ,
  "Croatian kuna" : "HRK" ,
  "Japanese yen" : "JPY" ,
  "Thai baht" : "THB" ,
  "Swiss franc" : "CHF" ,
  "Singapore dollar": "SGD" ,
  "Polish złoty" : "PLN" ,
  "Bulgarian lev" : "BGN" ,
  "Turkish lira": "TRY" ,
  "Chinese Yuan": "CNY" ,
  "Norwegian krone": "NOK" ,
  "New Zealand dollar": "NZD" ,
  "South African rand": "ZAR" ,
  "Mexican Peso": "MXN" ,
  "Israeli Shekel": "ILS" ,
  "Pound sterling": "GBP" ,
  "South Korean won": "KRW" ,
  "Malaysian ringgit": "MYR" ,


}

var tochange = "torate";

var exrates = { "from" : "USD" , "to" : "CAD" , "base" : "USD"}


var apistring = "https://api.exchangeratesapi.io/latest?symbols="+exrates["from"]+","+exrates["to"]+"&base="+exrates["base"];



$("#amount").change(function() {

var x = exrates["from"];
var y = exrates["to"];

  var leftvalue = JSON.stringify(jsonresponse["rates"][x]);
  var rightvalue = JSON.stringify(jsonresponse["rates"][y]);
  
if (tochange == "torate" )  {

var textboxvalue = $('#amount').val();

  $('#torate').text((textboxvalue*rightvalue).toFixed(2));

  $("#rate").text(textboxvalue);

}


if (tochange == "rate" )  {

  var textboxvalue = $('#amount').val();
  
    $('#rate').text((textboxvalue*leftvalue).toFixed(2));
  
    $("#torate").text(textboxvalue);
  
  
  }

  

})


  






$('a').click(function(e) {


  var getdata = document.getElementById(e.target.id).innerHTML;

$('#'+target).text(getdata);

$('#mainp').css({"opacity":"0%" , "transition-duration":"1000ms" , "visibility":"hidden" })

exrates[destiny] = Currency[getdata];

$('#'+CUR_CODE).text(Currency[getdata]);

$("#rate").text("Rate");

$("#torate").text("Rate");

})


$('a').mouseenter(function(e) {



$('#'+e.target.id).css({"background-color" : "white" , "color":"black"})

})

$('a').mouseleave(function(e) {



  $('#'+e.target.id).css({"background-color" : "#333333" , "color":"white"})
  
  })






$('.showrate').on("mouseenter" , () => {


  target = "unitname"

  destiny = "from"

  CUR_CODE = "shortunit"
 
  
  $('#deebug').text(target)

})



$('.torate').on("mouseenter" , () => {


  target = "tounitname"

  destiny = "to"

  CUR_CODE = "toshortunit"

  $('#deebug').text(target)
})



$('#rate').on('click' , () => {

tochange = "torate";

exrates["base"] = exrates["from"];
apistring = "https://api.exchangeratesapi.io/latest?symbols="+exrates["from"]+","+exrates["to"]+"&base="+exrates["base"];

$.getJSON(apistring, function(result){
      
      jsonresponse = result;
    });


$("#amount").css({"opacity" :"100% " , "transition-duration" : "1000ms" , "visibility":"visible" })
$(".maindiv").css({"margin-top" :"15%" , "transition-duration" : "500ms" })

$('#mainp').css({"opacity":"0%" , "transition-duration":"1000ms" , "visibility":"hidden" })

})

$('#torate').on('click' , () => {


  tochange = "rate";
  exrates["base"] = exrates["to"];
  
  apistring = "https://api.exchangeratesapi.io/latest?symbols="+exrates["from"]+","+exrates["to"]+"&base="+exrates["base"];

  $.getJSON(apistring, function(result){
      
    jsonresponse = result;
  });


  $("#amount").css({"opacity" :"100% " , "transition-duration" : "1000ms" , "visibility":"visible" })
  $(".maindiv").css({"margin-top" :"15%" , "transition-duration" : "500ms" })

  $('#mainp').css({"opacity":"0%" , "transition-duration":"1000ms" , "visibility":"hidden" })
  
  })



$('#unitname').on('click' , () => {

  $('#mainp').css({"opacity":"80%", "transition-duration":"1000ms" ,  "visibility":"visible" })


})


$('#tounitname').on('click' , () => {

  $('#mainp').css({"opacity":"80%", "transition-duration":"1000ms" ,  "visibility":"visible" })

})



 $('#rate').on('mouseenter' , () => {



$('#rate').css({  "transition-duration":"100ms",  "font-size": "210%"})
$("#unitname").css({  "transition-duration":"800ms" , "opacity":"0%" , "margin-left":"270px"})

$("#shortunit").css({  "transition-duration":"800ms", "opacity":"100%" })

 })




 $('#rate').on('mouseleave' , () => {

   $('#rate').css({ "transition-duration":"100ms",  "font-size": "100%"  })

   $("#unitname").css({  "transition-duration":"800ms", "opacity":"100%" , "margin-left":"0px"})
   $("#shortunit").css({  "transition-duration":"800ms", "opacity":"0%" })
   
    })





    $('#torate').on('mouseenter' , () => {
   
   

      $('#torate').css({  "transition-duration":"100ms",  "font-size": "210%"})
      $("#tounitname").css({  "transition-duration":"800ms" , "opacity":"0%" , "margin-left":"270px"})
      
      $("#toshortunit").css({  "transition-duration":"800ms", "opacity":"100%" })
      
       })
      
       $('#torate').on('mouseleave' , () => {
      
         $('#torate').css({ "transition-duration":"100ms",  "font-size": "100%"  })
      
         $("#tounitname").css({  "transition-duration":"800ms", "opacity":"100%" , "margin-left":"0px"})
         $("#toshortunit").css({  "transition-duration":"800ms", "opacity":"0%" })
         
          })






 $("#mainp").on("mouseleave" , () => {



   $('#mainp').css({"opacity":"0%" , "transition-duration":"1000ms" , "visibility":"hidden" })

 })



 $('#amount').on('mouseleave' , () => {

if ($("#amount").val().length === 0) {

  $("#amount").val(0);
}

  $(".maindiv").css({"margin-top" :"0%" , "transition-duration" : "500ms" })

  $("#amount").css({"opacity" :"0% " , "transition-duration" : "1000ms" , "visibility":"hidden" })

 

 })