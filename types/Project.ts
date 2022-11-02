export interface IProject {
  sys: {
    id: string
  }
  title: string,
  type: string,
  description: string,
  thumbnail: string,
  web: string | null,
  apple: string | null,
  playstore: string | null
  github: string,
  stack: StackItem[],
  tags: string[]
  slug: string
}

export type StackItem = 
| 'React'| 'Node' | 'PostgreSQL' | 'Next.js'| 'TypeScript' | 'Contentful' | 'AWS' 
| 'GraphQL' | 'Google Cloud' | 'MongoDB' | 'Stripe' | 'S3' | 'EC2' | 'RDS' | 'Apollo' 
| 'Beanstalk' | 'Firebase' | 'Mapbox' | 'React-Query' | 'Redis' | 'Redux' | 'Expo'
| 'Pandas' | 'Jest' | 'React Native' | 'HTML & CSS'