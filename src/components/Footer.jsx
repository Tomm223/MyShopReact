import React from "react";

function Footer() {
   return (
      <>
         <div class="free">
            <div class="container">
               <div class="free__list">
                  <div class="free__item">
                     <img class="free__item-img" src="/img/page-icon/delivery.svg" alt="" />
                     <h3 class="free__item-title">Free Delivery</h3>
                     <p class="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
                  <div class="free__item">
                     <img class="free__item-img" src="/img/page-icon/discounts.svg" alt="" />
                     <h3 class="free__item-title">Sales & discounts</h3>
                     <p class="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
                  <div class="free__item">
                     <img class="free__item-img" src="/img/page-icon/quality.svg" alt="" />
                     <h3 class="free__item-title">Quality assurance</h3>
                     <p class="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
               </div>


            </div>

         </div>
         <div class="sub">
            <div class="sub__item">
               <form class="sub__item-form" action="sub">
                  <label class="sub__item-supp">
                     <h3>SUBSCRIBE</h3>
                     <span>FOR OUR NEWSLETTER AND PROMOTION</span>
                  </label>
                  <input class="sub__item-input" type="text" placeholder="Email" />
                  <input class="sub__item-btn" type="button" value="Subscribe" />
               </form>
            </div>
         </div>
         <div class="free">
            <div class="container">
               <div class="free__list">
                  <div class="free__item">
                     <img class="free__item-img" src="/img/page-icon/delivery.svg" alt="" />
                     <h3 class="free__item-title">Free Delivery</h3>
                     <p class="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
                  <div class="free__item">
                     <img class="free__item-img" src="/img/page-icon/discounts.svg" alt="" />
                     <h3 class="free__item-title">Sales & discounts</h3>
                     <p class="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
                  <div class="free__item">
                     <img class="free__item-img" src="/img/page-icon/quality.svg" alt="" />
                     <h3 class="free__item-title">Quality assurance</h3>
                     <p class="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
               </div>


            </div>

         </div>
         <footer class="footer">
            <div class="container">
               <div class="footer__items">
                  <div class="footer__text">© 2022 VESH4lKa</div>
                  <div class="footer__contacts">
                     <div class="contact-item contact-item-face"></div>
                     <div class="contact-item contact-item-vk"></div>
                     <div class="contact-item contact-item-inst"></div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}
export default Footer