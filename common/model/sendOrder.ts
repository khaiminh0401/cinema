type listTicket = {
    name: string,
    quantity: number,
    amount: string
}
interface sendOrderModel {
    info: {
        username: string,
        email: string,
        phone: string
    },
    listTicket: listTicket[],
    bill: {
        id: number,
        totalPrice: string,
        exportDate: string,
        customerId: number,
        qrCode: string
    }
    paymentMethod: string
}