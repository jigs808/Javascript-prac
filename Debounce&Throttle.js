$(document).ready(() => {
    
    // Debounce implementaion
    const myDebounce = (func,delay) => {
        let timer;

        return (...params) => {
            if (timer) clearTimeout(timer);

            timer = setTimeout(() => {
                func(...params)
            },delay)
        }


    }

    // debounce callBack
    const debounce = myDebounce((inputText) => {
        $('#Debounce').text(inputText);
        console.log('debounce executed')
    }, 2000);
    
    
    // Throttle Implementaion
    function myThrottle(func, delay) {
        
        let last = 0;
        let waitingText

        return function (...params) {
            
            let now = new Date().getTime();
            if (now - last < delay) {
                waitingText = params
                return
            };
            last = now;
            func(params)

        }
        
    }

    //Throttle Callback
    const throttle = myThrottle((inputText) => {
        $('#Throttle').text(inputText);
        console.log('throttle executed')
    },1000)



    $("input").on('keyup',function() {
        // let SearchText = $(this).val();
        $('#normal').text($(this).val());

        debounce($(this).val());
        throttle($(this).val());

        // $('*').css({ "background-color": "green" });
    }

    );

    
    
}
);