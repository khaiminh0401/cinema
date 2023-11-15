type review = {
    rate: number,
    review: string,
    exportdate: Date,
    name: string
}
interface reviewType {
    review: review[],
    total_bill_count: number
}