

const input = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const sentCount = document.getElementById("sentCount");

// Տեքստի մշակում
input.addEventListener("input", () => {
    const text = input.value.trim();
    
    // Տառեր
    charCount.textContent = text.length;
    
    // Բառեր (ֆիլտրում ենք դատարկ տարրերը)
    const words = text ? text.split(/\s+/).length : 0;
    wordCount.textContent = words;
    
    // Նախադասություններ (բաժանում ենք կետերով, հարցականներով, բացականչականներով)
    const sentences = text ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;
    sentCount.textContent = sentences;
});

// Asynchronous: Բերում ենք պատահական մեջբերում (այս պահանջը բավարարում է)
async function fetchRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        input.value = data.content;
        input.dispatchEvent(new Event("input")); // Թարմացնում ենք վիճակագրությունը
    } catch (e) {
        console.log("Չհաջողվեց ստանալ մեջբերում");
    }
}