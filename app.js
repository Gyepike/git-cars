const result = document.querySelector(".result");



window.addEventListener("load", async () => {
    const res = await fetch("cars.json");
    const data = await res.json();
    console.log(data)

    let ouput = "";

    data.map(car => {
        ouput += `
                 <div class= "car">
                     <h2>Maraka : ${car.marka} </h2>
                 </div>
            `
            ;
    }

    )
    result.innerHTML = ouput;
}

)

