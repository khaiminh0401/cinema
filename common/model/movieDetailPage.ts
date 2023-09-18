
type movieDetail = {
    id: string,
    name: string,
    yearofmanufacture: number,
    poster: string,
    time: number,
    describe: string,
    trailer: string,
    status: number,
    limitAge: number,
    movieTypeName: string,
    actorsName: string,
    directorsName: string,
    languagesName: string,
    countryName: string,
    movieTypeId: string
}
interface movieDetailPage {
    movieDetail: movieDetail
    listTypeOfMovies: movieType[]
}