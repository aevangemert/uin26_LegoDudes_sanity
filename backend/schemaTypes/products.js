const products = {
    name: "product",
    title: "Produkter",
    type: "document",
    fields: [
        {
            name: "productname",
            title: "Produktnavn",
            type: "string"
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'productname',
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
            name: "price",
            title: "Pris",
            type: "number"
        },
        {
            name: "quantity",
            title: "Antall på lager",
            type: "number"
        },
        {
            name: "productimage",
            title: "Produktbilde",
            type: "image"
        },
        {
            name: "productcategory",
            title: "Kategori",
            //reference -> refererer til kategori som en egen innholdstype, må fortelle hva vi skal referere til!!
            type: "reference",
            to: [{ type: "category" }]
        }
    ],
    preview: {
        select: {
            title: 'productname',
            inCat: 'productcategory.categoryname',
            image: 'productimage'
        },
        //tar imot parameter selection
        prepare(selection) {
            // = nøkkelverdien vi har sendt med
            const {title, inCat, image} = selection
            return {
                title: title, 
                subtitle: `Kategori: ${inCat ? inCat : "Ukjent"}`,
                media: image
            }
        }
    }
}

export default products