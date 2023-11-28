type review = {
    rate: number,
    review: string,
    exportdate: Date,
    name: string,
    avatar: string | null;
}
interface reviewType {
    review: review[],
    total_bill_count: number
}