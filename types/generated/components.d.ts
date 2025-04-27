import type { Schema, Struct } from '@strapi/strapi';

export interface ShareHarakteristika extends Struct.ComponentSchema {
  collectionName: 'components_share_harakteristika';
  info: {
    displayName: '\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430';
  };
  attributes: {
    character: Schema.Attribute.String & Schema.Attribute.Required;
    character_value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShareMarketplejs extends Struct.ComponentSchema {
  collectionName: 'components_share_marketplejs';
  info: {
    displayName: '\u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'share.harakteristika': ShareHarakteristika;
      'share.marketplejs': ShareMarketplejs;
    }
  }
}
