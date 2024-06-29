public with sharing class DisplayPropertyList {
    public DisplayPropertyList() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Property__c> getPropertyList(){
        try {
            List<Property__c> allPropertyList = new List<Property__c>();
            allPropertyList = [
                SELECT  Id,
                        Name,
                        Property_Type__c,
                        Area__c,
                        Rent__c,
                        Rooms_and_Kitchen__c,
                        No_of_Bedrooms__c,
                        No_of_Bathrooms__c
                FROM Property__c
            ];
    
            return allPropertyList;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}