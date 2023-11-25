type BillDetailsDto = {
    id?: number;
    totalPrice?: number;
    exportDate?: string;
    exportStatus?: string;
    rate?: number;
    review?: string;
    qrCode?: string;
    customerId?: number;
    paymentMethod?: string;
    startTime?: Date;
    showDate?: Date;
    movieName?: string;
    movieStatus: number;
    limitAge?: number;
    yearOfManufacture?: number;
    country?: string;
    roomName?: string;
    branchName?: string;
    branchAddress?: string;
    customerName?: string;
    customerPhone?: string;
    customerEmail?: string;
    seats?: string;
    toppingName?: string;
    toppingTotalPrice?: number;
    ticketTotalPrice?: number;
    ticketVat?: number;
    poster?: string;
    tickets?: Ticket[];
}