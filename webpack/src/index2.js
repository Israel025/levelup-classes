import axios from 'axios';

axios.get('https://swapi.co/api/people/1')
        .then(function (result){
            console.log(result)
            const h1Element = document.createElement('h1');
            const name = result.data.name
            h1Element.innerHTML = name
            document.body.appendChild(h1Element)
        })
        .catch(function(error){
            console.error(error)
        })


