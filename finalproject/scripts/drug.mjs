const drugList = document.querySelector('.result')

export function getDrugList(g){
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        try {
            const value = JSON.parse(localStorage.getItem(key));
            if (value && value.name) {
                const li = document.createElement("li");
                li.textContent = `${value.name}`;
                drugList.appendChild(li);
            }
        } catch (e) {
            console.warn(`Skipped key ${key}: not valid JSON`);
        }
    }
}
