// var courses = [{
//     path: 'courses/cssAnimation.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/cssColors.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/cssMesures.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/cssProperties.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/cssSelectors.jpg',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/htmlAttrVal.jpg',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/htmlElements.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/htmlTags.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptDef.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptDOM.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptEvents.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptFunctions.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptFunctions2.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptObjects.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptOperators.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptOverview.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/javascriptVariables.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/phpBasics.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/phpCRUD.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// },
// {
//     path: 'courses/phpDataBase.png',
//     title: 'Manipulation des attributs et valeurs en HTML',
//     price: 5.5,
//     category: 'HTML'
// }

// ]
// var el = document.querySelector('#content2');

// function creationCourses(image, titre, prix) {
//     let div = document.createElement('div'),
//         img = document.createElement('img'),
//         p = document.createElement('p'),
//         span = document.createElement('span');
//     img.src = image;
//     let contenu = document.createTextNode(titre);
//     p.appendChild(contenu);
//     span.appendChild(document.createTextNode(prix));
//     div.setAttribute('class', 'card col-3 me-3 mb-3');

//     div.appendChild(img);
//     div.appendChild(p);
//     div.appendChild(span);

//     el.append(div);
// }

// courses.forEach((v) => {
//     creationCourses(v.path, v.title, v.price);
// })