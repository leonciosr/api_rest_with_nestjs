import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { FitroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';
import { TransformaRespostaInterceptor } from './core/http/transforma-resposta.interceptor';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FitroDeExcecaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor
    }
  ],
})
export class AppModule {}
