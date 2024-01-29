import { type SchemaTypeDefinition } from 'sanity'
import { HeadTeam, TeamSchema } from './TeamSchema'
import { ServiceSchema } from './ServiceSchema'
import { TestimonialSchema } from './TestimonialSchema'
import { BenefitsOfTherapySchema } from './BenefitsOfTherapySchema'
import { MissionVisionSchema } from './MissionVisionSchema'
import { FAQSchema } from './FAQSchema'
import { TOTSchema } from './TOTSchema'
import { KnowMoreSchema } from './KnowMoreSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [TeamSchema,HeadTeam,ServiceSchema,TestimonialSchema,BenefitsOfTherapySchema,MissionVisionSchema,FAQSchema,TOTSchema,KnowMoreSchema],
}
