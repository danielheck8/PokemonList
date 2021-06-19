import React from 'react';
import './App.css';

function App() {
  var pokemons = [
    {
      id: '001',
      nome: 'Bulbasaur',
      types: [
        { name: 'grass' }
      ],
      weaknesses: [
        { name: 'fire' }
      ]
    },
    {
      id: '007',
      nome: 'Squirtle',
      types: [
        { name: 'water' }
      ],
      weaknesses: [
        { name: 'grass' },
        { name: 'electric' },
      ]
    },
  ];

  //Comentario teste

  return (
    <div className='container-app'>

      <div className='pokemon-list-container'>
        <div className='pokemon-list'>
          {pokemons.map((item, index) => {
            const {
              id = 0 ,
              nome = '',
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
                      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} />
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
