$(function(){
    $('#big').click(function(){
        var a = $('#a').val();
        var b = $('#b').val();
        var c = $('#c').val();
        var quad = (-1*b + Math.sqrt(Math.pow(b,2) - (4*a*c))) / (2*a);
        var quad2 = (-1*b - Math.sqrt(Math.pow(b,2) - (4*a*c))) / (2*a);
        var quadx = 'X = ' + quad + ', ' + quad2;
        // Puts the quadratic into standard form (string)
        var eq = (a+'x^2+'+b+'x+'+c);
        var eqSTRING = (a+'x²+'+b+'x+'+c);
        var point1 = ('A=('+quad+',0)');
        var point2 = ('B=('+quad2+',0)');
        var factors = ('(X+'+-1*quad+")"+ "(X+"+-1*quad2+") = 0");
        document.getElementById('output').innerHTML = quadx;
        document.getElementById('output2').innerHTML = eqSTRING;
        document.getElementById('output3a').innerHTML = point1;
        document.getElementById('output3b').innerHTML = point2;
        document.getElementById('inter').innerHTML = 'X-Intercepts';
        document.getElementById('factors').innerHTML = 'Factors';
        document.getElementById('output4').innerHTML = factors;
        console.log("X= ", quad, ", ", quad2)    
        var elt = document.getElementById('calculator');
        var calculator = Desmos.GraphingCalculator(elt);
        // Save the current state of a calculator instance
        var state = calculator.getState();
        console.log(eq)
        console.log(point1)
        console.log(point2)
        console.log(factors)
        // Load a state into a calculator instance
        calculator.setState(state);

        // Reset the calculator to a blank state
        calculator.setBlank();
       
        calculator.setExpression({id: 'quadratic', latex: eq});
        calculator.setExpression({
            id: 'A',
            latex: point1,
          });
          calculator.setExpression({
            id: 'B',
            latex: point2,
          });
          console.log('---------------------')
    })
})

$(function(){
    $('#small').click(function(){
        $("#calculator").toggle();
        console.log('Toggled Graphs.')
    })
})

/* var random = Math.floor(Math.random() * (max - min) ) + min;
document.getElementById('pp').innerHTML = random; */
