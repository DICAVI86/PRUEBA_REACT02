import { createContext, useEffect, useState } from "react";

export const LibrosContexto = createContext()

export const LibrosProvider = ({children}) => {

    const [libros, setLibros] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(()=>{
        getLibros();       
    },[]);

    const getLibros = async()=>{
        const res = await fetch("/libros.json");
        const libros = await res.json();
        console.log(libros)
        setLibros(libros); 
    };

    const agregarAlCarrito = ({id, precio, titulo, imagen})=> {
        const productoPorIndex = carrito.findIndex((p)=> p.id === id);
        const producto = {id, precio, titulo, imagen, cantidad:1};

        if (productoPorIndex >= 0) {
            carrito[productoPorIndex].cantidad++;
            setCarrito([...carrito])
        } else (
            setCarrito([...carrito, producto])
        )
    };

    const incrementar = (i)=>{
        carrito[i].cantidad++;
        setCarrito([...carrito])
    }


    return (
        <LibrosContexto.Provider value={{libros, carrito, incrementar, agregarAlCarrito}}>
            {children}
        </LibrosContexto.Provider>
    )
    
}
