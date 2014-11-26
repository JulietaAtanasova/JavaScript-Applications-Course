function tableGenerator(args) {
  var car, input;
  if (args) {
  	$('table').append('<tr><th>Manufactorer</th><th>Model</th><th>Year</th><th>Price</th><th>Class</th></tr>');
    for (car in args) {
      input = jQuery.parseJSON(args[car]);
      $('table').append('<tr><td>' + input.manufacturer + '</td><td>' +
          input.model + '</td><td>' +
          input.year + '</td><td>' +
          input.price + '</td><td>' +
          input.class + '</td><td>' +
          '</tr>'
        );     
    }
  }
}

$(document).ready(function () {
  tableGenerator(['{ "manufacturer": "BMW","model": "E92 320i","year": 2011,"price": 50000,"class": "Family" }',
      '{ "manufacturer": "Porsche","model": "Panamera","year": 2012,"price": 100000,"class": "Sport" }',
      '{ "manufacturer": "Peugeot","model": "305","year": 1978,"price": 1000,"class": "Family" }'
    ]);
});