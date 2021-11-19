public with sharing class PopoverCloseController {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccount(){
       
        return [SELECT  Id,
                        Name,
                        AccountNumber,
                        Site,
                        AnnualRevenue,
                        Email__c,
                        Industry
                        FROM Account 
                        Limit 10];
    }
}