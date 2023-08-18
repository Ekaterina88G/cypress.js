describe('Позитивный кейс авторизации', function () {
     it('Ввожу верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

     it('Восстановлениt пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible')
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
     
     it('Ввожу верный логин и Неверный пароль', function() {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('wrongpassword');
       cy.get('#loginButton').click();
       cy.wait(1000);
       cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Ввожу Неверный логин и верный пароль', function() {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('wrong@login.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.wait(1000);
       cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

    it('Ввожу логин буз @ и верный пароль', function() {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('germandolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Нужно исправить проблему валидации').should('be.visible');
})  
    it('Приведение логина к строчным буквам', function() {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
})
    it('HuntingPony большой тест', function() {
      cy.visit('https://huntingpony.com');
       cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
       cy.wait(1000);
       cy.get('.add-cart-counter__btn').click();
       cy.get('[data-add-cart-counter-plus=""]').click();
       cy.get('.header__cart > .icon').click();
       cy.get('.cart-controls > .button').click();
       cy.contains('Оформление заказа').should('be.visible');
    })
  })