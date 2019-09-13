import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pan-space',
  templateUrl: './pan-space.component.html',
  styleUrls: ['./pan-space.component.css']
})
export class PanSpaceComponent {
  @Input()
  saveAllPans: any[];
  iFrame;
  oneThirdHeight = 6;
  oneSixthHeight = 6;
  oneNinthHeight = 4;
  oneThirdwidth = 9;
  oneSixthWidth = 7;
  oneNinthWidth = 9;
  


  position(ingredient: any, event: any) {
    const element = event.source.element.nativeElement;
    const position = element.style["transform"];
    ingredient.position = position;
    //assigns the position value to the ingredient
  }

  getIngredientHeight(ingredient: any) {
    if (ingredient.pans_size === '1/3') {
      return this.oneThirdHeight + 'rem';
    } else if (ingredient.pans_size === '1/9') {
      return this.oneNinthHeight + 'rem';
    } else if (ingredient.pans_size === '1/6') {
      return this.oneSixthHeight + 'rem';
    } else if (ingredient.pans_size === '2/3') {
      return '7.5rem';
    }
  }

  getIngredientWidth(ingredient: any) {
    if (ingredient.pans_size === '1/3') {
      return this.oneThirdwidth + 'rem';
    } else if (ingredient.pans_size === '1/9') {
      return this.oneNinthWidth + 'rem';
    } else if (ingredient.pans_size === '1/6') {
      return this.oneSixthWidth + 'rem';
    } else if (ingredient.pans_size === '2/3') {
      return '9rem';
    }
  }

  miniIngredientWidth(ingredient: any) {
    if (ingredient.pans_size === '1/3') {
      return this.oneThirdwidth / 4 + 'rem';
    } else if (ingredient.pans_size === '1/9') {
      return this.oneNinthWidth / 4+ 'rem';
    } else if (ingredient.pans_size === '1/6') {
      return this.oneSixthWidth / 4+ 'rem';
    } else if (ingredient.pans_size === '2/3') {
      return '9rem';
    }
  };

  miniIngredientHeight(ingredient: any) {
    if (ingredient.pans_size === '1/3') {
      return this.oneThirdHeight / 4 + 'rem';
    } else if (ingredient.pans_size === '1/9') {
      return this.oneNinthHeight / 4 + 'rem';
    } else if (ingredient.pans_size === '1/6') {
      return this.oneSixthHeight / 4 + 'rem';
    } else if (ingredient.pans_size === '2/3') {
      return '7.5rem';
    }
  };





















  miniMap() {
    var html = document.querySelector('.mini-pan-section');
    if (this.iFrame) {
      {        
        this.iFrame.open();
        this.iFrame.write(html.innerHTML);
        this.iFrame.close();
        return;
      }
    }
    var doc = document,
      docEle = document.documentElement,
      body = doc.body,
      window = window;

    var slider = document.createElement('div'),
      sliderSize = document.createElement('div'),
      controller = document.createElement('div'),
      sliderContent = document.createElement('iframe'),
      scale = 0.1,
      realScale = scale;

    slider.className = 'slider';
    sliderSize.className = 'slider__size';
    controller.className =
      'slider__controller';


    sliderContent.className += 'slider__content';
    sliderContent.style.transformOrigin = ' 0 0';

    slider.appendChild(sliderSize);
    slider.appendChild(controller);
    slider.appendChild(sliderContent);
    body.appendChild(slider);

    // var html = document.documentElement.outerHTML.replace(
    //   /<script([\s\S]*?)>([\s\S]*?)<\/script>/gim, ''
    // )

    // var script = '<script>var slider=document.querySelector(".slider"); slider.parentNode.removeChild(slider);<' + '/script>';

    // html = html.replace('</body>', script + '</body>');

    var iframeDoc = sliderContent.contentWindow.document;
  
    this.iFrame = iframeDoc;
    

   
    this.iFrame.open();
    this.iFrame.write(html.innerHTML);
    this.iFrame.close();
  }


  onClose(i) {
    if (confirm('Are you sure you want to delete this pan?')) {
      this.saveAllPans.splice(i, 1)
    }
  }
}
