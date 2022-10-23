$('.key-search').on('click', function () {
    $.ajax({
        url: 'https://www.omdbapi.com/?&apikey=c334637&s=' + $('.value-keyword').val(),
        success: mhasil => {
            const movies = mhasil.Search


            let cards = '';
            movies.forEach(x => {
                cards += ShowFilmList(x);
            });

            $('.movie-container').html(cards)

            $('.btn-detail').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=c334637&i=' + $(this).data('films'),
                    success: x => {
                        const Moviedetail = ShowMovieDetail(x);
                        $('.modal-body').html(Moviedetail);
                    }
                })
            })

        }



    })


})









function ShowFilmList(x) {
    return `<div class="col-md-4 my-5">
                <div class="card" >
                    <img src="${x.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${x.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${x.Year}</h6>
                        <a href="#" class="btn btn-primary btn-detail" data-bs-toggle="modal" data-films="${x.imdbID}" data-bs-target="#MovDetailBox">Show Details</a>
                    </div>
                </div>

</div>`
}

function ShowMovieDetail(x) {
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${x.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item">
                    <h3>${x.Title}</h3>
                </li>
                <li class="list-group-item"><strong>Tahun:</strong> ${x.Year}</li>
                <li class="list-group-item"><strong>Genre:</strong> ${x.Genre}</li>
                <li class="list-group-item"><strong>Plot:</strong> ${x.Plot}</li>
                <li class="list-group-item"><strong>Country:</strong> ${x.Country}</li>
            </ul>
        </div>
    </div>
</div>`
}
