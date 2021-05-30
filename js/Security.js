class Security {
    constructor(){
        //QUESTION NUMBER 1
        this.access1 = createInput("ANSWER")
        this.access1.position(100, 90);
        this.access1.style('background', 'pink');
        
        this.button1 = createButton('Check')
        this.button1.position(100, 120);
        this.button1.style('background', 'cyan')

        //QUESTION NUMBER 2
        this.access2 = createInput("ANSWER")
        this.access2.position(700, 180);
        this.access2.style('background', 'orange');
        
        this.button2 = createButton('Check')
        this.button2.position(700, 210);
        this.button2.style('background', 'red')

        //QUESTION NUMBER 3
        this.access3 = createInput("ANSWER")
        this.access3.position(100, 290);
        this.access3.style('background', 'yellow');
        
        this.button3 = createButton('Check')
        this.button3.position(100, 320);
        this.button3.style('background', 'green')
    }

    display(){
        // Add code to make the buttons function as expected
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1, this.access1.value())){
                this.button1.hide();
                this.access1.hide();
            }
        });
        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2, this.access2.value())){
                this.button2.hide();
                this.access2.hide();
            }
        });
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3, this.access3.value())){
                this.button3.hide();
                this.access3.hide();
            }
        });
    }
}