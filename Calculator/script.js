document.addEventListener('DOMContentLoaded', function ()
{
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach(button =>
    {
        button.addEventListener('click', handleButtonClick);
    });
    const equalButton = document.querySelector('.equal');
    equalButton.addEventListener('click', evaluateExpression);
    function handleButtonClick(event)
    {
        const clickedButtonValue = event.target.value;
        if(clickedButtonValue=='AC')
        {
            display.value = '' 
        }
        else if(clickedButtonValue=="DE")
        {
            display.value=display.value.slice(0,-1);
        }
        else
        {
            display.value += clickedButtonValue;
        }
    }
    function evaluateExpression()
    {
        try
        {
            const result = eval(display.value);
            display.value = result;
        }
        catch (error)
        {
            display.value = 'Error';
        }
    }
});
