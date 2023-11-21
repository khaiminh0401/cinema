type VnpayPaymentDto = Vnpay & {
    vnp_CurrCode?: string;
    vnp_OrderType?: string;
    vnp_ReturnUrl?: string;
    vnp_IpAddr?: string;
    vnp_Command?: string;
    vnp_ExpireDate?: string;
    vnp_CreateDate?: string;
    vnp_Version?: string;
};