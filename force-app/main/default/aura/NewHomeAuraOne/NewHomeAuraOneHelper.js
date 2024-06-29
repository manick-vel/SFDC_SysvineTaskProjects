({
    fetchAllPropertyHelper : function(component, event, helper) {
        var action = component.set('c.getPropertyList');
        action.setCallback(this, function(response){
            var responseValue = response.getReturnValue();
            component.get('v.propertyList', responseValue);
        });
        $A.enqueueAction(action, false);
    }
})
