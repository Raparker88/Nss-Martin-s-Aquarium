export const locationHTML = (locationObj) => {
    return `
        <section class="location">
            <div class="location__image"><img class="loc__img" src=${locationObj.image}></div>
            <div class="location__name loc__text">${locationObj.name}</div>
            <div class="location__link loc__text"><a href=${locationObj.linkUrl}>${locationObj.linkText}</a> </div>
            <div class="location__description loc__text">${locationObj.description}</div>
        </section>
    `
}