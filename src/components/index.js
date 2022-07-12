// Archivos de Barril, tenemos todas las exportaciones
// en un solo lado



// SI los componentes viene exportados por defecto debemos primero importalos aquí y luego exportarlos
// de la siguiente manera:

import AddCategory from "./GifExpertApp/AddCategory"
import GifGrid from "./GifExpertApp/GifGrid"
export { AddCategory, GifGrid }


// Si los componentes tiene exportación nombrada se pueden exportar de la siguiente manera:

// export * from './GifItem'