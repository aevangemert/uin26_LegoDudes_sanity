const category = {

    //viktigste å ha med
    name: "category",
    //ikke påkrevd men... greit å ha med en etikett som blir skrevet ut i sudioet
    title: "Kategori",
    //to spesifikke defaulttyper (schematypes) = document () eller object ()
    type: "document",
    //felter (består av en haug med schemas)inneholder den samme informasjonen som en egen innholdstype
    fields: [
        {
            name: "categoryname",
            title: "Kategorinavn",
            type: "string"
        },
        {
            name: "categoryimage",
            title: "Kategoribilder",
            type: "image"
        }
    ]
}

export default category