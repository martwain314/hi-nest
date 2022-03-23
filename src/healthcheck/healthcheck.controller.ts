import { Controller, Get } from '@nestjs/common';
import { HealthCheckupResults } from 'src/output/entities/HealthCheckupResults';
import { getRepository } from 'typeorm';

@Controller('healthcheck')
export class HealthcheckController {
  @Get('/all')
  async getAll() {
    const healthcheckResults = await getRepository(HealthCheckupResults).find();
    return healthcheckResults;
  }
}
