import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftComponentComponent } from './components/left-component/left-component.component';
import { RightComponentComponent } from './components/right-component/right-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftComponentComponent, RightComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StateManagementTutorial';
}
