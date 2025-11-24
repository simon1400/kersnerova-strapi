import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'meta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface NavigationItem extends Schema.Component {
  collectionName: 'components_navigation_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ChapterTitle extends Schema.Component {
  collectionName: 'components_chapter_titles';
  info: {
    displayName: 'Nadpis kapitoly';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ChapterContent extends Schema.Component {
  collectionName: 'components_chapter_contents';
  info: {
    displayName: 'Textov\u00E9 pole';
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ChapterButton extends Schema.Component {
  collectionName: 'components_chapter_buttons';
  info: {
    displayName: 'Tla\u010D\u00EDtko';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta': SeoMeta;
      'navigation.item': NavigationItem;
      'chapter.title': ChapterTitle;
      'chapter.content': ChapterContent;
      'chapter.button': ChapterButton;
    }
  }
}
