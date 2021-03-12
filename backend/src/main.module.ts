import { Module } from '@nestjs/common'
import { Neo4jModule, Neo4jConfig } from 'nest-neo4j'
import { NEO4J_OPTIONS } from './main-configs'
// modules
import { WordModule } from './word/word.module'

@Module({
  imports: [Neo4jModule.forRoot(NEO4J_OPTIONS as Neo4jConfig), WordModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
