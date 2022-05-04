(() => {
  interface Product {
    id: number;
    name: string;
  }


  class ProductService {

    getProduct( id: number ) {
        console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct( product: Product ) {
        console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {

    private masterEmail: string = 'demo.test.com';

    sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ){
        console.log("Enviando correo a los clientes", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    constructor( private productService: ProductService, private mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct( id: number ) {
      // Realiza un proceso para obtener el producto y retornarlo
       return this.productService.getProduct( id );
    }

    saveProduct(product: Product ) {
      // Realiza una petición para salvar en base de datos
      return this.productService.saveProduct( product );
    }

    notifyClients() {
      this.mailer.sendEmail( ['demo.test.com'], 'to-clients' )
    }
  }

  class CartBloc {

    private itemsInCart: Object[] = [];

    addToCart( productId: number ) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc( productService, mailer );
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();


/*
? Detectar violaciones a SRP
* Nombres de clases y modulos demasiados genericos, hace que contenga muchas responabilidades.
* Cambios en el código afectan frecuenmente la clase o módulo.
* La clase involucra multiples capas.
* NUmero elevado de importaciones.
* Muchos metodos publicos.
* Excesiva cantidad de lineas de codigo.
*/