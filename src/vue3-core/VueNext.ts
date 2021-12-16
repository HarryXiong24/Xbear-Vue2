import { Compiler } from './Compiler';

export interface Options {
  el: string;
  template?: string;
  setup: () => any;
}

export interface VueNextType {
  $options: Options;
  $setupReturned: Record<string, any>;
  $el: HTMLElement;
  [propName: string]: any;
}

export default class VueNext implements VueNextType {
  public $options: Options;
  public $setupReturned: Record<string, any>;
  public $el: HTMLElement;

  constructor(options: Options) {
    this.$options = options;
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el)! : options.el;
    this.$setupReturned = options.setup();
    new Compiler(this);
  }
}
