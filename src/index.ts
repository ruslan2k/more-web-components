import 'bulma/css/bulma.min.css'

export * from './components/LoginForm'

const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

