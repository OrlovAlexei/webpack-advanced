declare module "*.css" {
  const content: { [key: string]: string };
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

interface SvgComponent extends React.FC<React.SVGAttributes<SVGElement>> { }

declare module "*.svg" {
  const value: SvgComponent;
  export default value;
}
