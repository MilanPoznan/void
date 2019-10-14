export default function singleArticle (result) {
  return (
    `
    <div class="article">
      <div class="article__wrapper">
        <div class="article__image" style="background-image: url('${result.acf.post_image}')"></div>
        <div class="article__content-wrapp">
          <h1 class="Article__title">${result.title.rendered}</h1>
          <div class="Article__content">${result.content.rendered}</div>
        </div>
      </div>
      </div>
    </div>
    `
  )
};
