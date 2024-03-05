
document.getElementById("btn-calculate").addEventListener('click', function() {
    let FirstNum = document.getElementById("num-first-number").value;
    let SecondNum = document.getElementById("num-second-number").value;
    let Operation = document.getElementById("sel-operation").value;
    let Total = 0;

    if (FirstNum == "" || SecondNum == "")
        alert("Please enter the numbers!");
    else if (Operation == "")
        alert("Invalid Operation");
    else {

        switch(Operation)
        {
            case "add":
                Total = parseFloat(FirstNum) + parseFloat(SecondNum);
                break;
            case "sub":
                Total = parseFloat(FirstNum) - parseFloat(SecondNum);
                break;
            case "mul":
                Total = parseFloat(FirstNum) * parseFloat(SecondNum);
                break;
            case "div":
                Total = parseFloat(FirstNum) / parseFloat(SecondNum);
                break;
            default:
                break;
        }

        // //If ELSE
        // if (Operation == "add") 
        //     Total = parseFloat(FirstNum) + parseFloat(SecondNum);
        // else if (Operation == "sub")
        //     Total = parseFloat(FirstNum) - parseFloat(SecondNum);
        // else if (Operation == "mul")
        //     Total = parseFloat(FirstNum) * parseFloat(SecondNum);
        // else if (Operation == "div")
        //     Total = parseFloat(FirstNum) / parseFloat(SecondNum);
    }

    document.getElementById("num-total").value = Total;
});