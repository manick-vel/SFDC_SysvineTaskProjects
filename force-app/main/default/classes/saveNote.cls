public with sharing class saveNote {
    public saveNote() {

    }

    @AuraEnabled
    public static String saveNoteTitleWithDesc(String noteTitle, String noteDesc, Boolean isUpdate, Boolean isDelete){
        Unlocked_2G__Note__c note = new Unlocked_2G__Note__c();
        note.Unlocked_2G__Title__c = noteTitle;
        note.Unlocked_2G__Description__c = noteDesc;

        // System.debug('note: ' + note);
        // System.debug('isUpdate: ' + isUpdate);
        // System.debug('isDelete: ' + isDelete);
        // System.debug('noteTitle: ' + noteTitle);
        // System.debug('noteDesc: ' + noteDesc);

        
        try {
            if (isUpdate){
                update note;
                return 'Note Successfully Updated';
            } else if (isDelete){
                delete note;
                return 'Note Successfully deleted';
            } else {
                insert note;
                return 'Note Successfully created';
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Unlocked_2G__Note__c> getNotes(){
        try {
            return [SELECT Id, Unlocked_2G__Title__c, Unlocked_2G__Description__c FROM Unlocked_2G__Note__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled
    public static String saveTaskTitleWithDesc(String taskTitle, String taskDesc, Datetime taskDueDate, String taskPriority,  Boolean isUpdate, Boolean isDelete){
        Unlocked_2G__Task__c task = new Unlocked_2G__Task__c();
        task.Unlocked_2G__Title__c = taskTitle;
        task.Unlocked_2G__Description__c = taskDesc;
        task.Unlocked_2G__Due_Date__c = taskDueDate;
        task.Unlocked_2G__Priority__c = taskPriority;
        
        try {
            if (isUpdate){
                update task;
                return 'Task Successfully Updated';
            } else if (isDelete){
                delete task;
                return 'Task Successfully deleted';
            } else {
                insert task;
                return 'Task Successfully created';
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Unlocked_2G__Task__c> getTasks(){
        try {
            return [SELECT Id, Unlocked_2G__Title__c, Unlocked_2G__Description__c, Unlocked_2G__Due_Date__c,
                    Unlocked_2G__Priority__c
                    FROM Unlocked_2G__Task__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}