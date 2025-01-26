public with sharing class ParentChildDataViewerController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name FROM Account];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String accId){
        return [SELECT Name, Phone, Email FROM Contact WHERE AccountId = :accId];
    }
}