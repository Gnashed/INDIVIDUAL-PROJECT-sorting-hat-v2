export const card = (object) => {
  return `
  <div class="row">
    <div class="card animate__animated animate__bounceInDown mb-4" style="width: 30rem;">
      <div class="card-body">
        <header class="text-center">
          <h4 class="card-title">${object.name}</h4>
        </header>

        <img src="${object.imageUrl}" alt="picture of ${object.name}" class="mb-2">
        
        <p style="font-weight: bold; font-size:1.25rem;">${object.house}</p>

        <div class="text-center">
          <button class="btn btn-danger" id="delete-obj-card-btn--${object.id}">Expel</button>
        </div>
      </div>
    </div> <!-- ./card -->
  </div>`;
};
