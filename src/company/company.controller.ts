import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('company')
@Controller('v1/company')
export class CompanyController {
  @ApiOperation({ summary: 'Get list of companies' })
  @Get()
  async getAll() {
    return [];
  }
}
