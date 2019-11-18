import React from 'react';
import uuid from "uuid";

const listingsData = [ 
    
    {   id: uuid(),
        author: 'Mickiewicz',
        name: 'Adam',
        genere: 'drama',
        radius: 50,
        image: './images/mickiewicz.jpg',
        title: 'Sonety Krymskie'
    },

    {   id: uuid(),
        author: 'Kafka',
        name: 'Franz',
        genere: 'drama',
        radius: 20,
        image: './images/kafka.jpg',
        title: 'Trial'
    },

    {   id: uuid(),
        author: 'Dick',
        name: 'Philip',
        genere: 'sci-fi',
        radius: 10,
        image: './images/dick.jpg',
        title: 'Valis'
    },

    {   id: uuid(),
        author: 'Tokarczuk',
        name: 'Olga',
        genere: 'drama',
        radius: 80,
        image: './images/tokarczuk',
        title: 'Before-age and other times'
    },

    {   id: uuid(),
        author: 'Woolf',
        name: 'Virginia',
        genere: 'drama',
        radius: 10,
        image: './images/orlando.jpg',
        title: 'Orlando'
    },

    {   id: uuid(),
        author: 'Nalkowska',
        name: 'Zofia',
        genere: 'drama',
        radius: 90,
        image: './images/nalkowska.jpg',
        title: 'Border'
    },

    {   id: uuid(),
        author: 'Eco',
        name: 'Umberto',
        genere: 'drama',
        radius: 50,
        image: './images/eco.jpg',
        title: 'Name of Rose'
    },

    {   
        id: uuid(),
        author: 'King',
        name: 'Stephen',
        genere: 'horror',
        radius: 5,
        image: './images/king.jpg',
        title: 'Kingdom'
    },
    {
        id: uuid(),
        author: 'Achmatova',
        name: 'Anna',
        genere: 'poetry',
        radius: 70,
        image: '.images/achmatova.jpg',
        title: 'Poetry-Collection'
        
    },

    

    {   id: uuid(),
        author: 'Kristeva',
        name: 'Julia',
        genere: 'science',
        radius: 23,
        image: './images/kristeva.jpg',
        title: 'Intertextuality'
    }

];

export default listingsData;