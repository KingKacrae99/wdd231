import { getDrugList } from "./drug.mjs";
export default function showDrugInfo(drug){
    const verifyDetails = document.querySelector('#verify-details');
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".drug-content");
    verifyDetails.showModal()
    loader.classList.remove("loader-hidden")
    content.style.display ='none';

    setTimeout(()=>{
        if(drug){
            loader.classList.remove("loader")
            loader.classList.add("loader-hidden");
            content.style.display = "block";

            function Verified(drug){
                if(drug.verified){
                    return "Verified ✅";
                } else{
                    return "Drug's not Authentic";
                }
            }
            content.innerHTML = `
                <h3>${drug.name}</h3>
                <p><strong>Batch Number </strong> ${drug.batch}</p>
                <p><strong>Manufacturer</strong> ${drug.manufacturer}</p>
                <p><strong>Expiry</strong> ${drug.expiry}</p>
                <p><strong>NafDac No</strong> ${drug.nafdac_no}</p>
                <p><strong>Verified</strong> ${Verified(drug)}</p>
                <div class="save-option">
                Would you like add this drug to your drug list? 
                <button id="saveitem">yes</button> <button id="dontsave">No</button>
                </div>
                `
        } else{
            content.innerHTML =`
                <button id="closeModal">X</button>
                <h3>Drug not found!</h3>`;
        }
        
    saveitem.addEventListener('click', () => {
    if (localStorage.getItem(drug.name)) {
        content.innerHTML =`
        <h3>This drug is already saved in your drug list</h3>`;
        
    } else {
        localStorage.setItem(drug.name, JSON.stringify(drug))
        console.log(JSON.stringify(drug))
        content.innerHTML = `
            <h3>Drug has been added to list</h3>`
    }
    });
    dontsave.addEventListener('click', () =>{
        verifyDetails.close()
    });
    
    },750)

    closeModal.addEventListener('click', () =>{
        verifyDetails.close()
    });

    
}