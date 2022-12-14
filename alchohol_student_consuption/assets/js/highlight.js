function highlight(){

    // select the dataviz
    dv1 = document.getElementById("student_alcohol")

    // select the flows
    const flows = dv1.contentDocument.documentElement.getElementById("flows").querySelectorAll("g")

    // loop over all the flows
    flows.forEach(function(el){

        // add a listener on mouse enter (when mouse hovers an area)
        el.addEventListener("mouseenter", function(){

            // loop all the flows to set a lower ipacity
            flows.forEach(function(a){
                a.style.opacity = 0.3
            })

            // set the flow that user hovers (this) with the maximum opacity
            this.style.opacity = 1
        })

        // add a listener when mouse leaves the flow
        el.addEventListener("mouseleave", function(){

            // loop all the flows to reset the opacity
            flows.forEach(function(a){
                a.style.opacity = 1
            })
        })
    })
}

window.addEventListener("load", function(){
    highlight()
})