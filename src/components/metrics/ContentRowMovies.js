import React from 'react';
import PropTypes from 'prop-types';

const ContentRowMovies = (props) => {
    return (
        <>
            {
                props.metrics.map((metric, i) =>
                    <div className="col-md-4 mb-4" key={i}>
                        <div className={`card ${metric.colorBorde} shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{metric.titulo}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{metric.cifra}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className={`fas ${metric.icono} fa-2x text-gray-300`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

ContentRowMovies.defaultProps = {
    titulo: 'Sin título',
    colorBorde: 'border-left-primary',
    cifra: 0,
    icono: 'fa-film'
}

ContentRowMovies.propTypes = {
    titulo: PropTypes.string,
    colorBorde: PropTypes.string.isRequired,
    cifra: PropTypes.number.isRequired,
    icono:  PropTypes.oneOf(['fa-film','fa-award','fa-user']).isRequired,
};

export default ContentRowMovies