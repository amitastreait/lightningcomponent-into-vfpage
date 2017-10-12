public class AccountController {
    // Apex method must be @auraEnabled so that it can be called from the JavaScript Controller
    @AuraEnabled
    public static List<Account> findAll() {
        return [SELECT Id, name, industry, Type, NumberOfEmployees, TickerSymbol, Phone
                FROM Account ORDER BY createdDate ASC LIMIT 5];
    }
}