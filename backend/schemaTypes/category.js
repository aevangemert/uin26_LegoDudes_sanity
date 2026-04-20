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
        //hentet samme skug-felt som i category,js i schematypes i backend
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'categoryname',
                // -- blir ignorert fordi vi har slugify.. maxLength: 200, // will be ignored if slugify is set -> metode som skal kjøre et regelfelt
                slugify: input => input
                    // gjør alt til små bokstaver
                    .toLowerCase()
                    // tar 
                    .replace(/\s+/g, '-')
                    // 
                    .slice(0, 200)
            }
        },
        {
            name: "categoryimage",
            title: "Kategoribilder",
            type: "image"
        }
    ]
}

export default category