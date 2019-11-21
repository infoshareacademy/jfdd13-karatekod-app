
import uuid from "uuid";

const listingsData = [ 
    
    {   id: uuid(),
        autor: 'Mickiewicz Adam',
        
        type: 'drama',
        condition: 4,
        iUrlmage: 'https://m.media-amazon.com/images/I/71POgs4xodL._AC_UY218_ML3_.jpg',
        title: 'Sonety Krymskie'
    },

    {   id: uuid(),
        autor: 'Kafka Franz',
        
        type: 'drama',
        condition: 4,
        imageUrl: 'https://m.media-amazon.com/images/I/71nOuOkfieL._AC_UY218_ML3_.jpg',
        title: 'Trial'
    },

    {   id: uuid(),
        autor: 'Dick Philip',
        
        type: 'sci-fi',
        condition: 3,
        imageUrl: 'https://m.media-amazon.com/images/I/818R7hS2I1L._AC_UY218_ML3_.jpg',
        title: 'Valis'
    },

    {   id: uuid(),
        autor: 'Tokarczuk Olga',
        
        type: 'drama',
        condition: 5,
        imageUrl: 'https://m.media-amazon.com/images/I/71vT+W7LigL._AC_UY218_ML3_.jpg',
        title: 'Before-age and other times'
    },

    {   id: uuid(),
        autor: 'Woolf Virginia',
        
        type: 'drama',
        condition: 5,
        imageUrl: 'https://m.media-amazon.com/images/I/71u0+xPr12L._AC_UY218_ML3_.jpg',
        title: 'Orlando'
    },

    {   id: uuid(),
        autor: 'Nalkowska Zofia',
        
        type: 'drama',
        condition: 3,
        imageUrl: 'https://m.media-amazon.com/images/I/8152BeGLkTL._AC_UY218_ML3_.jpg',
        title: 'Boundary'
    },

    {   id: uuid(),
        autor: 'Eco Umberto',
        
        type: 'drama',
        condition: 1,
        imageUrl: 'https://m.media-amazon.com/images/I/91H9StSOJGL._AC_UY218_ML3_.jpg',
        title: 'Name of Rose'  
    },


    {   
       
        autor: 'King Stephen',
        
        type: 'horror',
        condition: 5,
        imageUrl: 'https://m.media-amazon.com/images/I/91DkmcRi4sL._AC_UY218_ML3_.jpg',
        title: 'Kingdom'
    },
    {
        id: uuid(),
        autor: 'Achmatova Anna',
        
        type: 'poetry',
        condition: 3,
        imageUrl: 'https://m.media-amazon.com/images/I/91ewNSl222L._AC_UY218_ML3_.jpg',
        title: 'Poetry-Collection'
        
    },

    

    {   id: uuid(),
        autor: 'Kristeva Julia',
        
        type: 'science',
        condition: 2,
        imageUrl: 'https://m.media-amazon.com/images/I/91lMICvbU3L._AC_UY218_ML3_.jpg',
        title: 'Intertextuality'
    }

];

export default listingsData;