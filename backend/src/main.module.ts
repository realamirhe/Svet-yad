import { Module } from '@nestjs/common'
import { Neo4jConfig, Neo4jModule } from 'nest-neo4j'
import { NEO4J_OPTIONS } from './main-configs'
// modules
import { WordModule } from './word/word.module'
import { CategoryModule } from './category/category.module'
import { LanguageModule } from './language/language.module'
import { UserModule } from './user/user.module'
import { ParagraphModule } from './paragraph/paragraph.module'

@Module({
  imports: [
    Neo4jModule.forRoot(NEO4J_OPTIONS as Neo4jConfig),
    WordModule,
    CategoryModule,
    LanguageModule,
    UserModule,
    ParagraphModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
