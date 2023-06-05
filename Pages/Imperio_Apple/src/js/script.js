var productCards = document.querySelectorAll('.product');

productCards.forEach((card) => {
  var btnOptions = card.querySelectorAll('.btn-option');
  var sizeOptions = card.querySelectorAll('.size-option');
  var priceOptions = card.querySelectorAll('.product__price');
  var productDescription = card.querySelector('.product_description');
  var contactLink = card.querySelector('.product__btn');

  btnOptions.forEach((btnOption, index) => {
    btnOption.addEventListener('click', () => {
      btnOptions.forEach((otherBtn, otherIndex) => {
        if (otherIndex !== index) {
          otherBtn.classList.remove('active-btn');
          priceOptions[otherIndex].classList.add('price-disable');
        }
      });

      btnOption.classList.add('active-btn');
      let text = sizeOptions[index].textContent;
      productDescription.innerHTML = productDescription.innerHTML.replace(/ - \w+/g, '');
      productDescription.innerHTML += ' - ' + text;
      priceOptions.forEach((priceOption) => {
        priceOption.classList.add('price-disable');
      });
      priceOptions[index].classList.remove('price-disable');

      var productTitle = card.querySelector('.product__title').textContent;
      var whatsappLink = "https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20estou%20interessado%20no%20" + encodeURIComponent(productTitle) + " - " + encodeURIComponent(text) + ",%20posso%20saber%20mais%20informa%C3%A7%C3%B5es%3F";
      contactLink.href = whatsappLink;
    });
  });

  var activeIndex = Array.from(btnOptions).findIndex((btnOption) =>
    btnOption.classList.contains('active-btn')
  );
  if (activeIndex !== -1) {
    let activeText = sizeOptions[activeIndex].textContent;
    productDescription.innerHTML += ' - ' + activeText;
    priceOptions[activeIndex].classList.remove('price-disable');

    var productTitle = card.querySelector('.product__title').textContent;
    var whatsappLink = "https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20estou%20interessado%20no%20" + encodeURIComponent(productTitle) + " - " + encodeURIComponent(activeText) + ",%20posso%20saber%20mais%20informa%C3%A7%C3%B5es%3F";
    contactLink.href = whatsappLink;
  }
});
