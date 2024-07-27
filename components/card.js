export const card = (object) => {
  return `
  <div class="row">
    <div class="card style="width: 10rem;">
      <div class="card-body">
        <header class="text-center">
          <h2 class="card-title">${object.name}</h2>
        </header>

        <img src="${object.imageUrl}" alt="picture of ${object.name}">
        
        <div class="text-center">
          <button class="btn btn-danger" id="delete-obj-card-btn--${object.id}">Delete</button>
        </div>
      </div>
    </div> <!-- ./card --></div>`;
};
