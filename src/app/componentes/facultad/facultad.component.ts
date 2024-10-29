import { Component } from '@angular/core';
import { SidevarComponent } from "../sidevar/sidevar.component";

@Component({
  selector: 'app-facultad',
  standalone: true,
  imports: [SidevarComponent],
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})
export class FacultadComponent {

}
