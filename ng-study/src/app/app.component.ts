import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title = 'angular-study-project';

  constructor(private router: Router) {}

  // lifecycle hooks of angular
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    // called after a bound input property changes
    // Respond to changes in @input properties
    // Do something when @input Property changes
  }

  ngOnInit() {
    console.log('ngOnInit');
    // called once the component is initialized
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    // called during every change detection run
    // Implement custom change detection logic
    // This method is called during every change detection cycle
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    // called after content (ng-content) has been projected into view
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentInit');
    // called every time the projected content has been checked
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // called after the component's view (and the child views) has been initialized
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewInit');
    // called every time the view (and child views) has been checked
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // called once the component is a about to be destroyed (eg: ngif, splice, removal of component)
    // just before removing a component
  }

  // dual header not required now
  isRecipePage() {
    return ['/recipe-page', '/', '/recipe', '/shopping-list'].includes(
      this.router.url
    );
  }
}
