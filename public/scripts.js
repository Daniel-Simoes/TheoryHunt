function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

        document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

        document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}
 
function checkFields(event) {

    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.fild(function(value) {

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIsEmpty = !event.target[value].value.trim()
        
        if(checkIfIsString && checkIsEmpty) {
            return true
        }
    })
    if(isEmpty) {
        event.preventDefault()
        alert("Please, put all information about your Theory.")
    }

}