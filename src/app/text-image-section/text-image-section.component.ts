import { Component } from '@angular/core';
import { TextImageCardComponent } from '../text-image-card/text-image-card.component';
@Component({
  selector: 'app-text-image-section',
  standalone: true,
  imports: [TextImageCardComponent],
  templateUrl: './text-image-section.component.html',
  styleUrl: './text-image-section.component.css'
})
export class TextImageSectionComponent {
  escoraAdvantagesItems = [{
    "title" : "Alta Resistência",
    "description" : "Suporta grandes cargas, garantindo estabilidade em obras de pequeno e grande porte."
  },{
    "title" : "Ajustável",
    "description" : "Permite regulagem de altura, adaptando-se a diferentes necessidades do projeto."
  },{
    "title" : "Durabilidade",
    "description" : "Fabricada em aço resistente à corrosão, ideal para uso repetido."
  },{
    "title" : "Fácil Instalação",
    "description" : "Simples de montar e desmontar, otimizando o tempo de trabalho."
  }]

  andaimeAdvantagesItems = [{
    "title" : "Segurança",
    "description" : "Estrutura sólida para garantir a proteção dos trabalhadores em qualquer altura."
  },{
    "title" : "Versatilidade",
    "description" : "Adaptável a diversas alturas e tipos de obras, seja para reformas simples ou grandes construções."
  },{
    "title" : "Facilidade de Montagem:",
    "description" : "Peças modulares que permitem instalação rápida e eficiente."
  },{
    "title" : "Mobilidade",
    "description" : "Nossos modelos possuem rodízios, facilitando a movimentação dentro da obra."
  }]
}
