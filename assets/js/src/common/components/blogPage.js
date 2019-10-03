export default function blogPage (result) {
  console.log(result);
  
  return (
    `
    <div class="news">
      <div class="news__wrapper">
      <div class="news__single">
        <div class="news__title">${result.title.rendered}</div>
      </div>
      </div>
    </div>
    `
  )
};
