import roletaJashtme from './fotot/roletaJashtme.png.png';
import store from './fotot/store.jpg'
import veneciane from './fotot/veneciane.png'
import pergola from './fotot/pergola.png'

const info = [
    {id: 1,
        name: 'Roleta',
        foto: roletaJashtme
    },
    {id: 2,
        name: 'Store',
        foto: store
    },
    {id: 3,
        name: 'Veneciane',
        foto: veneciane
    },
    {id: 4,
        name: 'Pergolla',
        foto: pergola
    }
]

export function getRoletat() {
    return info;
}