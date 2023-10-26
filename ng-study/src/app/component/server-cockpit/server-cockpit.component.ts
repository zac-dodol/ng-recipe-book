import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.scss'],
})
export class ServerCockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverFooter: string;
  }>();

  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverFooter: string;
  }>();

  @Output('fooCreated') footerCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverFooter: string;
  }>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  newServerFooter = 'foot';

  onAddServer(serverNameInput: any) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      serverFooter: this.newServerFooter,
    });
  }

  onAddBlueprint(serverNameInput: any) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      serverFooter: this.newServerFooter,
    });
  }

  onAddFooter(serverNameInput: any) {
    this.footerCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      serverFooter: this.newServerFooter,
    });
  }
}
