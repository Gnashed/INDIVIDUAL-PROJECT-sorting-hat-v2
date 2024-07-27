export const expelledCard = (object) => {
  return `
  <div class="row">
    <div class="card" style="width: 24rem;">
      <div class="card-body">
        <header class="text-center">
          <h2 class="card-title">${object.name}</h2>
        </header>

        <img src="${object.imageUrl}" alt="picture of ${object.name}">

        <div class="text-center">
          <p><strong>${object.name}</strong> has been banished to the dark army! 😈</p>
        </div>
      </div>
    </div> <!-- ./card --></div>`;
};
