(function () {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems
  });

  var gems = [
    {
      name: "blah",
      price: 111,
      description: 'asdas',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: "basil",
      price: 5.95,
      description: 'asdasd',
      canPurchase: false,
    }
  ];

})();

