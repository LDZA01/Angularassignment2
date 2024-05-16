import { Component } from '@angular/core';
import { CustomPipe } from './custom.pipe';
import { AgePipe } from './age.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CustomPipe, AgePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  message: string = 'Naphat Chartwanchai'

  birthdate = '2004-08-23'
}
