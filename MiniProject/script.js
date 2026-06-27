function searchTrip()
{
    alert("Trip search feature coming soon!");
}

// async function searchTrip() {
//     let input = document.getElementById("searchInput").value;

//     let res = await fetch(`/?search=${input}`);
//     let data = await res.json();

//     let container = document.getElementById("results");
//     container.innerHTML = "";

//     data.forEach(trip => {
//         container.innerHTML += `
//             <div class="card">
//                 <h3>${trip.name}</h3>
//                 <p>${trip.description}</p>
//             </div>
//         `;
//     });
// }