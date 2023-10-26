import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.scss'],
})
export class ServerCockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInput: any) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(serverNameInput: any) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
    });
  }
}
