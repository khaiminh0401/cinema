type VnpayResultDto = Vnpay & {
    vnp_BankTranNo?: string;
    vnp_CardType?: string;
    vnp_PayDate?: string;
    vnp_TransactionNo?: string;
    vnp_ResponseCode?: string;
    vnp_TransactionStatus?: string;
    vnp_SecureHashType?: string;
};
