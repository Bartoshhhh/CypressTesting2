// Ignorowanie błędów cross-origin
Cypress.on('uncaught:exception', (err, runnable) => {
    // Zapobiega przerywaniu testu przez nieobsługiwane błędy
    return false;
  });
  
  describe('QA Practice Website', () => {

    it('Prawidłowe załadowanie strony głównej', () => {
      // Odwiedza stronę
      cy.visit('https://www.qa-practice.com/');
  

      cy.contains('Hello!', { timeout: 10000 }).should('be.visible');
    });
  

    it('Prawidłowe załadowanie strony głównej i sprawdzenie dostępności menu', () => {
      // Odwiedza stronę
      cy.visit('https://www.qa-practice.com/');
  


        cy.get('#content > div > ol > li:nth-child(1) > a', { timeout: 10000 })
            .should('be.visible');
        cy.get('#content > div > ol > li:nth-child(2) > a', { timeout: 10000 })
                .should('be.visible');
        cy.get('#content > div > ol > li:nth-child(3) > a', { timeout: 10000 })
                .should('be.visible');
        cy.get('#content > div > ol > li:nth-child(4) > a', { timeout: 10000 })
                .should('be.visible');
        cy.get('#content > div > ol > li:nth-child(5) > a', { timeout: 10000 })
                .should('be.visible');

    });


    it('003 - Inputs > Text input', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/input/simple');
    

  
        cy.get('#id_text_string', { timeout: 10000 })
        .type('Example{enter}'); 


        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'Example');

    });

  

        it('003 - Inputs > Text input > powyżej 25 znaków', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/input/simple');
    

  
        cy.get('#id_text_string', { timeout: 10000 })
        .type('counterproductive__intercontinental{enter}'); 


        cy.get('#error_1_id_text_string > strong', { timeout: 10000 })
        .should('contain.text', 'Please enter no more than 25 characters');


    });



        it('003 - Inputs > Text input > 1 znak', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/input/simple');
    

  
        cy.get('#id_text_string', { timeout: 10000 })
        .type('e{enter}'); 


        cy.get('#error_1_id_text_string > strong', { timeout: 10000 })
        .should('contain.text', 'Please enter 2 or more characters');

    });


        it('003 - Inputs > Email field', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/input/email');
    

  
        cy.get('#id_email', { timeout: 10000 })
        .type('randomemail@gmail.com{enter}'); 


        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'randomemail@gmail.com');

    });

        it('003 - Inputs > Email field > Poprawny adres email', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/input/email');
    

  
        cy.get('#id_email', { timeout: 10000 })
        .type('ddd{enter}'); 


        cy.get('#error_1_id_email > strong', { timeout: 10000 })
        .should('contain.text', 'Enter a valid email address.');

    });


        it('003 - Inputs > Password field > Wprowadzenie hasła spełniającego wymogi', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/input/passwd');
    

  
        cy.get('#id_password', { timeout: 10000 })
        .type('Password123!@#{enter}'); 


        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'Password123!@#');

    });

     it('004 - Buttons > Simple button', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/button/simple');
    

  
        cy.get('#submit-id-submit', { timeout: 10000 })
        .click();


        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'Submitted');

    });


        it('004 - Buttons > Like a button', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/button/like_a_button');
    

  
        cy.get('#button-form > a', { timeout: 10000 })
        .should('be.visible') 
        .and('contain.text', 'Click') 
        .click();


        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'Submitted');

    });


        it('004 - Buttons > Disabled', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/button/disabled');
    

  
        cy.get('#id_select_state', { timeout: 10000 })
        .select('Enabled') 
        .should('have.value', 'enabled'); 
  

         cy.get('#submit-id-submit', { timeout: 10000 })
        .should('be.enabled') 
        .click(); 

        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'Submitted');


    });


        it('005 - Checkbox > Single checkbox', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/checkbox/single_checkbox');
    

  
        cy.get('#id_checkbox_0', { timeout: 10000 })
        .click();
  

         cy.get('#submit-id-submit', { timeout: 10000 })
        .click(); 

        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'select me or not');


    });


        it('005 - Checkbox > Checkboxes', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/checkbox/mult_checkbox');
    

  
        cy.get('#id_checkboxes_0', { timeout: 10000 })
        .click();
  

         cy.get('#submit-id-submit', { timeout: 10000 })
        .click(); 

        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'one');


    });

        it('005 - Checkbox > Checkboxes one,two,three', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/checkbox/mult_checkbox');
    

  
        cy.get('#id_checkboxes_0', { timeout: 10000 })
        .click();
        cy.get('#id_checkboxes_1', { timeout: 10000 })
        .click();
        cy.get('#id_checkboxes_2', { timeout: 10000 })
        .click();
  

         cy.get('#submit-id-submit', { timeout: 10000 })
        .click(); 

        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'one, two, three');


    });

        it('006 - Select > Single select', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/select/single_select');
    

  
        cy.get('#id_choose_language', { timeout: 10000 })
        .select('JavaScript') 
        .should('have.value', '3'); 

        cy.get('#submit-id-submit', { timeout: 10000 })
        .click(); 

        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'JavaScript');

    });

    it('006 - Select > Multiple select', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/select/mult_select');
    

  
        cy.get('#id_choose_the_place_you_want_to_go', { timeout: 10000 })
        .select('Sea') 
        .should('have.value', '1');

        cy.get('#id_choose_how_you_want_to_get_there', { timeout: 10000 })
        .select('Car') 
        .should('have.value', '1');

        cy.get('#id_choose_when_you_want_to_go', { timeout: 10000 })
        .select('Today') 
        .should('have.value', '1');

        cy.get('#submit-id-submit', { timeout: 10000 })
        .click(); 

        cy.get('#result', { timeout: 10000 })
        .should('contain.text', 'to go by car to the sea today');

    });


    it('007 - New tab > New tab link', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/new_tab/link');


        cy.get('#new-page-link', { timeout: 10000 })
            .should('have.attr', 'target', '_blank') 
            .click(); 

    });

    it('007 - New tab > New tab link', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/new_tab/button');


        cy.get('#new-page-button', { timeout: 10000 })
            .should('have.attr', 'target', '_blank') 
            .click(); 

    });

    it('008 - Text Area > TextArea', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/textarea/single');


        cy.get('#id_text_area', { timeout: 10000 })
        .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'); 

        cy.get('#submit-id-submit', { timeout: 10000 })
        .click();

        cy.get('#result', { timeout: 10000 })        
        .should('contain.text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book');
    });

    it('008 - Text Area > Multiple textareas', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/textarea/textareas');

        // 1. First chapter
        cy.get('#id_first_chapter', { timeout: 10000 })
        .type('1'); 
        
        // 2. Second chapter
        cy.get('#id_second_chapter', { timeout: 10000 })
        .type('2');

         // 3. Third chapter       
        cy.get('#id_third_chapter', { timeout: 10000 })
        .type('3');



        cy.get('#submit-id-submit', { timeout: 10000 })
        .click();

        

        cy.get('#result', { timeout: 10000 })        
        .should('contain.text', '123');
    });

    it('009 - Alerts > Alert box', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/alert/alert');

        cy.get('#content > a.a-button', { timeout: 10000 })
        .click();


        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('I am an alert!');
    });


    });

    it('009 - Alerts > Confirmation box', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/alert/alert');

        cy.get('#content > a.a-button', { timeout: 10000 })
        .click();


        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('I am an alert!');
        return true;

        cy.get('#result', { timeout: 10000 })
        .should('contain', 'Ok');
    });


    });




    it('009 - Alerts > Prompt box', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/alert/prompt');




    });

    it('0010 - Drag and Drop > Boxes', () => {
        // Odwiedza stronę
        cy.visit('https://www.qa-practice.com/elements/dragndrop/boxes');



    cy.get('#rect-draggable').then(($element) => {
        const initialPosition = $element.position();


        cy.get('#rect-draggable')
            .trigger('mousedown', { which: 1, pageX: initialPosition.left, pageY: initialPosition.top })
            .trigger('mousemove', { which: 1, pageX: initialPosition.left, pageY: initialPosition.top - 150 }) 
            .trigger('mouseup');

        cy.get('#text-droppable', { timeout: 10000 })
        .should('contain.text', 'Dropped');


    });

});


it('011 - Pop-Up > Modal', () => {
    // Odwiedza stronę
    cy.visit('https://www.qa-practice.com/elements/popup/modal');

    cy.get('#content > button', { timeout: 10000 })
    .click();    

    cy.get('#id_checkbox_0', { timeout: 10000 })
    .click();

    cy.get('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary', { timeout: 10000 })
    .click();


    cy.get('#result', { timeout: 10000 })
    .should('contain.text', 'select me or not');


});


it('011 - Pop-Up > IFrame Pop-Up', () => {
    // Odwiedza stronę
    cy.visit('https://www.qa-practice.com/elements/popup/iframe_popup');


    cy.get('#content > button', { timeout: 10000 })
      .click();    


    cy.wait(2000);


    cy.get('body > div > div > div iframe')  
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .find('#text-to-copy')  
      .invoke('text')
      .then((copiedText) => {
        

        cy.get('#exampleModal > div > div > div > div.modal-footer > button.btn.btn-primary', { timeout: 10000 })
          .click();
        

        cy.get('#id_text_from_iframe', { timeout: 10000 })
          .type(copiedText); 


        cy.get('#submit-id-submit', { timeout: 10000 })
          .click();
        

        cy.get('#check-result', { timeout: 10000 })
          .should('contain.text', 'Correct!');
    });
});

});