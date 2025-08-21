import { DataSource } from 'typeorm';
import { SocialNetwork } from '../people/entities/social-network.entity';

export const socialNetworksData = [
  {
    name: 'Facebook',
    baseUrl: 'https://facebook.com',
    iconClass: 'fab fa-facebook',
    brandColor: '#1877F2',
  },
  {
    name: 'Twitter/X',
    baseUrl: 'https://x.com',
    iconClass: 'fab fa-x-twitter',
    brandColor: '#000000',
  },
  {
    name: 'Instagram',
    baseUrl: 'https://instagram.com',
    iconClass: 'fab fa-instagram',
    brandColor: '#E4405F',
  },
  {
    name: 'LinkedIn',
    baseUrl: 'https://linkedin.com/in',
    iconClass: 'fab fa-linkedin',
    brandColor: '#0A66C2',
  },
  {
    name: 'GitHub',
    baseUrl: 'https://github.com',
    iconClass: 'fab fa-github',
    brandColor: '#181717',
  },
  {
    name: 'YouTube',
    baseUrl: 'https://youtube.com/@',
    iconClass: 'fab fa-youtube',
    brandColor: '#FF0000',
  },
  {
    name: 'TikTok',
    baseUrl: 'https://tiktok.com/@',
    iconClass: 'fab fa-tiktok',
    brandColor: '#000000',
  },
  {
    name: 'WhatsApp',
    baseUrl: 'https://wa.me',
    iconClass: 'fab fa-whatsapp',
    brandColor: '#25D366',
  },
  {
    name: 'Telegram',
    baseUrl: 'https://t.me',
    iconClass: 'fab fa-telegram',
    brandColor: '#0088CC',
  },
  {
    name: 'Discord',
    baseUrl: 'https://discord.com/users',
    iconClass: 'fab fa-discord',
    brandColor: '#7289DA',
  },
];

export const runSocialNetworksSeed = async (dataSource: DataSource): Promise<void> => {
  const socialNetworkRepository = dataSource.getRepository(SocialNetwork);

  // Verificar si ya existen redes sociales
  const existingSocialNetworks = await socialNetworkRepository.count();
  if (existingSocialNetworks > 0) {
    console.log('Social Networks seed already executed');
    return;
  }

  // Crear las redes sociales
  const socialNetworks = socialNetworkRepository.create(socialNetworksData);
  await socialNetworkRepository.save(socialNetworks);

  console.log(`✓ ${socialNetworks.length} social networks created successfully`);
};

// Función para ejecutar el seed independientemente
export const seedSocialNetworks = async (dataSource: DataSource) => {
  try {
    await runSocialNetworksSeed(dataSource);
  } catch (error) {
    console.error('Error seeding social networks:', error);
    throw error;
  }
};