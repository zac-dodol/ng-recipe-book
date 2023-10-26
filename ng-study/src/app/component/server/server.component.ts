import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  // Explicitly specify the type of the array
  serverElements = [
    {
      type: 'server',
      name: 'TestServer',
      content: 'Just a test',
    },
    {
      type: 'blueprint',
      name: 'TestBlueprint',
      content: 'Just a test',
    },
  ];

  @Input() serverName: any[] = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus == 'online' ? 'online' : 'offline';
  }

  onRemoveServer(id: number) {
    const position = id;
    this.serverName.splice(position, 1);
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
}
