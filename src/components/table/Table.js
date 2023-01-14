import React from 'react';
import Row from './Row';

const Table = () => {

    let datos = [
        {
            titulo: 'Billy Elliot',
            rating: 5,
            duracion: 123,
            premios: 2,
            genero: ['Drama', 'Comedia']
        },
        {
            titulo: 'Alicia en el país de las maravillas',
            rating: 4.8,
            duracion: 142,
            premios: 2,
            genero: ['Drama', 'Acción', 'Comedia']
        }
    ]

    return (
        <>
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Movie Table</h5>
            </div>
            <div className="container-fluid">
                <div className='table-responsive'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Título</th>
                                <th scope="col">Duración</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Género</th>
                                <th scope="col">Premios</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datos.map((dato, i) => <Row {...dato} key={dato.name + i} />)
                            }
                            <tr>
                                <td>Título</td>
                                <td>Duración</td>
                                <td>Rating</td>
                                <td>Género</td>
                                <td>Premios</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table



