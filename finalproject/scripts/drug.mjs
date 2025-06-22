const drugList = document.querySelector('.druglist')

export function getDrugList(){
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(key)

        try {
            if (key.startsWith("Drug")) {
                 const value = JSON.parse(localStorage.getItem(key));
                if (value) {
                    const li = document.createElement("li");
                    li.textContent += `${value.name} - ${value.verified? "Verified ✅" : "Not verified"}`;
                    drugList.appendChild(li);
                }
            }
        } catch (e) {
            console.warn(`Skipped key ${key}: not valid JSON`);
            
        }
        
    }
}
