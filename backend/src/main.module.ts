import { Module } from '@nestjs/common'
import { Neo4jModule, Neo4jConfig } from 'nest-neo4j'
import { NEO4J_OPTIONS } from './main-configs'

@Module({
  imports: [Neo4jModule.forRoot(NEO4J_OPTIONS as Neo4jConfig)],
  controllers: [],
  providers: [],
})
export class MainModule {}
