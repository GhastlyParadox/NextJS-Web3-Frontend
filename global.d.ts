declare module 'daisyui';
declare module '@tailwindcss/typography';

declare module '*.module.css' {
    const content: string;
    export default content;
  }