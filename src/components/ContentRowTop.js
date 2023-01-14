import React from 'react';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './metrics/ContentRowMovies';
function ContentRowTop() {

	let metrics = [
		{
			titulo:"Movies in Data Base",
			colorBorde:"border-left-primary",
			cifra:21,
			icono:"fa-film"
		},
		{
			titulo:"Total Awards",
			colorBorde:"border-left-success",
			cifra:79,
			icono:"fa-award"
		},
		{
			titulo:"Actors Quantity",
			colorBorde:"border-left-warning",
			cifra:49,
			icono:"fa-user"
		}
	]

	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<div className="row">
					<ContentRowMovies metrics = { metrics } />
				</div>
				{/*<!-- End movies in Data Base -->*/}


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<LastMovieInDb />
					{/*<!-- End content row last movie in Data Base -->*/}

					{/*<!-- Genres in DB -->*/}
					<GenresInDb />
				</div>
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;