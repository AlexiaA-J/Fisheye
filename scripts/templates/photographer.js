function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement('p');
        location.textContent = city + ", " + country;
        location.classList.add('location');
        const tag = document.createElement('p');
        tag.textContent = tagline;
        tag.classList.add('tagline');
        const rate = document.createElement('p');
        rate.textContent = price + "€/jour";
        rate.classList.add('rate');
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(rate);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}