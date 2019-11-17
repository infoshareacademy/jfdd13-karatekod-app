import React from 'react';
import uuid from "uuid";

const listingsData = [ 
    
    {   id: uuid(),
        author: 'Mickiewicz',
        name: 'Adam',
        genere: 'drama',
        radius: 50,
        image: '',
        title: 'Sonety Krymskie'
    },

    {   id: uuid(),
        author: 'Kafka',
        name: 'Franz',
        genere: 'drama',
        radius: 20,
        image: '',
        title: 'Trial'
    },

    {   id: uuid(),
        author: 'Dick',
        name: 'Philip',
        genere: 'sci-fi',
        radius: 10,
        image: '',
        title: 'Valis'
    },

    {   id: uuid(),
        author: 'Tokarczuk',
        name: 'Olga',
        genere: 'drama',
        radius: 80,
        image: '',
        title: 'Before-age and other times'
    },

    {   id: uuid(),
        author: 'Woolf',
        name: 'Virginia',
        genere: 'drama',
        radius: 10,
        image: '',
        title: 'Orlando'
    },

    {   id: uuid(),
        author: 'Nalkowska',
        name: 'Zofia',
        genere: 'drama',
        radius: 90,
        image: '',
        title: 'Border'
    },

    {   id: uuid(),
        author: 'Eco',
        name: 'Umberto',
        genere: 'drama',
        radius: 50,
        image: '',
        title: 'Rose\'s name'
    },

    {
        author: 'King',
        name: 'Stephen',
        genere: 'horror',
        radius: 5,
        image: '',
        title: 'Kingdom'
    },

    {   id: uuid(),
        author: 'Achmatova',
        name: 'Anna',
        genere: 'poetry',
        radius: 70,
        image: '',
        title: 'Poetry-Collection'
    },

    {   id: uuid(),
        author: 'Kristeva',
        name: 'Julia',
        genere: 'science',
        radius: 23,
        image: '',
        title: 'Intertextuality'
    }

];

export default listingsData;