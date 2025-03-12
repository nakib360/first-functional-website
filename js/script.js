
// header animation
window.addEventListener("scroll", function(){
    let header = this.document.getElementById("header");
    if(window.scrollY > 10){
        header.classList.add("bg-opacity-20", "backdrop-blur-sm");
    }else{
        header.classList.remove("bg-opacity-20", "backdrop-blur-sm");
    }
});



document.getElementById("history").addEventListener("click", function () {
    document.getElementById("history").classList.add("bg-[#B4F461]");
    document.getElementById("history").classList.remove("border-slate-400", "bg-white", "border-2");
    document.getElementById("donation").classList.add("border-slate-400", "bg-white", "border-2");
    document.getElementById("donation").classList.remove("bg-[#B4F461]");
    document.getElementById("blog").innerText = "Blog";

    document.getElementById("donate-box").style.display = "none";
    document.getElementById("history-box").style.display = "flex";
    document.getElementById("FAQ").classList.add("hidden");
});

document.getElementById("donation").addEventListener("click", function () {
    document.getElementById("donation").classList.add("bg-[#B4F461]");
    document.getElementById("donation").classList.remove("border-slate-400", "bg-white", "border-2");
    document.getElementById("history").classList.add("border-slate-400", "bg-white", "border-2");
    document.getElementById("history").classList.remove("bg-[#B4F461]");
    document.getElementById("blog").innerText = "Blog";

    document.getElementById("donate-box").style.display = "flex";
    document.getElementById("history-box").style.display = "none";
    document.getElementById("FAQ").classList.add("hidden");
});


document.getElementById("first-donation-button").addEventListener("click", function(event){
        event.preventDefault();

        let mainBalance = parseFloat(document.getElementById('balance').innerText);
        const firstDonationValue = parseFloat(document.getElementById("first-donation-velue").value);
        const firstDonation = parseFloat(document.getElementById("first-donation").innerText);

        if(isNaN(firstDonationValue) || mainBalance <= 0 || firstDonationValue > mainBalance){
            document.getElementById("first-donation-velue").value = '';
            document.getElementById('alert-cencal-box').classList.remove('hidden');
            document.getElementById('alert-cencal-box').classList.add('flex');
            return;
        }else{
            const cuttingValue = mainBalance - firstDonationValue;
            const addingValue = firstDonationValue + firstDonation;

            document.getElementById("balance").innerText = cuttingValue;
            document.getElementById("first-donation").innerText = addingValue;

            document.getElementById("first-donation-velue").value = '';

            document.getElementById("history-box").insertAdjacentHTML("beforeend", `
                <div class="border w-full border-slate-500 rounded-xl px-10 py-10 mt-5">
                    <p class="text-black font-bold text-sm">${firstDonationValue} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
                    <p class="text-slate-500 text-[12px]">Date : ${new Date()}</p>
                </div> 
            `);

            if(parseFloat(document.getElementById("first-donation").innerText) === addingValue){
                document.getElementById('alert-box').classList.remove('hidden');
                document.getElementById('alert-box').classList.add('flex');
            }
        }
        
        
});

document.getElementById("second-donation-button").addEventListener("click", function(event){
    event.preventDefault();

    let mainBalance = parseFloat(document.getElementById('balance').innerText);
    const secondDonationValue = parseFloat(document.getElementById("second-donation-velue").value);
    const secondDonation = parseFloat(document.getElementById("second-donation").innerText);

    if(isNaN(secondDonationValue) || mainBalance <= 0 || secondDonationValue > mainBalance){
        document.getElementById("second-donation-velue").value = '';
        document.getElementById('alert-cencal-box').classList.remove('hidden');
        document.getElementById('alert-cencal-box').classList.add('flex');
        return;
    }else {
        const cuttingValue = mainBalance - secondDonationValue;
        const addingValue = secondDonationValue + secondDonation;

        document.getElementById("balance").innerText = cuttingValue;
        document.getElementById("second-donation").innerText = addingValue;

        document.getElementById("second-donation-velue").value = '';

        document.getElementById("history-box").insertAdjacentHTML("beforeend", `
            <div class="border w-full border-slate-500 rounded-xl px-10 py-10 mt-5">
                <p class="text-black font-bold text-sm">${secondDonationValue} Taka is Donated for famine-2024 at Boalkhali, Bangladesh</p>
                <p class="text-slate-500 text-[12px]">Date : ${new Date()}</p>
            </div> 
        `);

        if(parseFloat(document.getElementById("second-donation").innerText) === addingValue){
            document.getElementById('alert-box').classList.remove('hidden');
            document.getElementById('alert-box').classList.add('flex');
        }
    }
});


document.getElementById("third-donation-button").addEventListener("click", function(event){
    event.preventDefault();

    let mainBalance = parseFloat(document.getElementById('balance').innerText);
    const thirdDonationValue = parseFloat(document.getElementById("third-donation-velue").value);
    const thirdDonation = parseFloat(document.getElementById("third-donation").innerText);

    if(isNaN(thirdDonationValue) || mainBalance <= 0 || thirdDonationValue > mainBalance){
        document.getElementById("third-donation-velue").value = '';
        document.getElementById('alert-cencal-box').classList.remove('hidden');
        document.getElementById('alert-cencal-box').classList.add('flex');
        return;
    }else {

        const cuttingValue = mainBalance - thirdDonationValue;
        const addingValue = thirdDonationValue + thirdDonation;

        document.getElementById("balance").innerText = cuttingValue;
        document.getElementById("third-donation").innerText = addingValue;

        document.getElementById("third-donation-velue").value = '';

        document.getElementById("history-box").insertAdjacentHTML("beforeend", `
            <div class="border w-full border-slate-500 rounded-xl px-10 py-10 mt-5">
                <p class="text-black font-bold text-sm">${thirdDonationValue} Taka is Aid for Injured in the Quota Movement</p>
                <p class="text-slate-500 text-[12px]">Date : ${new Date()}</p>
            </div> 
        `);

        if(parseFloat(document.getElementById("third-donation").innerText) === addingValue){
            document.getElementById('alert-box').classList.remove('hidden');
            document.getElementById('alert-box').classList.add('flex');
        }
    }
});



document.getElementById("border-box1").addEventListener("click", function(){
    const arrow =document.getElementById("arrow1")
    const Answer =document.getElementById("Answer1")

    if(arrow.style.transform === "rotate(270deg)"){
        arrow.style.transform = "rotate(90deg)";
        Answer.classList.add("hidden");
    }else{
        arrow.style.transform = "rotate(270deg)";
        Answer.classList.remove("hidden");
    }
});


document.getElementById("border-box2").addEventListener("click", function(){
    const arrow =document.getElementById("arrow2")
    const Answer =document.getElementById("Answer2")

    if(arrow.style.transform === "rotate(270deg)"){
        arrow.style.transform = "rotate(90deg)";
        Answer.classList.add("hidden");
    }else{
        arrow.style.transform = "rotate(270deg)";
        Answer.classList.remove("hidden");
    }
});

document.getElementById("border-box3").addEventListener("click", function(){
    const arrow =document.getElementById("arrow3")
    const Answer =document.getElementById("Answer3")

    if(arrow.style.transform === "rotate(270deg)"){
        arrow.style.transform = "rotate(90deg)";
        Answer.classList.add("hidden");
    }else{
        arrow.style.transform = "rotate(270deg)";
        Answer.classList.remove("hidden");
    }
});

document.getElementById("border-box4").addEventListener("click", function(){
    const arrow =document.getElementById("arrow4")
    const Answer =document.getElementById("Answer4")

    if(arrow.style.transform === "rotate(270deg)"){
        arrow.style.transform = "rotate(90deg)";
        Answer.classList.add("hidden");
    }else{
        arrow.style.transform = "rotate(270deg)";
        Answer.classList.remove("hidden");
    }
});

document.getElementById("blog").addEventListener("click", function(){
    if(document.getElementById("blog").innerText === "Home"){
        document.getElementById("FAQ").classList.add("hidden");
        document.getElementById("blog").innerText = "Blog";
    }else{
        document.getElementById("FAQ").classList.remove("hidden");
        document.getElementById("blog").innerText = "Home";

        document.getElementById("donate-box").style.display = "none";
        document.getElementById("history-box").style.display = "none";

        document.getElementById("donation").classList.remove("bg-[#B4F461]");
        document.getElementById("donation").classList.add("border-slate-400", "bg-white", "border-2");
        document.getElementById("history").classList.remove("bg-[#B4F461]");
        document.getElementById("history").classList.add("border-slate-400", "bg-white", "border-2");
    }
});

document.getElementById('close-information').addEventListener('click', function(){
    document.getElementById('alert-box').classList.add('hidden');
    document.getElementById('alert-box').classList.remove('flex');
});

document.getElementById('close-cencal-information').addEventListener('click', function(){
    document.getElementById('alert-cencal-box').classList.add('hidden');
    document.getElementById('alert-cencal-box').classList.remove('flex');
});