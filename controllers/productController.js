constProduct= require('../models/product');



module.exports = {
  addProduct: function (req, res, next) {
    console.log(req.body);
    const newProduct = new Product({
      nome: req.body.nome,
      prezzo: req.body.prezzo,
    });
    
    newProduct.save()
    .then(product => {
      res.locals.product = product;
      res.locals.redirect = "/";
      next();
    });
  },



 getProduct: (req, res) => {
    Product.find({}).exec()
    .then(product => {
      res.locals.product = product;
      res.render("product");
     
   });
  },


removeProduct: ("/api/stuff/:id", (req, res) => {
  Product.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}),

  redirectView: function (req, res, next) {
    let redirectPath = res.locals.redirect;
    if (redirectPath) res.redirect(redirectPath);
    else next();
  }
}
