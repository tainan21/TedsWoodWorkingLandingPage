// // @/types/ContentBlock.ts
// export interface ContentBlock {
//     id: string;
//     type: 'text' | 'image' | 'video' | 'testimonial' | 'cta' | 'faq' | 'product';
//     content: any;
//     settings?: Record<string, any>;
//   }
  
//   export interface TextBlock extends ContentBlock {
//     type: 'text';
//     content: {
//       headline?: string;
//       subheadline?: string;
//       body: string;
//     };
//   }
  
//   export interface ImageBlock extends ContentBlock {
//     type: 'image';
//     content: {
//       src: string;
//       alt: string;
//       caption?: string;
//     };
//   }
  
//   export interface VideoBlock extends ContentBlock {
//     type: 'video';
//     content: {
//       src: string;
//       thumbnail?: string;
//       title?: string;
//     };
//   }
  
//   export interface TestimonialBlock extends ContentBlock {
//     type: 'testimonial';
//     content: {
//       quote: string;
//       author: string;
//       role?: string;
//       image?: string;
//     };
//   }
  
//   export interface CtaBlock extends ContentBlock {
//     type: 'cta';
//     content: {
//       headline: string;
//       description?: string;
//       buttonText: string;
//       buttonLink: string;
//     };
//   }
  
//   export interface FaqBlock extends ContentBlock {
//     type: 'faq';
//     content: {
//       question: string;
//       answer: string;
//     }[];
//   }
  
//   export interface ProductBlock extends ContentBlock {
//     type: 'product';
//     content: {
//       name: string;
//       price: number;
//       description: string;
//       image: string;
//       features?: string[];
//     };
//   }
  
//   export type SpecificContentBlock = 
//     | TextBlock 
//     | ImageBlock 
//     | VideoBlock 
//     | TestimonialBlock 
//     | CtaBlock 
//     | FaqBlock
//     | ProductBlock;