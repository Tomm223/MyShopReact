
export function LoadingDefault() {
   return (
      <div class="spinner-border m-5" role="status">
         <span class="visually-hidden">Loading...</span>
      </div>
   )
}
export function LoadingGenderGallery() {
   return (
      <div class="gallery__item" aria-hidden="true">
         <img src="..." class="gallery__item-img paddingImg placeholder" alt="..." />
         <div class="gallery__item-title placeholder-glow">
            <span class="placeholder col-12"></span>
         </div>
      </div>
   )
}
