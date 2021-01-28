import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PruebasCovidService } from 'src/app/service/pruebas-covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuChecked: boolean = false;
  selectTabs: string = "Covid";
  CONFIRMADOS_COL: number;
  ACTIVOS_COL: number;
  RECUPERADOS_COL: number;
  MUERTES_COL: number;
  //
  positivas_acumuladas: number;
  acumuladas: number;
  negativas_acumuladas: number;

  constructor(
    private covidService: PruebasCovidService, private router: Router
  ) {

  }

  ngOnInit() {
    this.cifrasGenerales();
    this.pruebasCovid();
  }

  pruebasCovid() {
    this.covidService.getJsonPruebasCovid().subscribe(data => {
      data.forEach(element => {
        this.acumuladas = element.acumuladas;
        this.positivas_acumuladas = element.positivas_acumuladas;
        this.negativas_acumuladas = element.negativas_acumuladas;
      });
    })
  }

  cifrasGenerales() {
    this.covidService.getCifrasGenerales().subscribe(data => {
      data.features.forEach(element => {
        this.CONFIRMADOS_COL = element.properties.CONFIRMADOS_COL;
        this.ACTIVOS_COL = element.properties.ACTIVOS_COL;
        this.RECUPERADOS_COL = element.properties.RECUPERADOS_COL;
        this.MUERTES_COL = element.properties.MUERTES_COL;
      });
    });
  }

  menuChangeEvento() {
    if (this.menuChecked == false) {
      document.getElementById('toggle').style.boxShadow = "0 0 0 1400px var(--ion-color-primary)";
      document.getElementById('details').style.display = "flex";
      document.getElementById('details').style.transitionDelay = "0.5s";
      this.menuChecked = true;
    } else {
      document.getElementById('toggle').style.boxShadow = "0 0 0 0px var(--ion-color-primary)";
      document.getElementById('details').style.display = "none";
      this.menuChecked = false;
    }
  }

  menuEvento(value) {
    document.getElementById('toggle').style.boxShadow = "0 0 0 0px var(--ion-color-primary)";
    document.getElementById('details').style.display = "none";
    this.menuChecked = false;
    if (value == 'home') {
      console.log('home');
      document.getElementById('ContentHome').style.display = "block"; 
      document.getElementById('ContentLineas').style.display = "none";
      document.getElementById('ContentPreguntas').style.display = "none";
    } else if (value == 'lineas') {
      console.log('lineas');
      document.getElementById('ContentHome').style.display = "none";
      document.getElementById('ContentLineas').style.display = "block";
      document.getElementById('ContentPreguntas').style.display = "none";
    } 
  }

  slideOpts = { 
    autoplay:true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);
          let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
          let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
          }
        }

        // Set correct perspective for IE10
        if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
      }
    }
  }


}
