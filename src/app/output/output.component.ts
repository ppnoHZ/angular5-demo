import { Component, OnInit, Output, Input, EventEmitter, SimpleChange } from '@angular/core';
import { ClassGetter } from '_@angular_compiler@5.2.10@@angular/compiler/src/output/output_ast';
// import { EventEmitter } from 'protractor'; //坑

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
  // inputs: ['hero'],
  outputs: ['myClick2:deleteRequest2']
})


export class OutputComponent implements OnInit {
  color = 'red';
  private _name = '';
  @Input() hero: string;

  @Input()
  set heroGetSet(name: string) {
    if (name) {
      this._name = name;
    } else {
      console.error('name 为空');
    }
  }
  get heroGetSet(): string {
    return this._name
  }

  @Output('myClick') deleteRequest = new EventEmitter<any>();

  deleteRequest2 = new EventEmitter<string>();

  heroObj = new Hero('zhoudd');
  // deleteRequest= new EventEmitter();
  constructor() { }
  changeLog: string[] = [];
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log('ngOnChanges', changes);
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit:初始化完组件视图及其子视图之后调用。');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked:每次做完组件视图和子视图的变更检测之后调用');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy:当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。在 Angular 销毁指令/组件之前调用。')
  }
  delete(hero): void {
    console.log('发送事件：deleteRequest')
    this.deleteRequest.emit(hero);
  }
  delete2(): void {
    console.log('发送事件：deleteRequest')
    this.deleteRequest.emit('deleteRequest2');
  }

}
class Hero {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

}
