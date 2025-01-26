public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getTopAccount(Integer numOfAccounts){
        return [SELECT Name, AnnualRevenue FROM Account WHERE AnnualRevenue != null ORDER BY AnnualRevenue DESC NULLS LAST LIMIT :numOfAccounts];
    }
}