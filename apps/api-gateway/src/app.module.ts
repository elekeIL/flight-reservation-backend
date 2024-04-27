import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProxyModule } from './proxy/proxy.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ClientProxyFlightReservations } from './proxy/client-proxy-flight-reservations.service';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development'],
    }),
    ProxyModule,
    AuthModule,
    ReservationModule,
    UserModule,
  ],
  controllers: [],
  providers: [ClientProxyFlightReservations],
})
export class AppModule {}
