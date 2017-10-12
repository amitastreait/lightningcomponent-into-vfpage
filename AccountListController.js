({   
    
    doInit : function(component, event) {       
        
        // Call the Apex Class Method from Javascript       
        
        var action = component.get("c.findAll");       
        
        // Callback which will fetch the response from Apex and set the value to Component        
        
        action.setCallback(this, function(a) {   
            
            // Set the value in the Accounts List an attribute that we created into Apex Controller        
            
            component.set("v.accounts", a.getReturnValue());                   
            
        });       
        
        // Place the Action in the Queue    
        
        $A.enqueueAction(action);   
        
    }
    
})