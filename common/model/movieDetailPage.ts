
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
    movieTypeId: string,
    rate: number
}
type typeofmovies = {
    id: string,
    poster: string
}
type review = {
    rate: number
    review: string | null
    exportdate: string
    exporttime: string
    name: string
}
interface movieDetailPage {
    movieDetail: movieDetail
    listTypeOfMovies: typeofmovies[]
    listReview: review[]
}