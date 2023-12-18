type billHistory = {
    id: number,
    totalPrice: number,
    exportDate: Date,
    exportStatus: number,
    ticket: number,
    startTime: Date,
    showDate: Date,
    movieName: string,
    movieTime: number,
    roomName: string,
    branchName: string,
    address: string,
    seats: string
}

interface billHistories {
    bills: billHistory[],
    total_bill_count: number
}