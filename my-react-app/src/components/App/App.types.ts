export interface ImgInstance {
    id: string;
    alt_description: string;
    urls: { small: string; regular: string };
  }
  export type ImgArray = ImgInstance[];
  
  export interface ImgDetails {
    alt_description: string;
    regular: string;
    portfolio: string;
  }