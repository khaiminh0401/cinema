export class DateUtils{
    public static formatDate(date:Date) : string{
        return date.toLocaleDateString("vi-VI", {year:"numeric",month:"2-digit", day:"2-digit"});
    }
}