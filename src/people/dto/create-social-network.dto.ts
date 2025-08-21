import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsUrl,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateSocialNetworkDto {
  @ApiProperty({
    description: 'Social network name',
    example: 'Facebook',
    minLength: 2,
    maxLength: 50,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @ApiProperty({
    description: 'Base URL of the social network',
    example: 'https://facebook.com',
  })
  @IsUrl()
  baseUrl: string;

  @ApiProperty({
    description: 'Icon class for the social network',
    example: 'fab fa-facebook',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  iconClass?: string;

  @ApiProperty({
    description: 'Brand color of the social network',
    example: '#1877F2',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(7)
  brandColor?: string;
}
