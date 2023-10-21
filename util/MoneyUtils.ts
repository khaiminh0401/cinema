import { constants } from "@/common/constants";

export class MoneyUtils {
    public static ConvertToUSD(price: number) {
        return (price / constants.USD).toFixed(2)
    }
}