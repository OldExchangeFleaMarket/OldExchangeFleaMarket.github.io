function checkOpenStatus() {
    const openStatus = document.getElementById('open-status');
    if (!openStatus) {
        console.error("Element with ID 'open-status' not found.");
        return;
    }
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();

    //define open hours
    let isOpen = false;

    if (
        ((day >= 3 && day <= 6)&&(hour >= 10 && hour <17 )) ||
        (day === 0 && (hour >= 13 && hour < 17))
    ){
        isOpen = true;
    }

    //update status based on openStatus
    if (isOpen){
        openStatus.innerHTML = "✅ Open";
        openStatus.classList.add("open");
        openStatus.classList.remove("closed");
    } else {
        openStatus.innerHTML = "❌ Closed";
        openStatus.classList.add("closed");
        openStatus.classList.remove("open");
    }
}
    //run the function when the page loads
    window.onload = checkOpenStatus;