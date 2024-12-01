const products= [
    
    {   id: 1, 
        name: "Blusa floral", 
        description: "Blusa de manga corta con estampado floral", 
        price: 29.99, 
        image: "https://as1.ftcdn.net/v2/jpg/10/17/81/20/1000_F_1017812026_7IHmSXFxSxzJdNZ8a2o9GCpnpTvQOksz.jpg",
        category: "Tops",

    },
    
    {   id: 2, 
        name: "Top sin mangas", 
        description: "Top sin mangas para el verano", 
        price: 12.99, 
        image: "https://t4.ftcdn.net/jpg/05/37/93/33/240_F_537933315_UHfVsCF3kRJqkF0DpcLJ24UfX2exwoBO.jpg",
        category: "Tops",
    },
    
    {   id: 3, 
        name: "Blusa de seda", 
        description: "Blusa elegante de seda", 
        price: 49.99, 
        image: "https://t4.ftcdn.net/jpg/07/43/62/61/240_F_743626147_Vwquz2ta67yMxjlPhEBCRbl2trdKw2Js.jpg",
        category: "Tops",
    },
   
    
    {   id: 4, 
        name: "Jeans ajustados", 
        description: "Jeans ajustados", 
        price: 49.99, 
        image: "https://as1.ftcdn.net/v2/jpg/00/99/18/42/1000_F_99184241_REn0FGJqzGtoOOaEDohrjWAaNK7exzuF.jpg",
        category: "Bottoms",
    },
    
    {   id: 5, 
        name: "Falda plisada", 
        description: "Falda plisada", 
        price: 39.99, 
        image: "https://as2.ftcdn.net/v2/jpg/03/97/99/51/1000_F_397995104_Ge61YUCDd77eOKMHCGZTGN1IYxgm15w8.jpg",
        category: "Bottoms",
    },
    
    {   id: 6, 
        name: "Jeans acampanados",
        description: "Jeans de estilo retro", 
        price: 44.99, 
        image: "https://as1.ftcdn.net/v2/jpg/04/85/76/86/1000_F_485768629_vQdcWapVm2yxhnYFA9uxTMHNtmmoUSJP.jpg", 
        category: "Bottoms",
    },


    {   
        id: 7, 
        name: "Sandalias con tachas", 
        description: "Sandalias negras con tachas",
        price: 19.99, 
        image: "https://as2.ftcdn.net/v2/jpg/05/32/74/45/1000_F_532744578_5rySrD0q5R6KoC60u0GrmHBGLIGYh6ow.jpg", 
        category: "Calzado",
    },
        
    {   id: 8, 
        name: "Botines de cuero", 
        description: "Botines de cuero marrones de caña alta", 
        price: 69.99, 
        image: "https://t4.ftcdn.net/jpg/10/31/45/99/240_F_1031459992_KmQrmEYiAL4ketpe1pDETo3oXT70U0i9.jpg", 
        category: "Calzado",
    },

    {   
        id: 9, 
        name: "Zapatillas deportivas", 
        description: "Zapatillas para correr", 
        price: 59.99, 
        image: "https://as1.ftcdn.net/v2/jpg/08/37/41/10/1000_F_837411022_VkL6NDn8nt3FuynE5vaxQH61AMSDG6aG.jpg",
        category: "Calzado",
    },
   
    
]

const getProducts = new Promise((resolve, reject) => {
    //simulamos un retraso de red con setTimeout
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
  
export default getProducts
