public with sharing class SearchBoxController {
    @AuraEnabled(cacheable=true)
    public static List<String> getRecordNames(String searchText){
        List<String> resultList = new List<String>();
        String query = 'SELECT Name FROM Account WHERE Name LIKE \'%' +searchText+ '%\'';
        List<Account> accList = Database.query(query);
        if(!accList.isEmpty()){
            for(Account acc : accList){
                resultList.add(acc.Name);
            }
        }
        return resultList;
    }
}