
let URL = "https://www.omdbapi.com/?s=marvel&apikey=dba0f2cd";

async function getMovies() {
    try {
        let req = await fetch(URL);
        let res = await req.json();

        let out = "";

        res.Search.forEach(movie => {
            out += `
                <div class="movie-card">
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            `;
        });

        document.getElementById("movies").innerHTML = out;

    } catch (err) {
        console.log(err);
    }
}

getMovies();
