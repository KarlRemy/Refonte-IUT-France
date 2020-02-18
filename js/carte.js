let regions = document.querySelectorAll("path");

regions.forEach(function (region) {
  region.addEventListener("mouseenter", function (e) {
    document.querySelectorAll(".is-active").forEach(function (item) {
      item.classList.remove('is-active');
    });
    let id = this.id.replace('region-', '');
    document.querySelector('#list-' + id).classList.add('is-active');
  });
  region.addEventListener("click", function (e) {
    e.preventDefault();
    let id = this.id.replace('region-', '');
    location.href = '#list-' + id;
  })
});
