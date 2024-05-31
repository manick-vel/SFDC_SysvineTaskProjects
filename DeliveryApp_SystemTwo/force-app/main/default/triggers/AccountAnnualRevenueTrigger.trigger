trigger AccountAnnualRevenueTrigger on Account (before insert, before update) {
    // Trigger.operationType {
    //     WHEN BEFORE_INSERT{
    //        setAnnualRevenue();
    //     }
        
    //      WHEN BEFORE_UPDATE{
    //          setAnnualRevenue();
    //      }
    // }

    setAnnualRevenue();

    public void setAnnualRevenue(){
        for (Account acc : trigger.new){
            if (acc.Industry == 'Banking'){
                acc.AnnualRevenue = 5000000;
            }
            if (acc.Industry == 'Insurance'){
                acc.AnnualRevenue = 3500000;
            }
        }
    }
    
}