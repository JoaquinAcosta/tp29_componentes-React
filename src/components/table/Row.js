import React from 'react'

const Row = (props) => {
    return (
        <>
            <tr>
                <td>{props.titulo}</td>
                <td>{props.duracion}</td>
                <td>{props.rating}</td>
                <td>
                    <ul>
                        {
                            props.genero.map((item, i) => <li key= {item + i}>{item}</li>)
                        }
                    </ul>
                </td>
                <td>{props.premios}</td>
            </tr>
        </>
    );
}

export default Row;
