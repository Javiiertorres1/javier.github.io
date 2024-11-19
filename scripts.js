function changelanguage(language){
  // oculta todos los elementos con data-lang
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(element => {
    if (element.getAttribute('data-lang') === language {
        element.style.display = '';
    } else {
      element.style.display = 'none';
    }
});
}
  
