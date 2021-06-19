import React from 'react';
import './App.css';

function App() {
  var pokemons = [
    {
      id: '001',
      nome: 'Spanka-mente',
      img: 'https://images.leafly.com/flower-images/pineapple-express.png?auto=compress,format&w=480&dpr=1',
      types: [
        { name: 'indica' }
      ],
      weaknesses: [
        { name: 'Informacao' },
        { name: 'Informacao ad' },
      ]
    },
    {
      id: '002',
      nome: 'Og kush',
      img: 'https://www.seedsman.com/media/catalog/product/cache/23/image/9df78eab33525d08d6e5fb8d27136e95/o/g/og-kush-fem.png',
      types: [
        { name: 'Og Kushonha' }
      ],
      weaknesses: [
        { name: 'Informacao' },
        { name: 'Informacao ad' },
      ]
    },
    {
      id: '003',
      nome: 'Outra erva',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51pMwEakkBL.png',
      types: [
        { name: 'folha' }
      ],
      weaknesses: [
        { name: 'Canhamo' },
        { name: 'Informacao' },
      ]
    },  
    
  ];

  return (
    <div className='container-app'>

      <div className='pokemon-list-container'>
        <div className='pokemon-list'>
          {pokemons.map((item, index) => {
            const {
              id = 0 ,
              nome = '',
              img = '',
              types = [],
              weaknesses = [],
            } = item;

            const isBulbasaur = id === 1 && nome ==='Bulbasaur';
            if (isBulbasaur) {
              return <></>;
            }
            return (
                <div className='pokemon-item-container'>
                  <div className='pokemon-item-header'>
                    <span className='pokemon-name'>{nome}</span> 
                    <span className='pokemon-id'>Nº {id}</span>
                  </div>

                  <div className='pokemon-card'>
                    <div className='pokemon-image'>
                    <img className='imagem' src={img} />
                    </div>

                    <div className='pokemon-item-info' id='info'>
                      <div className='pokemon-type'>
                      <div className='title-container'>
                        <span className='title'>Type</span>
                      </div>

                        <div className='type-list'>
                          {types.map((type) => (
                            <div className={'badge-type ' + type.name}>
                              <span className='text-type'>{type.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className='pokemon-weaknesses'>
                        <div className='title-container'>
                          <span className='title'>Weaknesses</span>
                        </div>  
                    
                        <div className='type-list'>
                          {weaknesses.map((weaknesses) => (
                            <div className={'badge-type ' + weaknesses.name}>
                              <span className='text-type'>{weaknesses.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
              );
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
